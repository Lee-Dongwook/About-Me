import type { WorkExperienceInfoList } from '@/01-domain';

import workExperience from '@/00-assets/workExperience.json';

export async function getWorkExperienceInfoList() {
  const data = await new Promise<WorkExperienceInfoList>((resolve) => {
    resolve(workExperience);
  });

  return data;
}
