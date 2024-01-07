import { IntroduceInfo } from '@/01-domain';

interface Props {
  introduceInfo: IntroduceInfo;
}

export const IntroduceComponent = ({ introduceInfo }: Props) => {
  return (
    <div>
      {introduceInfo.introduce.map((intro) => {
        return <p>{intro}</p>;
      })}
      {introduceInfo.experience.work.map((item) => {
        return <p>{item}</p>;
      })}
      {introduceInfo.experience.practice.map((item) => {
        return <p>{item}</p>;
      })}
      {introduceInfo.keypoint.map((item) => {
        return <p>{item}</p>;
      })}
    </div>
  );
};
