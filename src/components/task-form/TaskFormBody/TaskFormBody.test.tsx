import { test, describe, expect, vi, beforeEach } from 'vitest';
import { act, render, screen, fireEvent } from '@testing-library/react';
import TaskFormBody from '.';

describe('TaskFormBody', () => {
  beforeEach(() => {
    render(<TaskFormBody />);
  });

  test('should open and close the conditional check modal', async () => {
    const conditionCheckOpenBtn = screen.getByTestId('conditionCheckOpenBtn');
    conditionCheckOpenBtn.click();

    const conditionCheckModal = await screen.findByTestId(
      'conditionCheckModal'
    );
    expect(conditionCheckModal).toBeInTheDocument();

    const conditionCheckModalCloseBtn = screen.getByTestId(
      'conditionCheckModalCloseBtn'
    );

    act(() => {
      conditionCheckModalCloseBtn.click();
    });

    expect(screen.queryByTestId('conditionCheckModal')).toBeNull();
  });
});

describe('TaskConditionList', () => {
  beforeEach(() => {
    render(<TaskFormBody />);
  });

  test('should render one condition item by default.', () => {
    const items = screen.getAllByTestId('taskConditionListItem');
    expect(items).toHaveLength(1);
  });

  test('should add one condition', () => {
    const jobConditionAddBtn = screen.getByTestId('jobConditionAddBtn');

    act(() => {
      jobConditionAddBtn.click();
    });

    const items = screen.getAllByTestId('taskConditionListItem');
    expect(items).toHaveLength(2);
  });

  test('should not have a delete button', () => {
    expect(() => screen.getByTestId('jobConditionRemoveBtn')).toThrowError(
      /unable to find an element/i
    );
  });

  test('should delete an item', () => {
    const jobConditionAddBtn = screen.getByTestId('jobConditionAddBtn');

    act(() => {
      jobConditionAddBtn.click();
    });

    const jobConditionRemoveBtns = screen.getAllByTestId(
      'jobConditionRemoveBtn'
    );
    act(() => {
      jobConditionRemoveBtns[0].click();
    });

    const items = screen.getAllByTestId('taskConditionListItem');
    expect(items).toHaveLength(1);
  });
});

describe('TaskConditionListItem', () => {
  let firstJobCondition: HTMLElement;
  let conditionAddBtn: HTMLButtonElement;
  let not: HTMLInputElement;
  let ci: HTMLInputElement;
  let target: HTMLInputElement;
  let operator: HTMLInputElement;
  let frequency: HTMLInputElement;
  let text: HTMLInputElement;

  beforeEach(() => {
    const { getByTestId } = render(<TaskFormBody />);
    firstJobCondition = getByTestId('taskConditionListItem');
    conditionAddBtn = getByTestId('conditionAddBtn') as HTMLButtonElement;
    not = getByTestId('not') as HTMLInputElement;
    ci = getByTestId('ci') as HTMLInputElement;
    target = getByTestId('target').querySelector('input') as HTMLInputElement;
    operator = getByTestId('operator').querySelector(
      'input'
    ) as HTMLInputElement;
    frequency = getByTestId('frequency').querySelector(
      'input'
    ) as HTMLInputElement;
    text = getByTestId('text').querySelector('input') as HTMLInputElement;
  });

  test('should add a subcondition item with default values', async () => {
    conditionAddBtn.click();

    const chip = await screen.findByTestId('chip');
    expect(chip).toBeInTheDocument();

    expect(chip.textContent).toMatch(/Job Title, >=, 1,/);
  });

  test('should add a subcondition item correctly with input values', async () => {
    fireEvent.click(not);
    fireEvent.click(ci);
    fireEvent.change(target, { target: { value: 'description' } });
    fireEvent.change(operator, { target: { value: '=' } });
    fireEvent.change(frequency, { target: { value: '3' } });
    fireEvent.change(text, { target: { value: 'test' } });
    conditionAddBtn.click();

    const chip = await screen.findByTestId('chip');
    expect(chip).toBeInTheDocument();

    expect(chip.textContent).toMatch(/not, ci, Job Description, =, 3, test/);
  });

  test('should remove a subcondition', () => {
    act(() => {
      conditionAddBtn.click();
      conditionAddBtn.click();
    });

    let subConditions = screen.getAllByTestId('chip');
    expect(subConditions).toHaveLength(2);

    const deleteBtn = subConditions[0].querySelector<SVGElement>(
      '.MuiChip-deleteIconMedium'
    );
    deleteBtn && fireEvent.click(deleteBtn);

    subConditions = screen.getAllByTestId('chip');
    expect(subConditions).toHaveLength(1);
  });
});
