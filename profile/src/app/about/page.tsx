import { getBasicInfo } from '@/02-application';
import { Header } from '@/04-lib';
import { BasicComponent } from '@/05-ui';

const Page = async () => {
  const basicInfo = await getBasicInfo();
  return (
    <>
      <Header />
      <BasicComponent basicInfo={basicInfo} />
    </>
  );
};

export default Page;
