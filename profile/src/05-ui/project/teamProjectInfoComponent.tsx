'use client';
import { ProjectCard, ProjectCardFontStyle } from '@/03-styles';
import type { TeamProjectUiProps } from '@/05-ui/props.types';

export const TeamProjectInfoComponent = ({ Team }: TeamProjectUiProps) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Team Projects</h1>
      {Team.map((project, index) => {
        return (
          <ProjectCard key={index}>
            <ProjectCardFontStyle>{project.name}</ProjectCardFontStyle>
            <hr />
            <ProjectCardFontStyle>{project.description}</ProjectCardFontStyle>
          </ProjectCard>
        );
      })}
    </div>
  );
};
