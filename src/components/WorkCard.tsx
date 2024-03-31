import React from "react";

interface CardProps {
  title: string;
  children?: {
    company: string;
    description: string;
    team: string;
    period: string;
    achievement: string[];
  };
}

export const WorkCard: React.FC<CardProps> = ({ title, children }) => {
  const { company, description, team, period, achievement } = children!;

  return (
    <div className="flex max-w-full mx-auto overflow-hidden bg-white shadow-lg rounded-lg">
      <div className="flex flex-col justify-between p-16 leading-normal">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
          {title}
        </h5>
        <h5 className="text-xl font-semibold dark:text-black">
          {company} {period}
        </h5>
        <h6 className="text-sm">{description}</h6>
        <br />
        <h6 className="text-lg">{team}</h6>
        <br />
        {achievement.map((ach) => {
          return <li className="text-lg">{ach}</li>;
        })}
      </div>
    </div>
  );
};
