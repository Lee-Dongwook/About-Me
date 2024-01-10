import type { TechSkillUiProps } from '@/05-ui/props.types';
import { FrontendTechInfoComponent } from './frontendTechInfoComponent';
import { BackendTechInfoComponent } from './backendTechInfoComponent';
import { DevOpsTechInfoComponent } from './devOpsTechInfoComponent';
import { CommunicationTechInfoComponent } from './communicationTechInfoComponent';

export const TechSkillInfoListComponent = ({ techSkillInfo }: TechSkillUiProps) => {
  return (
    <div>
      <div>
        <FrontendTechInfoComponent FE={techSkillInfo.FE} />
        <BackendTechInfoComponent BE={techSkillInfo.BE} />
      </div>
      <div>
        <DevOpsTechInfoComponent DevOps={techSkillInfo.DevOps} />
        <CommunicationTechInfoComponent Communication={techSkillInfo.Communication} />
      </div>
    </div>
  );
};
