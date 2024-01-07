import {
  getBasicInfo,
  getIntroduceInfo,
  getWorkExperienceInfoList,
  getProjectInfoList,
  getTechSkillInfoList,
  getActivityInfoList,
  getCertificateInfoList,
} from '@/02-application';

import {
  HeaderComponent,
  IntroduceComponent,
  WorkExperienceInfoComponent,
  ProjectInfoComponent,
  TechSkillInfoListComponent,
  ActivityInfoComponent,
  CertificateInfoComponent,
} from '@/04-ui';

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
      <HeaderComponent basicInfo={basicInfo} />
      <main>
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
