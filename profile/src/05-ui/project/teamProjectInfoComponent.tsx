'use client';
import Link from 'next/link';
import type { TeamProjectInfo } from '@/01-domain/projectInfo.types';
import { ProjectCard, ProjectButton } from '@/03-styles';

type TeamProjectUiProps = {
  Team: TeamProjectInfo[];
};

export const TeamProjectInfoComponent = ({ Team }: TeamProjectUiProps) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Team Projects</h1>
      {Team.map((project, index) => {
        return (
          <ProjectCard key={index}>
            <h3>{project.name}</h3>
            <hr />
            <h4>{project.description}</h4>
            <Link href={`/project/team/${index}`}>
              <ProjectButton>More Details {'>'}</ProjectButton>
            </Link>
          </ProjectCard>
        );
      })}
    </div>
  );
};
