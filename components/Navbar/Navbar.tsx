import { useRouter } from 'next/router';

import { StyledNavbar, PageName } from './Navbar.styled';

const Navbar = () => {
  const router = useRouter();

  return (
    <StyledNavbar>
      <PageName>{router.pathname.slice(1)}</PageName>
    </StyledNavbar>
  );
};

export default Navbar;
