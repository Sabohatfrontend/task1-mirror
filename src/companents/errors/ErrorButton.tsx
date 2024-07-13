import { Component, ReactNode } from 'react';
import './ErrorButton.css';

class ErrorButton extends Component {
  state = {
    isError: false,
  };

  handleThrowError = () => {
    this.setState({
      isError: true,
    });
  };

  render(): ReactNode {
    const { isError } = this.state;
    if (isError) throw new Error('Throw Error successfully');

    return (
      <>
        <button className="error-btn" onClick={this.handleThrowError}>
          Throw Error
        </button>
      </>
    );
  }
}

export default ErrorButton;
