'use client';
import type { ProjectInfoList } from '@/01-domain';
import { ProjectCardContainer } from '@/03-styles';
import { TeamProjectInfoComponent } from './teamProjectInfoComponent';
import { SoloProjectInfoComponent } from './soloProjectInfoComponent';

type ProjectUiProps = {
  projectInfo: ProjectInfoList;
};

export const ProjectInfoComponent = async ({ projectInfo }: ProjectUiProps) => {
  return (
    <div style={{ display: 'flex' }}>
      <ProjectCardContainer>
        <TeamProjectInfoComponent Team={projectInfo.Team} />
      </ProjectCardContainer>
      <ProjectCardContainer>
        <SoloProjectInfoComponent Solo={projectInfo.Solo} />
      </ProjectCardContainer>
    </div>
  );
};
