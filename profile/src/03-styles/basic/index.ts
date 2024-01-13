import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const BasicProfileImage = styled(Image)`
  border-radius: 10%;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const BasicName = styled.h3`
  margin-bottom: 10px;
  font-size: 1.5rem;
`;

export const BasicDetails = styled.h3`
  margin-bottom: 20px;
  font-size: 1rem;

  span {
    margin-right: 10px;
  }
`;

export const BasicLink = styled(Link)`
  color: black;
  text-decoration: underline;

  &:hover {
    color: #0070f3;
    text-decoration: underline;
  }
`;