import { test, describe, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import MainHeader from '.';

describe('MainHeader', () => {
  test('should be rendered.', () => {
    const { getByText } = render(<MainHeader />);

    expect(getByText(/LinkedIn Job Scanner/)).toBeInTheDocument();
  });

  test('should fire github click event.', () => {
    const handleGithubClick = vi.fn();
    const { getByTestId } = render(
      <MainHeader onGithubClick={handleGithubClick} />
    );
    const githubIcon = getByTestId('github');
    githubIcon.click();

    expect(handleGithubClick).toHaveBeenCalledOnce();
  });

  test('should fire viewer click event.', () => {
    const handleViewerClick = vi.fn();
    const { getByTestId } = render(
      <MainHeader onViewerClick={handleViewerClick} />
    );
    const viewerIcon = getByTestId('viewer');
    viewerIcon.click();

    expect(handleViewerClick).toHaveBeenCalledOnce();
  });
});
