'use client';
import styled from 'styled-components';
import type { ActivityInfoList } from '@/01-domain';

type Props = {
  activityInfo: ActivityInfoList;
};

type CardProps = {
  even?: boolean;
};

export const ActivityInfoComponent = ({ activityInfo }: Props) => {
  return (
    <CardContainer>
      <div style={{ textAlign: 'center' }}>
        <h3>Activity</h3>
        <br />
        <TimeLineItem />
        {activityInfo.map((item, index) => {
          return (
            <Card key={index} even={index % 2 === 0}>
              <div key={index}>
                <p>{item.name}</p>
                <p>{item.period}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Card = styled.div<CardProps>`
  width: 400px;
  text-align: center;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: ${(props) => (props.even ? '0' : '500px')};
`;

const TimeLineItem = styled.div`
  position: relative;
  &:not(:last-child)::before {
    content: '';
    position: absolute;
    left: 50%;
    width: 5px;
    height: 90vh;
    background-color: #bbb;
  }
`;
