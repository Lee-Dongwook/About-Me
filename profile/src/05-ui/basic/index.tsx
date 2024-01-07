import Link from 'next/link';

import type { BasicInfo } from '@/01-domain';
import { ProfileCard } from '@/04-lib';

interface Props {
  basicInfo: BasicInfo;
}

export const BasicComponent = ({ basicInfo }: Props) => {
  return <ProfileCard basicInfo={basicInfo} />;
};
