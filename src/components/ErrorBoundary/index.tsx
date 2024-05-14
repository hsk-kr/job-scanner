import { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryStates {
  hasError: boolean;
  error?: Error;
}
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryStates> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col gap-4 justify-center items-center w-svw h-svh p-6">
          <span className="text-center">
            Error: {this.state.error?.message ?? 'No Errors'}
          </span>
          <span className="text-center">
            This page is shown when there are unknown errors or break changes of
            the new version. Please, report the error message to the{' '}
            <a
              href="https://github.com/hsk-kr/linkedin-job-scanner/issues"
              target="_blank"
            >
              Github Issuse Page
            </a>
            issue to fix the issue. If this happens by the break changes of the
            new version, reinstall the plugin and retry it. I'm so sorry for the
            inconvenience.
          </span>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
