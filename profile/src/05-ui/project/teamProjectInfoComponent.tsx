'use client';
import styled from 'styled-components';
import type { TeamProjectInfo } from '@/01-domain/projectInfo.types';

type Props = {
  Team: TeamProjectInfo[];
};

export const TeamProjectInfoComponent = ({ Team }: Props) => {
  return (
    <>
      <h1>Team Projects</h1>
      {Team.map((project, index) => {
        return (
          <div key={index}>
            <CardContainer>
              <div>
                <h3>Name: {project.name}</h3>
                <h4>Description: {project.description}</h4>
                <h4>Members: {project.member.total}</h4>
                <h4>Functions: {project.Functions} </h4>
              </div>
            </CardContainer>
          </div>
        );
      })}
    </>
  );
};

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
