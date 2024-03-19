'use client';

import type { TechSkillInfoList } from '@/01-domain';
import {
  TechTableContainer,
  TechTableTh,
  TechTableTd,
  TechTableItem,
} from '@/03-styles';

type Props = {
  DevOps: TechSkillInfoList['DevOps'];
};

export const DevOpsTechInfoTable = ({ DevOps }: Props) => {
  return (
    <TechTableContainer>
      <thead>
        <tr>
          <TechTableTh>Tools</TechTableTh>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TechTableTd>
            {DevOps.map((item, index) => (
              <TechTableItem key={index}>{item.name}</TechTableItem>
            ))}
          </TechTableTd>
        </tr>
      </tbody>
    </TechTableContainer>
  );
};
