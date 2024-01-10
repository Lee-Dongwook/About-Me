'use client';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import my from '@/00-assets/image/my.png';
import type { BasicInfo } from '@/01-domain';

interface Props {
  basicInfo: BasicInfo;
}

export const BasicComponent = ({ basicInfo }: Props) => {
  return (
    <CardContainer>
      <ProfileImage src={my} width={200} height={200} alt='사진' />
      <InfoContainer>
        <Name>{basicInfo.name}</Name>
        <hr />
        <Details>
          <span>생년월일 : {basicInfo.birthday}</span>
          <span>({basicInfo.age}세)</span>
        </Details>
        <Details>
          이메일 : <StyledLink href={`mailto:dlehddnr0713@gmail.com`}>{basicInfo.email}</StyledLink>
        </Details>
        <Details>
          깃허브 :{' '}
          <StyledLink href={`https://github.com/Lee-Dongwook`}>{basicInfo.github}</StyledLink>
        </Details>
        <Details>
          블로그 : <StyledLink href={`https://velog.io/@dlehddnr99`}>{basicInfo.blog}</StyledLink>
        </Details>
      </InfoContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 400px;
  border: 1px solid #ccc;
  padding: 100px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const InfoContainer = styled.div`
  margin-left: 20px;
`;

const ProfileImage = styled(Image)`
  border-radius: 50%;
`;

const Name = styled.h3`
  margin-bottom: 10px;
  font-size: 1.5rem;
`;

const Details = styled.h3`
  margin-bottom: 8px;
  font-size: 1rem;

  span {
    margin-right: 5px;
  }
`;

const StyledLink = styled(Link)`
  color: #0070f3;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
