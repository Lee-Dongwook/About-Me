import { getActivityInfoList } from '@/02-application';
import { Header } from '@/04-lib';
import { ActivityInfoComponent } from '@/05-ui';

const Page = async () => {
  const activityInfo = await getActivityInfoList();
  return (
    <>
      <Header />
      <ActivityInfoComponent activityInfo={activityInfo} />
    </>
  );
};

export default Page;
