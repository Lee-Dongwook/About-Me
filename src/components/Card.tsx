import React from "react";

interface CardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, description, children }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-5 bg-whites">
      <h2 className="text-x1 mb-2 font-semibold">{title}</h2>
      <p className="text-gray-700 text-base">{description}</p>
      {children}
    </div>
  );
};
