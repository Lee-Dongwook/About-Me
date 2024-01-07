'use client';
import type { TechSkillInfoList } from '@/01-domain';
import styled from 'styled-components';

type Props = {
  Communication: TechSkillInfoList['Communication'];
};

export const CommunicationTechInfoTable = ({ Communication }: Props) => {
  return (
    <TechInfoTableContainer>
      <thead>
        <tr>
          <Th>Tools</Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Td>
            {Communication.map((item, index) => (
              <div key={index}>{item.name}</div>
            ))}
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
