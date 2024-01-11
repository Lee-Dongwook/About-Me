'use client';
import { useInView } from 'react-intersection-observer';
import { IntroduceCardContainer } from '@/03-styles';
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

  return (
    <div>
      <IntroduceCardContainer ref={firstCardRef} animate={firstCardInView}>
        <table>
          <tbody>
            <tr>
              <td style={{ width: '50%' }}>
                {' '}
                <h2>Hello!</h2>
                <br />
                {introduceInfo.introduce.map((item, index) => {
                  return (
                    <p
                      key={index}
                      style={{
                        width: '1000px',
                        fontSize: '19px',
                        color: '#333',
                        margin: '30px 0',
                      }}
                    >
                      {item}
                    </p>
                  );
                })}
                <h2 style={{ marginTop: '100px' }}>Core Competence</h2>
                <br />
                {introduceInfo.keypoint.map((item, index) => {
                  return (
                    <p
                      key={index}
                      style={{ width: '950px', fontSize: '19px', color: '#333', margin: '30px 0' }}
                    >
                      {item}
                    </p>
                  );
                })}
              </td>
              <td style={{ width: '50%', padding: '100px' }}>
                {' '}
                <BasicComponent basicInfo={basicInfo} />
              </td>
            </tr>
          </tbody>
        </table>
      </IntroduceCardContainer>
      <IntroduceCardContainer ref={secondCardRef} animate={secondCardInView}>
        <div>
          <h3>Work Experience</h3>
          <br />
          {workExperienceInfo.map((work, index) => {
            return (
              <div key={index}>
                <p style={{ fontSize: '20px', color: '#333', margin: '20px 0' }}>
                  Company: {work.company}
                </p>
                <p style={{ fontSize: '20px', color: '#333', margin: '30px 0' }}>
                  Position: {work.position}
                </p>
                <p style={{ fontSize: '20px', color: '#333', margin: '30px 0' }}>
                  Period: {work.period} ({work.month}개월)
                </p>
                <p style={{ fontSize: '20px', color: '#333', margin: '30px 0' }}>
                  Tech Skill : {work.tech.join(' / ')}
                </p>
                <hr />
                <div>
                  {work.detail.map((task, idx) => {
                    return (
                      <div key={idx}>
                        <p style={{ fontSize: '20px', color: '#333', margin: '50px 0' }}>
                          {task.period}
                        </p>
                        <p style={{ fontSize: '20px', color: '#333', margin: '10px 0' }}>
                          {task.description}
                        </p>
                        <p style={{ fontSize: '20px', color: '#333', margin: '10px 0' }}>
                          {task.work}
                        </p>
                        <p style={{ fontSize: '20px', color: '#333', margin: '30px 0' }}>
                          {task.result.join(' / ')}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </IntroduceCardContainer>
      <IntroduceCardContainer ref={thirdCardRef} animate={thirdCardInView}>
        <div>
          <h3>Currently I Learn...</h3>
          {introduceInfo.experience.practice.map((item, index) => {
            return (
              <p key={index} style={{ fontSize: '20px', color: '#333', margin: '10px 0' }}>
                {item}
              </p>
            );
          })}
        </div>
      </IntroduceCardContainer>
    </div>
  );
};
