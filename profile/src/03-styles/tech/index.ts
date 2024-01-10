import styled from 'styled-components';

export const TechTableContainer = styled.table`
  width: 50%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const TechTableTh = styled.th`
  background-color: #3498db;
  color: white;
  padding: 15px;
  border: 1px solid #dddddd;
`;

export const TechTableTd = styled.td`
  text-align: center;
  padding: 15px;
  border: 1px solid #dddddd;
`;

export const TechTableItem = styled.div`
  margin-bottom: 5px;
  padding: 8px;
  background-color: #f2f2f2;
  border-radius: 4px;
`;