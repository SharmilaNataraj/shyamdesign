import React from 'react';

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message = 'An error occurred' }) => {
  return (
    <div className="error-message">
      <div>{message}</div>
    </div>
  );
};

export default ErrorMessage;