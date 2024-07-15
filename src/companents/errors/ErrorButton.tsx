import { useState } from 'react';
import './ErrorButton.css';

const ErrorButton = () => {
  const [isError, setIsError] = useState(false);

  const handleThrowError = () => {
    setIsError(true);
  };

  if (isError) throw new Error('Throw Error successfully');

  return (
    <>
      <button className="error-btn" onClick={handleThrowError}>
        Throw Error
      </button>
    </>
  );
}


export default ErrorButton;
