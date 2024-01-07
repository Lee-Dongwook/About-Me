import Image from 'next/image';
import my from '@/00-assets/image/my.png';
import type { BasicInfo } from '@/01-domain';
import { getBasicInfo } from '@/02-application';

export const BasicInfoComponent = async () => {
  const { birthday, age, email, phone, github, blog }: BasicInfo = await getBasicInfo();

  return (
    <>
      <table>
        <td style={{ width: '200px', height: '250px' }}>
          <Image src={my} width={200} height={250} alt='프로필 사진' />
        </td>
        <td>
          <li> 생년월일 : {birthday}</li>
          <li> 나이 :{age}</li>
          <li> 이메일 : {email}</li>
          <li> 전화번호 : {phone}</li>
          <li> 깃허브 주소 : {github}</li>
          <li> 블로그 주소 : {blog}</li>
        </td>
      </table>
    </>
  );
};
