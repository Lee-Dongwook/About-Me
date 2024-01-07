import type { TechSkillInfoList } from '@/01-domain';
import { getTechSkillInfoList } from '@/02-application';
import { FrontendTechInfoComponent } from './frontendTechInfoComponent';
import { BackendTechInfoComponent } from './backendTechInfoComponent';
import { DevOpsTechInfoComponent } from './devOpsTechInfoComponent';
import { CommunicationTechInfoComponent } from './communicationTechInfoComponent';

export const TechSkillInfoListComponent = async () => {
  const { FE, BE, DevOps, Communication }: TechSkillInfoList = await getTechSkillInfoList();

  return (
    <>
      <FrontendTechInfoComponent FE={FE} />
      <BackendTechInfoComponent BE={BE} />
      <DevOpsTechInfoComponent DevOps={DevOps} />
      <CommunicationTechInfoComponent Communication={Communication} />
    </>
  );
};
