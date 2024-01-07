import { getBasicInfo, getIntroduceInfo, getWorkExperienceInfoList } from '@/02-application';

import { Header } from '@/04-lib';

import { BasicComponent, IntroduceComponent, WorkExperienceInfoComponent } from '@/05-ui';

const Page = async () => {
  const basicInfo = await getBasicInfo();
  const introduceInfo = await getIntroduceInfo();
  const workExperienceInfo = await getWorkExperienceInfoList();
  return (
    <>
      <Header />
      <main>
        <BasicComponent basicInfo={basicInfo} />
        <IntroduceComponent introduceInfo={introduceInfo} />
        <WorkExperienceInfoComponent workExperienceInfo={workExperienceInfo} />
      </main>
    </>
  );
};

export default Page;
