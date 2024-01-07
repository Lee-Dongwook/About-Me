import type { WorkExperienceInfoList } from '@/01-domain';
import { WorkExperienceInfoCard } from '@/04-lib';

type Props = {
  workExperienceInfo: WorkExperienceInfoList;
};

export const WorkExperienceInfoComponent = ({ workExperienceInfo }: Props) => {
  return (
    <>
      <WorkExperienceInfoCard workExperienceInfo={workExperienceInfo} />
    </>
  );
};
