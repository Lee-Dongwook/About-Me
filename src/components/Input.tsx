import React, { type ChangeEvent } from "react";

interface InputProps {
  placeholder?: string;
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  type = "text",
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className="px-4 py-2 border rounded-md focus:outline-none foucs:ring-2 focus:ring-blue-500 transition duration-300"
    />
  );
};
