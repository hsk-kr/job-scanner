/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { test, describe, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import TaskList from '.';
import { ComponentProps } from 'react';

const defaultTaskListProps: ComponentProps<typeof TaskList> = {
  tasks: [
    {
      id: 'a',
      taskName: 'Frontend',
      updatedAt: '2023-09-25',
      status: 'ready',
    },
    {
      id: 'b',
      taskName: 'Backend',
      updatedAt: '2023-09-25',
      status: 'done',
    },
    {
      id: 'c',
      taskName: 'Devops',
      updatedAt: '2023-09-25',
      status: 'stopped',
    },
  ],
};

const processingTaskListProps: ComponentProps<typeof TaskList> = {
  ...defaultTaskListProps,
  tasks: [
    ...(defaultTaskListProps.tasks ?? []),
    {
      id: 'd',
      taskName: 'React',
      updatedAt: '2023-09-25',
      status: 'processing',
    },
  ],
  activeTaskId: 'd',
};

describe('TaskList', () => {
  describe('With the processing item', () => {
    beforeEach(() => {
      render(<TaskList {...processingTaskListProps} />);
      vi.resetAllMocks();
    });

    test('processing item should have only one button', () => {
      const processingTask = screen.getAllByTestId('taskListItem')[3];
      const taskBtn = processingTask.querySelector('[data-testid="taskBtn"]');
      const editBtn = processingTask.querySelector('[data-testid="editBtn"]');
      const logBtn = processingTask.querySelector('[data-testid="logBtn"]');
      const downloadBtn = processingTask.querySelector(
        '[data-testid="downloadBtn"]'
      );
      const duplicateBtn = processingTask.querySelector(
        '[data-testid="duplicateBtn"]'
      );
      const deleteBtn = processingTask.querySelector(
        '[data-testid="deleteBtn"]'
      );

      const buttons = [editBtn, logBtn, downloadBtn, duplicateBtn, deleteBtn];

      expect(taskBtn).toBeInTheDocument();
      for (const button of buttons) {
        expect(button).not.toBeInTheDocument();
      }
    });

    test('buttons of an item that is in the progress should be disabled.', () => {
      const processingTask = screen.getAllByTestId('taskListItem')[0];
      const taskBtn = processingTask.querySelector<HTMLButtonElement>(
        '[data-testid="taskBtn"]'
      );
      const editBtn = processingTask.querySelector<HTMLButtonElement>(
        '[data-testid="editBtn"]'
      );
      const duplicateBtn = processingTask.querySelector<HTMLButtonElement>(
        '[data-testid="duplicateBtn"]'
      );
      const deleteBtn = processingTask.querySelector<HTMLButtonElement>(
        '[data-testid="deleteBtn"]'
      );
      const buttons = [taskBtn, editBtn, duplicateBtn, deleteBtn];

      for (const button of buttons) {
        expect(button?.disabled).toBe(true);
      }
    });
  });

  describe('Without the processing item', () => {
    const events = {
      onDelete: vi.fn(),
      onDownload: vi.fn(),
      onDuplicate: vi.fn(),
      onEdit: vi.fn(),
      onLog: vi.fn(),
      onTask: vi.fn(),
      onAdd: vi.fn(),
      onDeleteAllTasks: vi.fn(),
    };

    beforeEach(() => {
      render(
        <TaskList
          {...defaultTaskListProps}
          onDelete={events.onDelete}
          onDownload={events.onDownload}
          onDuplicate={events.onDuplicate}
          onEdit={events.onEdit}
          onLog={events.onLog}
          onTask={events.onTask}
          onAdd={events.onAdd}
          onDeleteAllTasks={events.onDeleteAllTasks}
        />
      );
      vi.resetAllMocks();
    });

    test('should render 3 items.', () => {
      expect(screen.getAllByTestId('taskListItem').length).toBe(3);
    });

    test('onAdd should be fired.', () => {
      screen.getByTestId('addBtn').click();
      expect(events.onAdd).toHaveBeenCalledOnce();
    });

    test('onDeleteAllTasks should be fired.', () => {
      screen.getByTestId('deleteAllTasksBtn').click();
      expect(events.onDeleteAllTasks).toHaveBeenCalledOnce();
    });

    test('should render task items with corresponding status text', () => {
      const tasks = screen.getAllByTestId('taskListItem');

      expect(
        tasks[0].querySelector('[data-testid="status"]')?.textContent
      ).toBe('ready');
      expect(
        tasks[1].querySelector('[data-testid="status"]')?.textContent
      ).toBe('done');
      expect(
        tasks[2].querySelector('[data-testid="status"]')?.textContent
      ).toBe('stopped');
    });

    test('events that belong to the "done" status should be not called.', () => {
      const firstTask = screen.getAllByTestId('taskListItem')[1];

      const taskBtn = firstTask.querySelector<HTMLButtonElement>(
        '[data-testid="taskBtn"]'
      );
      taskBtn?.click();

      const editBtn = firstTask.querySelector<HTMLButtonElement>(
        '[data-testid="editBtn"]'
      );
      editBtn?.click();
      expect(events.onEdit).not.toHaveBeenCalledOnce();
    });

    test('events that belong to the "ready" status should be not called.', () => {
      const firstTask = screen.getAllByTestId('taskListItem')[0];

      const logBtn = firstTask.querySelector<HTMLButtonElement>(
        '[data-testid="logBtn"]'
      );
      logBtn?.click();
      expect(events.onLog).not.toHaveBeenCalledOnce();

      const downloadBtn = firstTask.querySelector<HTMLButtonElement>(
        '[data-testid="downloadBtn"]'
      );
      downloadBtn?.click();
      expect(events.onDownload).not.toHaveBeenCalledOnce();
    });

    test('events should be called with correspending id.', () => {
      const firstTask = screen.getAllByTestId('taskListItem')[0];

      const deleteBtn = firstTask.querySelector<HTMLButtonElement>(
        '[data-testid="deleteBtn"]'
      );
      deleteBtn?.click();
      expect(events.onDelete).toHaveBeenCalledTimes(1);
      expect(events.onDelete.mock.calls[0][0]).toBe('a');

      const taskBtn = firstTask.querySelector<HTMLButtonElement>(
        '[data-testid="taskBtn"]'
      );
      taskBtn?.click();
      expect(events.onTask).toHaveBeenCalledTimes(1);
      expect(events.onTask.mock.calls[0][0]).toBe('a');

      const duplicateBtn = firstTask.querySelector<HTMLButtonElement>(
        '[data-testid="duplicateBtn"]'
      );
      duplicateBtn?.click();
      expect(events.onDuplicate).toHaveBeenCalledTimes(1);
      expect(events.onDuplicate.mock.calls[0][0]).toBe('a');

      const editBtn = firstTask.querySelector<HTMLButtonElement>(
        '[data-testid="editBtn"]'
      );
      editBtn?.click();
      expect(events.onEdit).toHaveBeenCalledTimes(1);
      expect(events.onEdit.mock.calls[0][0]).toBe('a');
    });
  });
});
