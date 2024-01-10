import type { TechSkillUiProps } from '@/05-ui/props.types';
import { FrontendTechInfoComponent } from './frontendTechInfoComponent';
import { BackendTechInfoComponent } from './backendTechInfoComponent';
import { DevOpsTechInfoComponent } from './devOpsTechInfoComponent';
import { CommunicationTechInfoComponent } from './communicationTechInfoComponent';

export const TechSkillInfoListComponent = ({ techSkillInfo }: TechSkillUiProps) => {
  return (
    <>
      <FrontendTechInfoComponent FE={techSkillInfo.FE} />
      <BackendTechInfoComponent BE={techSkillInfo.BE} />
      <DevOpsTechInfoComponent DevOps={techSkillInfo.DevOps} />
      <CommunicationTechInfoComponent Communication={techSkillInfo.Communication} />
    </>
  );
};
