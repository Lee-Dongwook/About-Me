import { getTechSkillInfoList } from '@/02-application';
import { Header } from '@/04-lib';
import { TechSkillInfoListComponent } from '@/05-ui';

const Page = async () => {
  const techSkillInfo = await getTechSkillInfoList();
  return (
    <>
      <Header />
      <main>
        <TechSkillInfoListComponent techSkillInfo={techSkillInfo} />
      </main>
    </>
  );
};

export default Page;
