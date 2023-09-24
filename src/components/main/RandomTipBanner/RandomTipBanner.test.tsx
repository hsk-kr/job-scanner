import { test, describe, expect, vi, beforeEach } from 'vitest';
import { render, act, screen } from '@testing-library/react';
import RandomTipBanner from '.';

describe('RandomTipBanner', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  test('should render a tip.', () => {
    act(() => {
      render(<RandomTipBanner tips={['tip']} delay={100} />);
    });
    expect(screen.getByText(/tip/)).toBeInTheDocument();
  });

  test('should render the same tip after firing the timer', () => {
    act(() => {
      render(<RandomTipBanner tips={['tip']} delay={100} />);
    });

    act(() => {
      vi.runOnlyPendingTimers();
    });

    expect(screen.getByText(/tip/)).toBeInTheDocument();
  });

  test('should render the other tip after firing the timer', () => {
    act(() => {
      render(<RandomTipBanner tips={['tipa', 'tipb']} delay={100} />);
    });

    const tipElmt = screen.getByTestId('tip');
    const intialTip = tipElmt.textContent;

    act(() => {
      vi.runOnlyPendingTimers();
    });

    expect(tipElmt.textContent).not.toBe(intialTip);
  });
});
