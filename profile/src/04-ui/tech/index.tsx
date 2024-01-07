import type { TechSkillInfoList } from '@/01-domain';
import { getTechSkillInfoList } from '@/02-application';

export const TechSkillInfoListComponent = async () => {
  const { FE, BE, DevOps, Communication }: TechSkillInfoList = await getTechSkillInfoList();

  return (
    <>
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
    </>
  );
};
