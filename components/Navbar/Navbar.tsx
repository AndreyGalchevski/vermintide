import Link from 'next/link';

import { StyledNavbar, Logo } from './Navbar.styled';

export default function Navbar(): JSX.Element {
  return (
    <StyledNavbar>
      <Link href="/">
        <Logo>VERMINTIDE</Logo>
      </Link>
    </StyledNavbar>
  );
}
