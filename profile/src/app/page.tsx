import {
  BasicInfoComponent,
  WorkExperienceInfoComponent,
  ProjectInfoComponent,
  TechSkillInfoListComponent,
  ActivityInfoComponent,
  CertificateInfoComponent,
} from '@/04-ui';

const Page = async () => {
  return (
    <>
      <main>
        <BasicInfoComponent />
        <ul>{'자기 소개 부분'}</ul>
        <WorkExperienceInfoComponent />
        {/* <ProjectInfoComponent /> */}
        <TechSkillInfoListComponent />
        <ActivityInfoComponent />
        <CertificateInfoComponent />
      </main>
    </>
  );
};

export default Page;
