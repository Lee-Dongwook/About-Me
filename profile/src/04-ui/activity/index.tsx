import type { ActivityInfoList } from '@/01-domain';

type Props = {
  activityInfo: ActivityInfoList;
};

export const ActivityInfoComponent = ({ activityInfo }: Props) => {
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
