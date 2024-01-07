import { getIntroduceInfo, getWorkExperienceInfoList } from '@/02-application';
import { Header } from '@/04-lib';
import { IntroduceComponent, WorkExperienceInfoComponent } from '@/05-ui';

const Page = async () => {
  const introduceInfo = await getIntroduceInfo();
  const workExperienceInfo = await getWorkExperienceInfoList();
  return (
    <>
      <Header />
      <IntroduceComponent introduceInfo={introduceInfo} />
      <WorkExperienceInfoComponent workExperienceInfo={workExperienceInfo} />
    </>
  );
};

export default Page;
