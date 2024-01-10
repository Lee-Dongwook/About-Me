'use client';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import type { BasicInfo, IntroduceInfo, WorkExperienceInfoList } from '@/01-domain';
import { BasicComponent } from '@/05-ui';

type Props = {
  basicInfo: BasicInfo;
  introduceInfo: IntroduceInfo;
  workExperienceInfo: WorkExperienceInfoList;
};

type CardContainerProps = {
  animate?: boolean;
};

export const IntroduceComponent = ({ basicInfo, introduceInfo, workExperienceInfo }: Props) => {
  const [firstCardRef, firstCardInView] = useInView();
  const [secondCardRef, secondCardInView] = useInView();
  const [thirdCardRef, thirdCardInView] = useInView();

  return (
    <div>
      <FirstCardContainer ref={firstCardRef} animate={firstCardInView}>
        <table>
          <tbody>
            <tr>
              <td style={{ width: '50%' }}>
                {' '}
                <h3>Hello!</h3>
                {introduceInfo.introduce.map((item, index) => {
                  return <p key={index}>{item}</p>;
                })}
                <br />
                <h3>Core Competence</h3>
                {introduceInfo.keypoint.map((item, index) => {
                  return <p key={index}>{item}</p>;
                })}
              </td>
              <td style={{ width: '50%', padding: '100px' }}>
                {' '}
                <BasicComponent basicInfo={basicInfo} />
              </td>
            </tr>
          </tbody>
        </table>
      </FirstCardContainer>
      <SecondCardContainer ref={secondCardRef} animate={secondCardInView}>
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
      </SecondCardContainer>
      <ThirdCardContainer ref={thirdCardRef} animate={thirdCardInView}>
        <div>
          <h3>Currently I Learn...</h3>
          {introduceInfo.experience.practice.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </ThirdCardContainer>
    </div>
  );
};

const FirstCardContainer = styled.div<CardContainerProps>`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 100px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: ${(props) => (props.animate ? 1 : 0)};
  transform: translateY(${(props) => (props.animate ? 0 : '100px')});
  transition:
    opacity 4s ease,
    transform 4s ease;
`;

const SecondCardContainer = styled.div<CardContainerProps>`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 100px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: ${(props) => (props.animate ? 1 : 0)};
  transform: translateY(${(props) => (props.animate ? 0 : '100px')});
  transition:
    opacity 4s ease,
    transform 4s ease;
`;

const ThirdCardContainer = styled.div<CardContainerProps>`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 100px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: ${(props) => (props.animate ? 1 : 0)};
  transform: translateY(${(props) => (props.animate ? 0 : '100px')});
  transition:
    opacity 4s ease,
    transform 4s ease;
`;
