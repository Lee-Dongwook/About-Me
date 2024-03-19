import type { ActivityInfoList } from '@/01-domain';

import activities from '@/00-assets/activities.json';

export async function getActivityInfoList() {
  const data = await new Promise<ActivityInfoList>((resolve) => {
    resolve(activities);
  });

  return data;
}
