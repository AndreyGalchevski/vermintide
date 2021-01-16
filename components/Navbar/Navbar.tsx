import Link from 'next/link';
import { useRouter } from 'next/router';

import { StyledNavbar, Logo, NavItem } from './Navbar.styled';

export default function Navbar(): JSX.Element {
  const router = useRouter();

  const isActivePath = (currentPath: string) => {
    return router.pathname === currentPath;
  };

  return (
    <StyledNavbar>
      <Link href="/">
        <Logo>VERMINTIDE</Logo>
      </Link>

      <Link href="/">
        <NavItem isActive={isActivePath('/')}>Home</NavItem>
      </Link>

      <Link href="/sounds">
        <NavItem isActive={isActivePath('/sounds')}>Sounds</NavItem>
      </Link>

      <Link href="/words">
        <NavItem isActive={isActivePath('/words')}>Words</NavItem>
      </Link>

      <Link href="/meanings">
        <NavItem isActive={isActivePath('/meanings')}>Meanings</NavItem>
      </Link>
    </StyledNavbar>
  );
}
