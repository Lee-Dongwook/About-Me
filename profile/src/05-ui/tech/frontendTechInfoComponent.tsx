import type { TechSkillInfoList } from '@/01-domain';
import { FrontendTechInfoTable } from '@/04-lib';

type Props = {
  FE: TechSkillInfoList['FE'];
};

export const FrontendTechInfoComponent = ({ FE }: Props) => {
  return (
    <>
      <FrontendTechInfoTable FE={FE} />
    </>
  );
};
