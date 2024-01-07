import type { TeamProjectInfo } from '@/01-domain/projectInfo.types';

export const TeamProjectInfoComponent = (Team: TeamProjectInfo[]) => {
  return (
    <>
      {Team.map((item) => {
        return <li key={item.name}>{item.name}</li>;
      })}
    </>
  );
};
