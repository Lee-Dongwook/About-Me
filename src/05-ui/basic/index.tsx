'use client';

import my from '@/00-assets/image/PortFolio.webp';
import Github from '@/00-assets/svg/github.svg';
import { BasicProfileImage, BasicName, BasicLink } from '@/03-styles';
import type { BasicUiProps } from '@/05-ui/props.types';

export const BasicComponent = ({ basicInfo }: BasicUiProps) => {
  return (
    <>
      <BasicProfileImage src={my} width={300} height={410} alt="사진" />
      <BasicName>{basicInfo.name}</BasicName>
      Birth {basicInfo.birthday} ({basicInfo.age}세) Email
      <BasicLink href={`mailto:${basicInfo.email}`}>
        {basicInfo.email}
      </BasicLink>
      <Github width={30} /> Github
      <BasicLink href={basicInfo.github}>Link</BasicLink>
      LinkedIn<BasicLink href={basicInfo.linkedIn}>Link</BasicLink>
      Velog<BasicLink href={basicInfo.velog}>Link</BasicLink>
    </>
  );
};
