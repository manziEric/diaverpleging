import React, { ReactNode } from "react";

const Label = ({
  name,
  children,
}: {
  name: string;
  children?: ReactNode;
}): JSX.Element => {
  return (
    <label htmlFor={name} className="label">
      {children}
    </label>
  );
};

export default Label;
