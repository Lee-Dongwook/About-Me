'use client';
import { useInView } from 'react-intersection-observer';
import { IntroduceCardContainer, IntroduceCardFontStyle } from '@/03-styles';
import { BasicComponent } from '@/05-ui';
import { IntroduceUiProps } from '@/05-ui/props.types';

export const IntroduceComponent = ({
  basicInfo,
  introduceInfo,
  workExperienceInfo,
}: IntroduceUiProps) => {
  const [firstCardRef, firstCardInView] = useInView();
  const [secondCardRef, secondCardInView] = useInView();
  const [thirdCardRef, thirdCardInView] = useInView();
  const [fourthCardRef, fourthCardInView] = useInView();
  return (
    <>
      <IntroduceCardContainer ref={firstCardRef} animate={firstCardInView}>
        <BasicComponent basicInfo={basicInfo} />
        <h2>Hello!</h2>
        <br />
        {introduceInfo.introduce.map((item, index) => {
          return (
            <div key={index}>
              <IntroduceCardFontStyle>{item}</IntroduceCardFontStyle>
            </div>
          );
        })}
      </IntroduceCardContainer>
      <IntroduceCardContainer ref={secondCardRef} animate={secondCardInView}>
        <h3>Work Experience</h3>
        <br />
        {workExperienceInfo.map((work, index) => {
          return (
            <div key={index}>
              <IntroduceCardFontStyle>Company: {work.company}</IntroduceCardFontStyle>
              <IntroduceCardFontStyle>Position: {work.position}</IntroduceCardFontStyle>
              <IntroduceCardFontStyle>
                Period: {work.period} ({work.month}개월)
              </IntroduceCardFontStyle>
              <IntroduceCardFontStyle>Tech Skill : {work.tech.join(' / ')}</IntroduceCardFontStyle>
              <hr />
              {work.detail.map((task, idx) => {
                return (
                  <div key={idx}>
                    <IntroduceCardFontStyle>{task.period}</IntroduceCardFontStyle>
                    <IntroduceCardFontStyle>{task.description}</IntroduceCardFontStyle>
                    <IntroduceCardFontStyle>{task.work}</IntroduceCardFontStyle>
                    <IntroduceCardFontStyle>{task.result.join(' / ')}</IntroduceCardFontStyle>
                    <hr />
                  </div>
                );
              })}
            </div>
          );
        })}
      </IntroduceCardContainer>
      <IntroduceCardContainer ref={thirdCardRef} animate={thirdCardInView}>
        <h2>Core Competence</h2>
        <br />
        {introduceInfo.keypoint.map((item, index) => {
          return (
            <div key={index}>
              <IntroduceCardFontStyle>{item}</IntroduceCardFontStyle>
            </div>
          );
        })}
      </IntroduceCardContainer>
      <IntroduceCardContainer ref={fourthCardRef} animate={fourthCardInView}>
        <div>
          <h3>Currently I Learn...</h3>
          {introduceInfo.experience.practice.map((item, index) => {
            return (
              <div key={index}>
                <IntroduceCardFontStyle>{item}</IntroduceCardFontStyle>
              </div>
            );
          })}
        </div>
      </IntroduceCardContainer>
      <br />
      <br />
    </>
  );
};
