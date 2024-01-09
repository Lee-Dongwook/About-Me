'use client';
import styled from 'styled-components';
import type { ProjectInfoList } from '@/01-domain';
import { TeamProjectInfoComponent } from './teamProjectInfoComponent';
import { SoloProjectInfoComponent } from './soloProjectInfoComponent';

type Props = {
  projectInfo: ProjectInfoList;
};

export const ProjectInfoComponent = async ({ projectInfo }: Props) => {
  return (
    <div style={{ display: 'flex' }}>
      <CardContainer>
        <TeamProjectInfoComponent Team={projectInfo.Team} />
      </CardContainer>
      <CardContainer>
        <SoloProjectInfoComponent Solo={projectInfo.Solo} />
      </CardContainer>
    </div>
  );
};

const CardContainer = styled.div`
  width: 50%;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
