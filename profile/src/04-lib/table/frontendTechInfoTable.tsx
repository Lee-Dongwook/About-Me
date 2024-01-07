'use client';
import type { TechSkillInfoList } from '@/01-domain';
import styled from 'styled-components';

type Props = {
  FE: TechSkillInfoList['FE'];
};

export const FrontendTechInfoTable = ({ FE }: Props) => {
  return (
    <TechInfoTableContainer>
      <thead>
        <tr>
          <Th>Language</Th>
          <Th>Library/Framework</Th>
          <Th>Style</Th>
          <Th>Test</Th>
          <Th>Format</Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Td>
            {FE.Language.map((item, index) => (
              <div key={index}>{item.name}</div>
            ))}
          </Td>
          <Td>
            {FE.LibraryOrFramework.map((item, index) => (
              <div key={index}>{item.name}</div>
            ))}
          </Td>
          <Td>
            <ul>
              {FE.Style.map((item, index) => (
                <div key={index}>{item.name}</div>
              ))}
            </ul>
          </Td>
          <Td>
            <ul>
              {FE.Test.map((item, index) => (
                <div key={index}>{item.name}</div>
              ))}
            </ul>
          </Td>
          <Td>
            <ul>
              {FE.Format.map((item, index) => (
                <div key={index}>{item.name}</div>
              ))}
            </ul>
          </Td>
        </tr>
      </tbody>
    </TechInfoTableContainer>
  );
};

const TechInfoTableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  border: 1px solid #dddddd;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #dddddd;
`;
