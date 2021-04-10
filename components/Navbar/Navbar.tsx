import { useRouter } from 'next/router';
import { capitalize } from '../../utils/string';

import { StyledNavbar } from './Navbar.styled';

export default function Navbar(): JSX.Element {
  const router = useRouter();

  return (
    <StyledNavbar>
      <h3>{capitalize(router.pathname.slice(1))}</h3>
    </StyledNavbar>
  );
}
