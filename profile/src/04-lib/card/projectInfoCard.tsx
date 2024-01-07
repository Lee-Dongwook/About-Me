'use client';
import styled from 'styled-components';

import type { TeamProjectInfo, SoloProjectInfo } from '@/01-domain/projectInfo.types';

type Props = {
  projectInfo: TeamProjectInfo[] | SoloProjectInfo[];
};

const isTeamProjectInfo = (projectInfo: any): projectInfo is TeamProjectInfo => {
  return (projectInfo as TeamProjectInfo) !== undefined;
};

export const ProjectInfoCard = ({ projectInfo }: Props) => {
  return (
    <>
      {projectInfo.map((project, index) => {
        if (isTeamProjectInfo(project)) {
          return (
            <div key={index}>
              <CardContainer>
                <li>{project.name}</li>
                <li>{project.period}</li>
                <li>{project.member.FE}</li>
                <li>{project.member.BE}</li>
              </CardContainer>
            </div>
          );
        } else {
          return (
            <div key={index}>
              <CardContainer>{project.name}</CardContainer>
            </div>
          );
        }
      })}
    </>
  );
};

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 700px;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 16px;
`;
