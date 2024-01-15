import { getCertificateInfoList } from '@/02-application';
import { Header } from '@/04-lib';
import { CertificateInfoComponent } from '@/05-ui';

const Page = async () => {
  const certificateInfo = await getCertificateInfoList();
  return (
    <>
      <Header />
      <CertificateInfoComponent certificateInfo={certificateInfo} />
    </>
  );
};

export default Page;
