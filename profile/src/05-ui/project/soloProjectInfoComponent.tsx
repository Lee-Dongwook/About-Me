'use client';
import Link from 'next/link';
import type { SoloProjectInfo } from '@/01-domain/projectInfo.types';
import { ProjectCard, ProjectButton } from '@/03-styles';

type SoloProjectUiProps = {
  Solo: SoloProjectInfo[];
};

export const SoloProjectInfoComponent = ({ Solo }: SoloProjectUiProps) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Solo Projects</h1>
      {Solo.map((project, index) => {
        return (
          <ProjectCard key={index}>
            <h3>{project.name}</h3>
            <hr />
            <h4>{project.description}</h4>
            <Link href={`/project/solo/${index}`}>
              <ProjectButton>More Details {'>'}</ProjectButton>
            </Link>
          </ProjectCard>
        );
      })}
    </div>
  );
};
