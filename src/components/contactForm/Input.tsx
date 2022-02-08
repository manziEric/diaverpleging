import React from "react";

const Input = ({ type, name }: { type: string; name: string }) => {
  return (
    <div>
      <input type={type} name={name} />
    </div>
  );
};

export default Input;
