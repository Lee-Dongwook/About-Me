'use client';

import type { TechSkillInfoList } from '@/01-domain';
import {
  TechTableContainer,
  TechTableTh,
  TechTableTd,
  TechTableItem,
} from '@/03-styles';

type Props = {
  BE: TechSkillInfoList['BE'];
};

export const BackendTechInfoTable = ({ BE }: Props) => {
  return (
    <TechTableContainer>
      <thead>
        <tr>
          <TechTableTh>Language</TechTableTh>
          <TechTableTh>Library/Framework</TechTableTh>
          <TechTableTh>Database</TechTableTh>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TechTableTd>
            {BE.Language.map((item, index) => (
              <TechTableItem key={index}>{item.name}</TechTableItem>
            ))}
          </TechTableTd>
          <TechTableTd>
            {BE.LibraryOrFramework.map((item, index) => (
              <TechTableItem key={index}>{item.name}</TechTableItem>
            ))}
          </TechTableTd>
          <TechTableTd>
            <ul>
              {BE.Database.map((item, index) => (
                <TechTableItem key={index}>{item.name}</TechTableItem>
              ))}
            </ul>
          </TechTableTd>
        </tr>
      </tbody>
    </TechTableContainer>
  );
};
