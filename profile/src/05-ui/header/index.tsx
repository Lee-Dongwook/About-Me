import Link from 'next/link';

import type { BasicInfo } from '@/01-domain';
import { ProfileCard } from '@/04-lib';

interface Props {
  basicInfo: BasicInfo;
}

export const HeaderComponent = ({ basicInfo }: Props) => {
  return (
    <header>
      <ProfileCard basicInfo={basicInfo} />
    </header>
  );
};
