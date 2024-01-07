import Link from 'next/link';
import styled from 'styled-components';

import type { BasicInfo } from '@/01-domain';

interface Props {
  basicInfo: BasicInfo;
}

export const HeaderComponent = ({ basicInfo }: Props) => {
  return (
    <header>
      <div>
        <h1>{basicInfo.name}</h1>
        <h2>{basicInfo.birthday}</h2>
        <h2>{basicInfo.age}</h2>
        <h2>{basicInfo.phone}</h2>
        <h2>
          <Link href={``}>{basicInfo.email}</Link>
        </h2>
        <h2>
          <Link href={``}>{basicInfo.github}</Link>
        </h2>
        <h2>
          <Link href={``}>{basicInfo.blog}</Link>
        </h2>
      </div>
    </header>
  );
};
