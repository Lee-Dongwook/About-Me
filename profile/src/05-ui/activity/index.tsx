import type { ActivityInfoList } from '@/01-domain';
import { ActivityInfoCard } from '@/04-lib';

type Props = {
  activityInfo: ActivityInfoList;
};

export const ActivityInfoComponent = ({ activityInfo }: Props) => {
  return (
    <>
      <ActivityInfoCard activityInfo={activityInfo} />
    </>
  );
};
