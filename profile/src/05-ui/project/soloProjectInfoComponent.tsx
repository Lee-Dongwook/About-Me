'use client';
import styled from 'styled-components';
import type { SoloProjectInfo } from '@/01-domain/projectInfo.types';

type Props = {
  Solo: SoloProjectInfo[];
};

export const SoloProjectInfoComponent = ({ Solo }: Props) => {
  return (
    <CardContainer>
      <div>
        <h1>Solo Projects</h1>
        {Solo.map((project, index) => {
          return (
            <Card key={index}>
              <h3>Name: {project.name}</h3>
              <h4>Description: {project.description}</h4>
              <h4>Functions: {project.Functions} </h4>
            </Card>
          );
        })}
      </div>
    </CardContainer>
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

const Card = styled.div`
  width: 400px;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
