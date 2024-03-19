'use client';
import Image from 'next/image';
import styled from 'styled-components';
import myImage from '@/00-assets/image/PortFolio.webp';
import GithubIcon from '@/00-assets/svg/github.svg';
import LinkedInIcon from '@/00-assets/svg/linkedin.svg';
import type { BasicUiProps } from '@/05-ui/props.types';

const Card = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 100px;
  padding: 100px;
`;

const Content = styled.div`
  margin: 10px 0;
`;

const Name = styled.h2`
  margin: 5px 0;
  font-size: 30px;
  color: #333;
`;

const Info = styled.p`
  margin: 35px 0;
  font-size: 20px;
  color: #666;
`;

const Link = styled.a`
  color: #0077b5;
  text-decoration: none;
  gap: 5px;
`;

export const BasicComponent = ({ basicInfo }: BasicUiProps) => {
  const { name, birthday, age, email, github, linkedIn, velog } = basicInfo;
  return (
    <Card>
      <Image src={myImage} alt="Profile Picture" width={300} height={400} />
      <Content>
        <Name>{name}</Name>
        <hr />
        <Info>
          {birthday} ({age}세)
        </Info>
        <Info>
          <Link href={`mailto:${email}`}>{email}</Link>
        </Info>
        <Info>
          <GithubIcon />
          <Link href={github}>Github</Link>
        </Info>
        <Info>
          <LinkedInIcon href={linkedIn} width={30} />{' '}
          <Link href={linkedIn}>LinkedIn</Link>
        </Info>
        <Info>
          <Link href={velog}>Velog</Link>
        </Info>
      </Content>
    </Card>
  );
};
