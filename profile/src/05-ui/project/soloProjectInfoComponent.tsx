'use client';
import styled from 'styled-components';
import type { SoloProjectInfo } from '@/01-domain/projectInfo.types';

type Props = {
  Solo: SoloProjectInfo[];
};

export const SoloProjectInfoComponent = ({ Solo }: Props) => {
  return (
    <>
      <h1>Solo Projects</h1>
      {Solo.map((project, index) => {
        return (
          <div key={index}>
            <CardContainer>
              <div>
                <h3>Name: {project.name}</h3>
                <h4>Description: {project.description}</h4>
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
