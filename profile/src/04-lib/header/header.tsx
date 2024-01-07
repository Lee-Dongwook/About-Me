'use client';
import Link from 'next/link';
import styled from 'styled-components';

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <Logo>Lee Dong Wook</Logo>
        <Navbar>
          <NavItem>
            <Link href={'/'}>Home</Link>
          </NavItem>
          <NavItem>
            <Link href={'/project'}>Projects</Link>
          </NavItem>
          <NavItem>
            <Link href={'/tech'}>Tech Skills</Link>
          </NavItem>
          <NavItem>
            <Link href={'/activity'}>Activity & Education</Link>
          </NavItem>
          <NavItem>
            <Link href={'/certificate'}>Certificate</Link>
          </NavItem>
        </Navbar>
      </Navigation>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: skyblue;
  border-radius: 10px;
  color: white;
  padding: 16px;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const Navbar = styled.ul`
  list-style: none;
  display: flex;
`;

const NavItem = styled.li`
  margin-right: 16px;

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
