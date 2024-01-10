'use client';
import { ActivityCardContainer, ActivityCard } from '@/03-styles';
import type { ActivityUiProps } from '@/05-ui/props.types';

export const ActivityInfoComponent = ({ activityInfo }: ActivityUiProps) => {
  return (
    <ActivityCardContainer>
      <div style={{ textAlign: 'center' }}>
        <h3>Activity & Education</h3>
        <br />
        <br />
        {activityInfo.map((item, index) => {
          return (
            <ActivityCard key={index} even={index % 2 === 0}>
              <p>{item.name}</p>
              <p>{item.period}</p>
            </ActivityCard>
          );
        })}
      </div>
    </ActivityCardContainer>
  );
};
