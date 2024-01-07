import type { IntroduceInfo } from '@/01-domain';
import { IntroduceInfoCard } from '@/04-lib';

interface Props {
  introduceInfo: IntroduceInfo;
}

export const IntroduceComponent = ({ introduceInfo }: Props) => {
  return (
    <div>
      <IntroduceInfoCard introduceInfo={introduceInfo} />
    </div>
  );
};
