import { test, describe, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
  test('should be rendered.', () => {
    const { getByText } = render(<Header />);

    expect(getByText(/LinkedIn Jobs Scrapper/)).toBeInTheDocument();
  });

  test('should fire github click event.', () => {
    const handleGithubClick = vi.fn();
    const { getByTestId } = render(
      <Header onGithubClick={handleGithubClick} />
    );
    const githubIcon = getByTestId('github');
    githubIcon.click();

    expect(handleGithubClick).toHaveBeenCalledOnce();
  });
});
