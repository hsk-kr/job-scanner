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
    const handler = vi.fn();

    beforeEach(() => {
      render(
        <TaskList
          {...defaultTaskListProps}
          onDelete={handler}
          onDownload={handler}
          onDuplicate={handler}
          onEdit={handler}
          onLog={handler}
          onTask={handler}
          onAdd={handler}
        />
      );
      vi.resetAllMocks();
    });

    test('should render 3 items.', () => {
      expect(screen.getAllByTestId('taskListItem').length).toBe(3);
    });

    test('onAdd should be fired.', () => {
      screen.getByTestId('addBtn').click();
      expect(handler).toHaveBeenCalledOnce();
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
      expect(handler).not.toHaveBeenCalledOnce();
    });

    test('events that belong to the "ready" status should be not called.', () => {
      const firstTask = screen.getAllByTestId('taskListItem')[0];

      const logBtn = firstTask.querySelector<HTMLButtonElement>(
        '[data-testid="logBtn"]'
      );
      logBtn?.click();
      expect(handler).not.toHaveBeenCalledOnce();

      const downloadBtn = firstTask.querySelector<HTMLButtonElement>(
        '[data-testid="downloadBtn"]'
      );
      downloadBtn?.click();
      expect(handler).not.toHaveBeenCalledOnce();
    });

    test('events should be called with correspending id.', () => {
      const firstTask = screen.getAllByTestId('taskListItem')[0];

      const deleteBtn = firstTask.querySelector<HTMLButtonElement>(
        '[data-testid="deleteBtn"]'
      );
      deleteBtn?.click();
      expect(handler).toHaveBeenCalledTimes(1);
      expect(handler.mock.calls[0][0]).toBe('a');

      const taskBtn = firstTask.querySelector<HTMLButtonElement>(
        '[data-testid="taskBtn"]'
      );
      taskBtn?.click();
      expect(handler).toHaveBeenCalledTimes(2);
      expect(handler.mock.calls[1][0]).toBe('a');

      const duplicateBtn = firstTask.querySelector<HTMLButtonElement>(
        '[data-testid="duplicateBtn"]'
      );
      duplicateBtn?.click();
      expect(handler).toHaveBeenCalledTimes(3);
      expect(handler.mock.calls[2][0]).toBe('a');

      const editBtn = firstTask.querySelector<HTMLButtonElement>(
        '[data-testid="editBtn"]'
      );
      editBtn?.click();
      expect(handler).toHaveBeenCalledTimes(4);
      expect(handler.mock.calls[3][0]).toBe('a');
    });
  });
});
