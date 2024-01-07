import type { WorkExperienceInfoList } from '@/01-domain';

type Props = {
  workExperienceInfo: WorkExperienceInfoList;
};

export const WorkExperienceInfoComponent = ({ workExperienceInfo }: Props) => {
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
