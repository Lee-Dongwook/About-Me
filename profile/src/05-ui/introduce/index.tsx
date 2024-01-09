'use client';
import styled from 'styled-components';
import type { BasicInfo, IntroduceInfo } from '@/01-domain';
import { BasicComponent } from '..';

type Props = {
  basicInfo: BasicInfo;
  introduceInfo: IntroduceInfo;
};

export const IntroduceComponent = ({ basicInfo, introduceInfo }: Props) => {
  return (
    <div>
      <CardContainer>
        <div>
          <h3>Hello!</h3>
          {introduceInfo.introduce.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
        <BasicComponent basicInfo={basicInfo} />
      </CardContainer>
      <CardContainer>
        <div>
          <h3>Currently I Learn...</h3>
          {introduceInfo.experience.practice.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </CardContainer>
      <CardContainer>
        <div>
          <h3>Core Competence</h3>
          {introduceInfo.keypoint.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </CardContainer>
    </div>
  );
};

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 100px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
