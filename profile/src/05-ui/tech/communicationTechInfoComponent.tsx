import type { TechSkillInfoList } from '@/01-domain';
import { CommunicationTechInfoTable } from '@/04-lib';

type Props = {
  Communication: TechSkillInfoList['Communication'];
};

export const CommunicationTechInfoComponent = ({ Communication }: Props) => {
  return (
    <>
      <CommunicationTechInfoTable Communication={Communication} />
    </>
  );
};
