import { test, describe, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import RandomTipBanner from '.';
import { delay } from '@/utils/time';

describe('RandomTipBanner', () => {
  test('should render a tip.', () => {
    const { getByText } = render(
      <RandomTipBanner tips={['tip']} delay={100} />
    );
    expect(getByText(/tip/)).toBeInTheDocument();
  });

  test('should render the same tip after 100ms', async () => {
    const { getByText } = render(
      <RandomTipBanner tips={['tip']} delay={100} />
    );
    await delay(100 + 10);
    expect(getByText(/tip/)).toBeInTheDocument();
  });

  test('should render the other tip after 100ms', async () => {
    const { getByTestId } = render(
      <RandomTipBanner tips={['tipa', 'tipb']} delay={100} />
    );
    const tipElmt = getByTestId('tip');
    const tip = tipElmt.textContent;
    await delay(100 + 10);

    expect(tipElmt.textContent).not.toBe(tip);
  });
});
