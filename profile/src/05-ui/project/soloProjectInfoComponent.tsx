import type { SoloProjectInfo } from '@/01-domain/projectInfo.types';

export const SoloProjectInfoComponent = ({ Solo }: { Solo: SoloProjectInfo[] }) => {
  return (
    <>
      {Solo.map((item) => {
        return <li key={item.name}>{item.name}</li>;
      })}
    </>
  );
};
