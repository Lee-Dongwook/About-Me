import type { TeamProjectInfo } from '@/01-domain/projectInfo.types';
import { ProjectInfoCard } from '@/04-lib';

export const TeamProjectInfoComponent = ({ Team }: { Team: TeamProjectInfo[] }) => {
  return (
    <>
      <ProjectInfoCard projectInfo={Team} />
    </>
  );
};
