'use client';
import { ProjectCardContainer } from '@/03-styles';
import { TeamProjectInfoComponent } from './teamProjectInfoComponent';
import { SoloProjectInfoComponent } from './soloProjectInfoComponent';
import type { ProjectUiProps } from '@/05-ui/props.types';

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
