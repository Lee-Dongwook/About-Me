'use client';

import my from '@/00-assets/image/PortFolio.webp';
import { BasicProfileImage, BasicName, BasicLink } from '@/03-styles';
import type { BasicUiProps } from '@/05-ui/props.types';

export const BasicComponent = ({ basicInfo }: BasicUiProps) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <BasicProfileImage src={my} width={300} height={410} alt='사진' />
            </td>
            <td style={{ padding: '100px' }}>
              <BasicName>{basicInfo.name}</BasicName>
              <br />
              <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <tbody>
                  <tr>
                    <td style={{ padding: '10px' }}>Birth</td>
                    <td style={{ padding: '10px' }}>
                      {basicInfo.birthday} ({basicInfo.age}세)
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px' }}>Email</td>
                    <td style={{ padding: '10px' }}>
                      <BasicLink href={`mailto:${basicInfo.email}`}>{basicInfo.email}</BasicLink>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px' }}>Github</td>
                    <td style={{ padding: '10px' }}>
                      <BasicLink href={basicInfo.github}>Link</BasicLink>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px' }}>LinkedIn</td>
                    <td style={{ padding: '10px' }}>
                      <BasicLink href={basicInfo.linkedIn}>Link</BasicLink>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px' }}>Velog</td>
                    <td style={{ padding: '10px' }}>
                      <BasicLink href={basicInfo.velog}>Link</BasicLink>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
