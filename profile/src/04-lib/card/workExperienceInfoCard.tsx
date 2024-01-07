'use client';
import styled from 'styled-components';
import type { WorkExperienceInfoList } from '@/01-domain';

type Props = {
  workExperienceInfo: WorkExperienceInfoList;
};

export const WorkExperienceInfoCard = ({ workExperienceInfo }: Props) => {
  return (
    <CardContainer>
      <div>
        <h3>Work Experience</h3>
        <p>
          {workExperienceInfo.map((work) => {
            return (
              <ul key={work.company}>
                {work.company}
                {work.position}
                {work.month}
                {work.tech}
                {work.detail.map((item) => {
                  return <li key={item.work}>{item.work}</li>;
                })}
              </ul>
            );
          })}
        </p>
      </div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 16px;
`;
