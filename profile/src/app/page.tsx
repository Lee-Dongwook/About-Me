import {
  getBasicInfo,
  getIntroduceInfo,
  getWorkExperienceInfoList,
  getProjectInfoList,
  getTechSkillInfoList,
  getActivityInfoList,
  getCertificateInfoList,
} from '@/02-application';

import { Header } from '@/04-lib';

import {
  BasicComponent,
  IntroduceComponent,
  WorkExperienceInfoComponent,
  ProjectInfoComponent,
  TechSkillInfoListComponent,
  ActivityInfoComponent,
  CertificateInfoComponent,
} from '@/05-ui';

const Page = async () => {
  const basicInfo = await getBasicInfo();
  const introduceInfo = await getIntroduceInfo();
  const workExperienceInfo = await getWorkExperienceInfoList();
  const projectInfo = await getProjectInfoList();
  const techSkillInfo = await getTechSkillInfoList();
  const activityInfo = await getActivityInfoList();
  const certificateInfo = await getCertificateInfoList();

  return (
    <>
      <Header />
      <main>
        <BasicComponent basicInfo={basicInfo} />
        <IntroduceComponent introduceInfo={introduceInfo} />
        <WorkExperienceInfoComponent workExperienceInfo={workExperienceInfo} />
        <ProjectInfoComponent projectInfo={projectInfo} />
        <TechSkillInfoListComponent techSkillInfo={techSkillInfo} />
        <ActivityInfoComponent activityInfo={activityInfo} />
        <CertificateInfoComponent certificateInfo={certificateInfo} />
      </main>
    </>
  );
};

export default Page;
