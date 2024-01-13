import styled from 'styled-components';

export const ProjectCardContainer = styled.div`
 width: 100%;
 border: 1px solid #ccc;
 padding: 16px;
 border-radius: 8px;
 box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ProjectCard = styled.div`
  text-align: start;
  border: 1px solid #ccc;
  padding: 100px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ProjectButton = styled.div`
  margin-top: 10px;
  padding: 8px 16px;
  border: none;
  text-align: right;
  background-color: #3498db;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;
