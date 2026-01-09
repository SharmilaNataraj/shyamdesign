import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className }) => {
  return (
    <h2 className={`section-title ${className || ''}`}>
      {children}
    </h2>
  );
};

export default SectionTitle;