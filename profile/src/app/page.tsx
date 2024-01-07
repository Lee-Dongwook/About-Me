import { getBasicInfo } from '@/02-application';
import {
  HeaderComponent,
  WorkExperienceInfoComponent,
  ProjectInfoComponent,
  TechSkillInfoListComponent,
  ActivityInfoComponent,
  CertificateInfoComponent,
} from '@/04-ui';

const Page = async () => {
  const basicInfo = await getBasicInfo();

  return (
    <>
      <HeaderComponent basicInfo={basicInfo} />
      <main>
        <ul>{'자기 소개 부분'}</ul>
        <WorkExperienceInfoComponent />
        <ProjectInfoComponent />
        <TechSkillInfoListComponent />
        <ActivityInfoComponent />
        <CertificateInfoComponent />
      </main>
    </>
  );
};

export default Page;
