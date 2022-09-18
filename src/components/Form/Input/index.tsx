import React, { InputHTMLAttributes } from "react";

interface IPropsInput extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<IPropsInput> = (props) => {
  return (
    <input
      className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
      {...props}
    />
  );
};
