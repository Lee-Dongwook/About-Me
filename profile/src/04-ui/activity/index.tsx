import type { ActivityInfoList } from '@/01-domain';
import { getActivityInfoList } from '@/02-application';

export const ActivityInfoComponent = async () => {
  const activityInfo: ActivityInfoList = await getActivityInfoList();

  return (
    <>
      {activityInfo.map((activity) => {
        return (
          <>
            <div>{activity.name}</div>
            <div>{activity.period}</div>
            <div>{activity.description ? activity.description : null}</div>
          </>
        );
      })}
    </>
  );
};
