'use client';
import styled from 'styled-components';
import type { TeamProjectInfo } from '@/01-domain/projectInfo.types';

type Props = {
  Team: TeamProjectInfo[];
};

export const TeamProjectInfoComponent = ({ Team }: Props) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Team Projects</h1>
      {Team.map((project, index) => {
        return (
          <Card key={index}>
            <h3>{project.name}</h3>
            <hr />
            <h4>Description: {project.description}</h4>
            <h4>Members: {project.member.total}</h4>
            <h4>Functions: {project.Functions} </h4>
          </Card>
        );
      })}
    </div>
  );
};

const Card = styled.div`
  text-align: start;
  border: 1px solid #ccc;
  padding: 100px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
