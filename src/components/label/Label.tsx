/* eslint-disable react/require-default-props */
import { ReactNode } from 'react';

interface ComponentProps {
  name: string;
  children?: ReactNode;
}

function Label({ name, children }: ComponentProps): JSX.Element {
  return (
    <label htmlFor={name} className="label">
      {children}
    </label>
  );
}

export default Label;
