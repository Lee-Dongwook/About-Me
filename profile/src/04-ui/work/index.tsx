import type { WorkExperienceInfoList } from '@/01-domain';
import { getWorkExperienceInfoList } from '@/02-application';

export const WorkExperienceInfoComponent = async () => {
  const workExperienceInfo: WorkExperienceInfoList = await getWorkExperienceInfoList();

  return (
    <>
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
    </>
  );
};
