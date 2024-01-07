'use client';
import styled from 'styled-components';
import type { IntroduceInfo } from '@/01-domain';

type Props = {
  introduceInfo: IntroduceInfo;
};

export const IntroduceComponent = ({ introduceInfo }: Props) => {
  return (
    <div>
      <CardContainer>
        <h3>Hello!</h3>
        {introduceInfo.introduce.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </CardContainer>
      <CardContainer>
        <h3>Currently I Learn...</h3>
        {introduceInfo.experience.practice.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </CardContainer>
      <CardContainer>
        <h3>Core Competence</h3>
        {introduceInfo.keypoint.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </CardContainer>
    </div>
  );
};

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 100px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
