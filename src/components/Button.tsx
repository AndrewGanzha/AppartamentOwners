import React, { Children } from "react";

interface ButtonProps {
  children: string;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="p-2 h-10 w-auto border-solid border-2 border-cyan-400">
      {children}
    </button>
  );
};
