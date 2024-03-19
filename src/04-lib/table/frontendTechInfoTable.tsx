'use client';

import type { TechSkillInfoList } from '@/01-domain';
import {
  TechTableContainer,
  TechTableTh,
  TechTableTd,
  TechTableItem,
} from '@/03-styles';

type Props = {
  FE: TechSkillInfoList['FE'];
};

export const FrontendTechInfoTable = ({ FE }: Props) => {
  return (
    <TechTableContainer>
      <thead>
        <tr>
          <TechTableTh>Language</TechTableTh>
          <TechTableTh>Library/Framework</TechTableTh>
          <TechTableTh>Style</TechTableTh>
          <TechTableTh>Test</TechTableTh>
          <TechTableTh>Format</TechTableTh>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TechTableTd>
            {FE.Language.map((item, index) => (
              <TechTableItem key={index}>{item.name}</TechTableItem>
            ))}
          </TechTableTd>
          <TechTableTd>
            {FE.LibraryOrFramework.map((item, index) => (
              <TechTableItem key={index}>{item.name}</TechTableItem>
            ))}
          </TechTableTd>
          <TechTableTd>
            <ul>
              {FE.Style.map((item, index) => (
                <TechTableItem key={index}>{item.name}</TechTableItem>
              ))}
            </ul>
          </TechTableTd>
          <TechTableTd>
            <ul>
              {FE.Test.map((item, index) => (
                <TechTableItem key={index}>{item.name}</TechTableItem>
              ))}
            </ul>
          </TechTableTd>
          <TechTableTd>
            <ul>
              {FE.Format.map((item, index) => (
                <TechTableItem key={index}>{item.name}</TechTableItem>
              ))}
            </ul>
          </TechTableTd>
        </tr>
      </tbody>
    </TechTableContainer>
  );
};
