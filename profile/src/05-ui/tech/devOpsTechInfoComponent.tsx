import type { TechSkillInfoList } from '@/01-domain';
import { DevOpsTechInfoTable } from '@/04-lib';

type Props = {
  DevOps: TechSkillInfoList['DevOps'];
};

export const DevOpsTechInfoComponent = ({ DevOps }: Props) => {
  return (
    <>
      <DevOpsTechInfoTable DevOps={DevOps} />
    </>
  );
};
