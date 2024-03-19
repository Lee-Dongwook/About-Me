'use client';
import { ProjectCardContainer } from '@/03-styles';
import { TeamProjectInfoComponent } from './teamProjectInfoComponent';
import { SoloProjectInfoComponent } from './soloProjectInfoComponent';
import type { ProjectUiProps } from '@/05-ui/props.types';

export const ProjectInfoComponent = async ({ projectInfo }: ProjectUiProps) => {
  return (
    <>
      <ProjectCardContainer>
        <TeamProjectInfoComponent Team={projectInfo.Team} />
        <br />
        <SoloProjectInfoComponent Solo={projectInfo.Solo} />
      </ProjectCardContainer>
    </>
  );
};
