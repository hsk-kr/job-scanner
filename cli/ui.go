package main

import (
	"fmt"
	"io"
	"strings"

	"github.com/charmbracelet/bubbles/list"
	"github.com/charmbracelet/bubbles/textinput"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
)

var (
	titleStyle        = lipgloss.NewStyle().MarginLeft(2)
	itemStyle         = lipgloss.NewStyle().PaddingLeft(4)
	questionStyle     = lipgloss.NewStyle().PaddingLeft(4).Foreground(lipgloss.Color("#16a085"))
	selectedItemStyle = lipgloss.NewStyle().PaddingLeft(2).Foreground(lipgloss.Color("#27ae60"))
	paginationStyle   = list.DefaultStyles().PaginationStyle.PaddingLeft(4)
	helpStyle         = list.DefaultStyles().HelpStyle.PaddingLeft(4).PaddingBottom(1)
	quitTextStyle     = lipgloss.NewStyle().Margin(1, 0, 2, 4)
)

type item string

func (i item) FilterValue() string { return "" }

type itemDelegate struct{}

func (d itemDelegate) Height() int                             { return 1 }
func (d itemDelegate) Spacing() int                            { return 0 }
func (d itemDelegate) Update(_ tea.Msg, _ *list.Model) tea.Cmd { return nil }
func (d itemDelegate) Render(w io.Writer, m list.Model, index int, listItem list.Item) {
	i, ok := listItem.(item)
	if !ok {
		return
	}

	str := fmt.Sprintf("%d. %s", index+1, i)

	fn := itemStyle.Render
	if index == m.Index() {
		fn = func(s ...string) string {
			return selectedItemStyle.Render("> " + strings.Join(s, " "))
		}
	}

	fmt.Fprint(w, fn(str))
}

const SCREEN_MAIN = 0
const SCREEN_VERSION = 1
const SCREEN_BUILD = 2

type model struct {
	list      list.Model
	quitting  bool
	textInput textinput.Model
	screen    int
}

func (m model) Init() tea.Cmd {
	return nil
}

func initialModel() model {
	items := []list.Item{
		item("Change Version"),
		item("Build Extension Package"),
	}

	const defaultWidth = 20
	const listHeight = 14

	l := list.New(items, itemDelegate{}, defaultWidth, listHeight)
	l.Title = "Hello, Sir! How can I help you?"
	l.SetShowStatusBar(false)
	l.SetFilteringEnabled(false)
	l.Styles.Title = titleStyle
	l.Styles.PaginationStyle = paginationStyle
	l.Styles.HelpStyle = helpStyle

	ti := textinput.New()
	ti.Placeholder = "1.0.0"
	ti.Focus()
	ti.CharLimit = 156
	ti.Width = 20

	return model{
		screen:    SCREEN_MAIN,
		textInput: ti,
		list:      l,
	}
}

func (m model) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	var cmd tea.Cmd

	switch msg := msg.(type) {
	case tea.WindowSizeMsg:
		m.list.SetWidth(msg.Width)
		return m, nil

	case tea.KeyMsg:
		switch keypress := msg.String(); keypress {
		case "q", "ctrl+c":
			m.quitting = true
			return m, tea.Quit

		case "enter":
			if m.screen == SCREEN_MAIN {
				switch m.list.Index() {
				case 0:
					m.screen = SCREEN_VERSION
				case 1:
					m.screen = SCREEN_BUILD
				}
			} else if m.screen == SCREEN_VERSION {
				err := UpdateVersion(m.textInput.Value())
				if err != nil {
					DisplayErrorAndExit(err)
				}
				m.screen = SCREEN_MAIN
			} else if m.screen == SCREEN_BUILD {
				version, err := GetVersion()
				if err != nil {
					DisplayErrorAndExit(err)
				}
				err = GenerateBuildZipFile(version)
				if err != nil {
					DisplayErrorAndExit(err)
				}
				m.screen = SCREEN_MAIN
			}
			return m, nil
		default:
			if m.screen == SCREEN_VERSION {
				m.textInput, cmd = m.textInput.Update(msg)
			} else if m.screen == SCREEN_MAIN {
				m.list, cmd = m.list.Update(msg)
			}
		}
	}

	return m, cmd
}

func (m model) View() string {
	switch m.screen {
	case SCREEN_VERSION:
		version, err := GetVersion()
		if err != nil {
			DisplayErrorAndExit(err)
		}
		return lipgloss.JoinVertical(
			lipgloss.Top,
			itemStyle.Render(fmt.Sprintf("Current Version: %s", version)),
			questionStyle.Render(fmt.Sprintf("Enter Version %s\n", m.textInput.View())),
		)
	case SCREEN_BUILD:
		return "Enter to build"
	default:
		return "\n" + m.list.View()
	}
}

func StartUI() error {

	if _, err := tea.NewProgram(initialModel()).Run(); err != nil {
		return err
	}

	return nil
}
