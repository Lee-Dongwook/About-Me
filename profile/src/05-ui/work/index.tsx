'use client';
import styled from 'styled-components';
import type { WorkExperienceInfoList } from '@/01-domain';

type Props = {
  workExperienceInfo: WorkExperienceInfoList;
};

export const WorkExperienceInfoComponent = ({ workExperienceInfo }: Props) => {
  return (
    <CardContainer>
      <div>
        <h3>Work Experience</h3>
        {workExperienceInfo.map((work) => {
          return (
            <div>
              <p>Company: {work.company}</p>
              <p>Position: {work.position}</p>
            </div>
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
  padding: 100px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
