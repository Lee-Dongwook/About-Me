import type { ProjectInfoList } from '@/01-domain';
import { getProjectInfoList } from '@/02-application';
import { TeamProjectInfoComponent } from './teamProjectInfoComponent';
import { SoloProjectInfoComponent } from './soloProjectInfoComponent';

export const ProjectInfoComponent = async () => {
  const { Team, Solo }: ProjectInfoList = await getProjectInfoList();

  return (
    <>
      <TeamProjectInfoComponent Team={Team} />
      <SoloProjectInfoComponent Solo={Solo} />
    </>
  );
};
