import type { BasicInfo, ProjectInfoList, TechSkillInfoList } from '@/01-domain';
import {
  getActivityInfoList,
  getBasicInfo,
  getCertificateInfoList,
  getProjectInfoList,
  getTechSkillInfoList,
  getWorkExperienceInfoList,
} from '@/02-application';

const Page = async () => {
  const activityInfo = await getActivityInfoList();
  const { birthday, age, email, phone, github, blog }: BasicInfo = await getBasicInfo();
  const certificateInfo = await getCertificateInfoList();
  const { Team, Solo }: ProjectInfoList = await getProjectInfoList();
  const { FE, BE, DevOps, Communication }: TechSkillInfoList = await getTechSkillInfoList();
  const workExperienceInfo = await getWorkExperienceInfoList();

  return (
    <>
      <main>
        <ul>
          <li>{birthday}</li>
          <li>{age}</li>
          <li>{email}</li>
          <li>{phone}</li>
          <li>{github}</li>
          <li>{blog}</li>
        </ul>
        <br />
        <ul>{'자기 소개 부분'}</ul>
        <br />
        {workExperienceInfo.map((work) => {
          return (
            <ul key={work.company}>
              <li>{work.company}</li>
              <li>{work.position}</li>
              <li>{work.month}</li>
              <li>{work.tech}</li>
              <li>
                {work.detail.map((item) => {
                  return <li key={item.work}>{item.work}</li>;
                })}
              </li>
            </ul>
          );
        })}
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
        {activityInfo.map((activity) => {
          return (
            <>
              <div>{activity.name}</div>
              <div>{activity.period}</div>
              <div>{activity.description ? activity.description : null}</div>
            </>
          );
        })}
        <br />
        {certificateInfo.map((certificate) => {
          return (
            <>
              <div>{certificate.title}</div>
              <div>{certificate.id}</div>
              <div>{certificate.date}</div>
            </>
          );
        })}
      </main>
    </>
  );
};

export default Page;
