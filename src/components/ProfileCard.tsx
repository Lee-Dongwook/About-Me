import React from "react";

interface CardProps {
  title: string;
}

export const ProfileCard: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="flex max-w-full mx-auto overflow-hidden bg-white shadow-lg rounded-lg">
      <div className="flex flex-col justify-between p-16 leading-normal">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
          {title}
        </h5>
      </div>
    </div>
  );
};
