'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import type { BasicInfo, IntroduceInfo } from '@/01-domain';
import { BasicComponent } from '@/05-ui';

type Props = {
  basicInfo: BasicInfo;
  introduceInfo: IntroduceInfo;
};

type CardContainerProps = {
  animate?: boolean;
};

export const IntroduceComponent = ({ basicInfo, introduceInfo }: Props) => {
  const [firstCardRef, firstCardInView] = useInView();
  const [secondCardRef, secondCardInView] = useInView();
  const [thirdCardRef, thirdCardInView] = useInView();

  return (
    <div>
      <CardContainer ref={firstCardRef} animate={firstCardInView}>
        <table>
          <tbody>
            <tr>
              <td>
                {' '}
                <h3>Hello!</h3>
                {introduceInfo.introduce.map((item, index) => {
                  return <p key={index}>{item}</p>;
                })}
              </td>
              <td style={{ padding: '100px' }}>
                {' '}
                <BasicComponent basicInfo={basicInfo} />
              </td>
            </tr>
          </tbody>
        </table>
      </CardContainer>
      <CardContainer ref={secondCardRef} animate={secondCardInView}>
        <div>
          <h3>Currently I Learn...</h3>
          {introduceInfo.experience.practice.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </CardContainer>
      <CardContainer ref={thirdCardRef} animate={thirdCardInView}>
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

const CardContainer = styled.div<CardContainerProps>`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: ${(props) => (props.animate ? 1 : 0)};
  transform: translateY(${(props) => (props.animate ? 0 : '100px')});
  transition:
    opacity 4s ease,
    transform 4s ease;
`;
