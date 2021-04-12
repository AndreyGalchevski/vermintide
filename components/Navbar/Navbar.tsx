import { useRouter } from 'next/router';

import { StyledNavbar, PageName } from './Navbar.styled';

export default function Navbar(): JSX.Element {
  const router = useRouter();

  return (
    <StyledNavbar>
      <PageName>{router.pathname.slice(1)}</PageName>
    </StyledNavbar>
  );
}
