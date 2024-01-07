import Image from 'next/image';
import Link from 'next/link';
import my from '@/00-assets/image/my.png';
import type { BasicInfo } from '@/01-domain';

type Props = {
  basicInfo: BasicInfo;
};

export const ProfileCard = ({ basicInfo }: Props) => {
  return (
    <section>
      <Image src={my} width={200} height={200} alt='사진' />
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
    </section>
  );
};
