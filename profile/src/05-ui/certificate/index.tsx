'use client';
import styled from 'styled-components';
import type { CertificateInfoList } from '@/01-domain';

type Props = {
  certificateInfo: CertificateInfoList;
};

export const CertificateInfoComponent = ({ certificateInfo }: Props) => {
  return (
    <div>
      <h3>Certificate</h3>
      <div>
        {certificateInfo.map((item, index) => {
          return (
            <CardContainer key={index}>
              <div>
                <h4>{item.title}</h4>
                <h5>{item.id}</h5>
                <h5>{item.date}</h5>
              </div>
            </CardContainer>
          );
        })}
      </div>
    </div>
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
