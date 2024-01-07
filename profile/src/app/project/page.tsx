import { getProjectInfoList } from '@/02-application';
import { Header } from '@/04-lib';
import { ProjectInfoComponent } from '@/05-ui';

const Page = async () => {
  const projectInfo = await getProjectInfoList();
  return (
    <>
      <Header />
      <main>
        <ProjectInfoComponent projectInfo={projectInfo} />
      </main>
    </>
  );
};

export default Page;
