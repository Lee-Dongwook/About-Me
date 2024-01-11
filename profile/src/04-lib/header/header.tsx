'use client';
import Link from 'next/link';
import styled from 'styled-components';

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
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
  position: sticky;
  top: 0;
  z-index: 999;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.7);
  color: black;
  padding: 16px;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Navbar = styled.ul`
  list-style: none;
  display: flex;
`;

const NavItem = styled.li`
  margin-right: 16px;

  a {
    color: black;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: skyblue;
      text-decoration: underline;
    }
  }
`;
