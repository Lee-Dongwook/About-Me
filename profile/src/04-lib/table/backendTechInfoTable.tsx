'use client';
import type { TechSkillInfoList } from '@/01-domain';
import styled from 'styled-components';

type Props = {
  BE: TechSkillInfoList['BE'];
};

export const BackendTechInfoTable = ({ BE }: Props) => {
  return (
    <TechInfoTableContainer>
      <thead>
        <tr>
          <Th>Language</Th>
          <Th>Library/Framework</Th>
          <Th>Database</Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Td>
            {BE.Language.map((item, index) => (
              <div key={index}>{item.name}</div>
            ))}
          </Td>
          <Td>
            {BE.LibraryOrFramework.map((item, index) => (
              <div key={index}>{item.name}</div>
            ))}
          </Td>
          <Td>
            <ul>
              {BE.Database.map((item, index) => (
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
