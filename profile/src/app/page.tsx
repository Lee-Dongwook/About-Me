import type { ProjectInfoList, TechSkillInfoList } from '@/01-domain';
import { getProjectInfoList, getTechSkillInfoList } from '@/02-application';

import {
  BasicInfoComponent,
  WorkExperienceInfoComponent,
  ActivityInfoComponent,
  CertificateInfoComponent,
} from '@/04-ui';

const Page = async () => {
  const { Team, Solo }: ProjectInfoList = await getProjectInfoList();
  const { FE, BE, DevOps, Communication }: TechSkillInfoList = await getTechSkillInfoList();
  return (
    <>
      <main>
        <BasicInfoComponent />
        <br />
        <ul>{'자기 소개 부분'}</ul>
        <br />
        <WorkExperienceInfoComponent />
        <br />
        {Team.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
        <br />
        {Solo.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
        <br />
        {FE.Language.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
        {FE.LibraryOrFramework.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
        {FE.Style.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
        {FE.Test.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
        {FE.Format.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
        {BE.Language.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
        {BE.LibraryOrFramework.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
        {BE.Database.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
        {DevOps.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
        {Communication.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
        <br />
        <ActivityInfoComponent />
        <br />
        <CertificateInfoComponent />
      </main>
    </>
  );
};

export default Page;
