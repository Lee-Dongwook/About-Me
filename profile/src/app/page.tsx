import {
  getBasicInfo,
  getIntroduceInfo,
  getWorkExperienceInfoList,
  getProjectInfoList,
} from '@/02-application';

import { Header } from '@/04-lib';

import {
  BasicComponent,
  IntroduceComponent,
  WorkExperienceInfoComponent,
  ProjectInfoComponent,
} from '@/05-ui';

const Page = async () => {
  const basicInfo = await getBasicInfo();
  const introduceInfo = await getIntroduceInfo();
  const workExperienceInfo = await getWorkExperienceInfoList();
  const projectInfo = await getProjectInfoList();
  return (
    <>
      <Header />
      <main>
        <BasicComponent basicInfo={basicInfo} />
        <IntroduceComponent introduceInfo={introduceInfo} />
        <WorkExperienceInfoComponent workExperienceInfo={workExperienceInfo} />
        <ProjectInfoComponent projectInfo={projectInfo} />
      </main>
    </>
  );
};

export default Page;
