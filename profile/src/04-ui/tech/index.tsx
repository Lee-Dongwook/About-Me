import type { TechSkillInfoList } from '@/01-domain';
import { FrontendTechInfoComponent } from './frontendTechInfoComponent';
import { BackendTechInfoComponent } from './backendTechInfoComponent';
import { DevOpsTechInfoComponent } from './devOpsTechInfoComponent';
import { CommunicationTechInfoComponent } from './communicationTechInfoComponent';

type Props = {
  techSkillInfo: TechSkillInfoList;
};

export const TechSkillInfoListComponent = ({ techSkillInfo }: Props) => {
  return (
    <>
      <FrontendTechInfoComponent FE={techSkillInfo.FE} />
      <BackendTechInfoComponent BE={techSkillInfo.BE} />
      <DevOpsTechInfoComponent DevOps={techSkillInfo.DevOps} />
      <CommunicationTechInfoComponent Communication={techSkillInfo.Communication} />
    </>
  );
};
