'use client';
import type { IntroduceInfo } from '@/01-domain';
import styled from 'styled-components';

type Props = {
  introduceInfo: IntroduceInfo;
};

export const IntroduceInfoCard = ({ introduceInfo }: Props) => {
  return (
    <CardContainer>
      <div>
        <h3>Introduce</h3>
        <div>
          {introduceInfo.introduce.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
        <div>
          {introduceInfo.experience.work.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
        <div>
          {introduceInfo.experience.practice.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
        <div>
          {introduceInfo.keypoint.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #ccc;
  padding: 100px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 16px;
`;
