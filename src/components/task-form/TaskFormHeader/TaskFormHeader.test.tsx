import { test, describe, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import TaskFormHeader from '.';

describe('TaskFormHeader', () => {
  test('should be rendered.', () => {
    const { getByText } = render(<TaskFormHeader />);

    expect(getByText(/Task Form/)).toBeInTheDocument();
  });

  test('should contains the taskName.', () => {
    const { getByText } = render(<TaskFormHeader taskName="TaskA" />);
    expect(getByText(/\[TaskA\]/)).toBeInTheDocument();
  });

  test('should fire onBack', () => {
    const handler = vi.fn();
    const { getByTestId } = render(<TaskFormHeader onBack={handler} />);

    getByTestId('backBtn').click();
    expect(handler).toHaveBeenCalledOnce();
  });
});
