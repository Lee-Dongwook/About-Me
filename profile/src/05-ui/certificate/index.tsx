import type { CertificateInfoList } from '@/01-domain';
import { CertificateInfoCard } from '@/04-lib';

type Props = {
  certificateInfo: CertificateInfoList;
};

export const CertificateInfoComponent = ({ certificateInfo }: Props) => {
  return (
    <>
      <CertificateInfoCard certificateInfo={certificateInfo} />
    </>
  );
};
