import Link from 'next/link';
import styled from 'styled-components';
import type { TeamProjectInfo } from '@/01-domain/projectInfo.types';

type Props = {
  Team: TeamProjectInfo[];
};

export const TeamProjectInfoComponent = ({ Team }: Props) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Team Projects</h1>
      {Team.map((project, index) => {
        return (
          <Card key={index}>
            <h3>{project.name}</h3>
            <hr />
            <h4>{project.description}</h4>
            <Link href={`/project/team/${index}`}>
              <Button>More Details {'>'}</Button>
            </Link>
          </Card>
        );
      })}
    </div>
  );
};

const Card = styled.div`
  text-align: start;
  border: 1px solid #ccc;
  padding: 100px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Button = styled.div`
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
