'use client';
import { ProjectCard, ProjectCardFontStyle } from '@/03-styles';
import type { SoloProjectUiProps } from '@/05-ui/props.types';

export const SoloProjectInfoComponent = ({ Solo }: SoloProjectUiProps) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Solo Projects</h1>
      {Solo.map((project, index) => {
        console.log(project);
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
