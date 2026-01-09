import React from 'react';

interface EmptyStateProps {
  message?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message = 'No data available' }) => {
  return (
    <div className="empty-state">
      <div>{message}</div>
    </div>
  );
};

export default EmptyState;