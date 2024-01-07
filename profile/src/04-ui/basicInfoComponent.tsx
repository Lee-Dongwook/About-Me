import type { BasicInfo } from '@/01-domain';
import { getBasicInfo } from '@/02-application';

export const BasicInfoComponent = async () => {
  const { birthday, age, email, phone, github, blog }: BasicInfo = await getBasicInfo();

  return (
    <>
      <ul>
        <li>{birthday}</li>
        <li>{age}</li>
        <li>{email}</li>
        <li>{phone}</li>
        <li>{github}</li>
        <li>{blog}</li>
      </ul>
    </>
  );
};
