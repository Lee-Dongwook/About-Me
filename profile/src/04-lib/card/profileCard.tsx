'use client';
import Image from 'next/image';
import Link from 'next/link';
import my from '@/00-assets/image/my.png';
import type { BasicInfo } from '@/01-domain';
import styled from 'styled-components';

type Props = {
  basicInfo: BasicInfo;
};

export const ProfileCard = ({ basicInfo }: Props) => {
  return (
    <CardContainer>
      <Image src={my} width={250} height={300} alt='사진' />
      <div>
        <h3> Name: {basicInfo.name}</h3>
        <h3>
          {' '}
          Birth: {basicInfo.birthday} ({basicInfo.age}세)
        </h3>
        <h3>Phone: {basicInfo.phone}</h3>
        <h3>
          Email : <Link href={`mailto:dlehddnr0713@gmail.com`}>{basicInfo.email}</Link>
        </h3>
        <h3>
          Github : <Link href={``}>{basicInfo.github}</Link>
        </h3>
        <h3>
          Blog : <Link href={``}>{basicInfo.blog}</Link>
        </h3>
      </div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #ccc;
  padding: 100px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 16px;
`;
