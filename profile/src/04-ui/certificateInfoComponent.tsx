import type { CertificateInfoList } from '@/01-domain';
import { getCertificateInfoList } from '@/02-application';

export const CertificateInfoComponent = async () => {
  const certificateInfo: CertificateInfoList = await getCertificateInfoList();

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
