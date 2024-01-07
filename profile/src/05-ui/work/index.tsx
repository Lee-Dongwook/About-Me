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
        {workExperienceInfo.map((work, index) => {
          return (
            <div key={index}>
              <p>Company: {work.company}</p>
              <p>Position: {work.position}</p>
              <p>
                Period: {work.period} ({work.month}개월)
              </p>
              <p>Tech Skill : {work.tech.join(' / ')}</p>
              <hr />
              <div>
                Detail Tasks
                {work.detail.map((task, idx) => {
                  return (
                    <div key={idx}>
                      <p>{task.period}</p>
                      <p>{task.description}</p>
                      <p>{task.work}</p>
                      <p>{task.result.join(' / ')}</p>
                      <hr />
                    </div>
                  );
                })}
              </div>
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
