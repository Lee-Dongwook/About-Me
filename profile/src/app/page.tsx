import { getBasicInfo, getIntroduceInfo, getWorkExperienceInfoList } from '@/02-application';
import { Header } from '@/04-lib';
import { IntroduceComponent } from '@/05-ui';

const Page = async () => {
  const basicInfo = await getBasicInfo();
  const introduceInfo = await getIntroduceInfo();
  const workExperienceInfo = await getWorkExperienceInfoList();
  return (
    <>
      <Header />
      <IntroduceComponent
        basicInfo={basicInfo}
        introduceInfo={introduceInfo}
        workExperienceInfo={workExperienceInfo}
      />
    </>
  );
};

export default Page;
