import type { ProjectInfoList } from '@/01-domain';
import { TeamProjectInfoComponent } from './teamProjectInfoComponent';
import { SoloProjectInfoComponent } from './soloProjectInfoComponent';

type Props = {
  projectInfo: ProjectInfoList;
};

export const ProjectInfoComponent = async ({ projectInfo }: Props) => {
  return (
    <>
      <TeamProjectInfoComponent Team={projectInfo.Team} />
      <SoloProjectInfoComponent Solo={projectInfo.Solo} />
    </>
  );
};
