import type { IntroduceInfo } from '@/01-domain';

import introduceInfo from '@/00-assets/introduceInfo.json';

export async function getIntroduceInfo() {
  const data = await new Promise<IntroduceInfo>((resolve) => {
    resolve(introduceInfo);
  });

  return data;
}
