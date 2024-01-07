import type { CertificateInfoList } from '@/01-domain';

type Props = {
  certificateInfo: CertificateInfoList;
};

export const CertificateInfoComponent = ({ certificateInfo }: Props) => {
  return (
    <>
      {certificateInfo.map((certificate) => {
        return (
          <>
            <div>{certificate.title}</div>
            <div>{certificate.id}</div>
            <div>{certificate.date}</div>
          </>
        );
      })}
    </>
  );
};
