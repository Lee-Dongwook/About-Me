'use client';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import my from '@/00-assets/image/my.png';
import type { BasicUiProps } from '@/05-ui/props.types';

export const BasicComponent = ({ basicInfo }: BasicUiProps) => {
  return (
    <CardContainer>
      <ProfileImage src={my} width={250} height={250} alt='사진' />
      <InfoContainer>
        <Name>{basicInfo.name}</Name>
        <hr />
        <Details>
          <span>Birth : {basicInfo.birthday}</span>
          <span>({basicInfo.age}세)</span>
        </Details>
        <Details>
          Email : <StyledLink href={`mailto:dlehddnr0713@gmail.com`}>{basicInfo.email}</StyledLink>
        </Details>
        <Details>
          Github :{' '}
          <StyledLink href={`https://github.com/Lee-Dongwook`}>{basicInfo.github}</StyledLink>
        </Details>
        <Details>
          Blog : <StyledLink href={`https://velog.io/@dlehddnr99`}>{basicInfo.blog}</StyledLink>
        </Details>
      </InfoContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  border-radius: 10%;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
