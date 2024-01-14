'use client';

import my from '@/00-assets/image/my.png';
import { BasicProfileImage, BasicName, BasicDetails, BasicLink } from '@/03-styles';
import type { BasicUiProps } from '@/05-ui/props.types';

export const BasicComponent = ({ basicInfo }: BasicUiProps) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <BasicProfileImage src={my} width={200} height={250} alt='사진' />
            </td>
            <td style={{ padding: '100px' }}>
              <BasicName>{basicInfo.name}</BasicName>
              <br />
              <BasicDetails>
                <span>Birth : {basicInfo.birthday}</span>
                <span>({basicInfo.age}세)</span>
              </BasicDetails>
              <BasicDetails>
                Email :{' '}
                <BasicLink href={`mailto:dlehddnr0713@gmail.com`}>{basicInfo.email}</BasicLink>
              </BasicDetails>
              <BasicDetails>
                Github :{' '}
                <BasicLink href={`https://github.com/Lee-Dongwook`}>{basicInfo.github}</BasicLink>
              </BasicDetails>
              <BasicDetails>
                Blog : <BasicLink href={`https://velog.io/@dlehddnr99`}>{basicInfo.blog}</BasicLink>
              </BasicDetails>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
