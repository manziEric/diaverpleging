import React, { ReactNode } from 'react';

interface ComponentProps {
  name: string;
  children?: ReactNode;
}

const Label = ({ name, children }: ComponentProps): JSX.Element => {
  return (
    <label htmlFor={name} className="label">
      {children}
    </label>
  );
};

export default Label;
