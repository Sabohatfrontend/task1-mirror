import { Component, ErrorInfo, MouseEvent, ReactNode } from 'react';
import './ErrorBoundry.css';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleClose = (): void => this.setState({ hasError: false });

  public render() {
    if (this.state.hasError) {
      return (
        <div
          className="error-container"
          role="presentation"
          onMouseDown={(e: MouseEvent<HTMLDivElement>) => {
            if (e.target === e.currentTarget) this.handleClose();
          }}
        >
          <h2 className="error-text">Sorry.. there was an error</h2>
          <button className="close-btn" onClick={this.handleClose}>
            Close
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
