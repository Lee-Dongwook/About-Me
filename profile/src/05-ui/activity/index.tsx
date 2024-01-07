'use client';
import styled from 'styled-components';
import type { ActivityInfoList } from '@/01-domain';

type Props = {
  activityInfo: ActivityInfoList;
};

export const ActivityInfoComponent = ({ activityInfo }: Props) => {
  return (
    <CardContainer>
      <div>
        <h3>Activity</h3>
        <div>
          {activityInfo.map((item, index) => {
            return (
              <p key={index}>
                {item.name}
                {item.period}
              </p>
            );
          })}
        </div>
      </div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
