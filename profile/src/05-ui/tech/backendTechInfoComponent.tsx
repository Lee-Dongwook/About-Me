import type { TechSkillInfoList } from '@/01-domain';
import { BackendTechInfoTable } from '@/04-lib';

type Props = {
  BE: TechSkillInfoList['BE'];
};

export const BackendTechInfoComponent = ({ BE }: Props) => {
  return (
    <>
      <BackendTechInfoTable BE={BE} />
    </>
  );
};
