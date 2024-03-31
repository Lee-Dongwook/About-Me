import React from "react";
import PortFolio from "../assets/images/PortFolio.webp";

interface CardProps {
  title: string;
  description?: string[];
}

export const IntroCard: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="flex max-w-2xl mx-auto overflow-hidden bg-white shadow-lg rounded-lg">
      <img
        className="flex-none w-48 h-1/2 object-cover rounded-l-lg"
        src={PortFolio}
        alt="Photo"
      />
      <div className="flex flex-col justify-between p-16 leading-normal">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        {description?.map((value) => {
          return (
            <>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {value}
              </p>
            </>
          );
        })}
      </div>
    </div>
  );
};
