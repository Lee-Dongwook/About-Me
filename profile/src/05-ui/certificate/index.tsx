'use client';
import type { CertificateInfoList } from '@/01-domain';
import { CertificateCardContainer, CertificateCard } from '@/03-styles';

type CertificateUiProps = {
  certificateInfo: CertificateInfoList;
};

export const CertificateInfoComponent = ({ certificateInfo }: CertificateUiProps) => {
  return (
    <CertificateCardContainer>
      <div style={{ textAlign: 'center' }}>
        <h3>Certificate</h3>
        <br />
        <br />
        {certificateInfo.map((item, index) => {
          return (
            <CertificateCard key={index} even={index % 2 === 0}>
              <p>{item.title}</p>
              <p>{item.id}</p>
              <p>{item.date}</p>
            </CertificateCard>
          );
        })}
      </div>
    </CertificateCardContainer>
  );
};
