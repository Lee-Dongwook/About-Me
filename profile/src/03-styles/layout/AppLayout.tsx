'use client';
import styled from 'styled-components';

export const AppLayout = (props: { children: React.ReactNode }) => {
  return (
    <CenterPosition>
      <FixedWidth>{props.children}</FixedWidth>
    </CenterPosition>
  );
};

const CenterPosition = styled.div`
  display: flex;
  justify-content: center;
`;

const FixedWidth = styled.div`
  width: 800px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
