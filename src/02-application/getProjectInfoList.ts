import type { ProjectInfoList } from '@/01-domain';

import project from '@/00-assets/project.json';

export async function getProjectInfoList() {
  const data = await new Promise<ProjectInfoList>((resolve) => {
    resolve(project);
  });

  return data;
}
