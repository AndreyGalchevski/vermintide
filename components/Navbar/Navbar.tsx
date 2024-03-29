import { useRouter } from 'next/router';
import { styled } from 'styled-components';

export default function Navbar() {
  const router = useRouter();

  return (
    <StyledNavbar>
      <PageName>{router.pathname.slice(1)}</PageName>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  position: absolute;
  top: 3%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 8vh;
  width: 100%;
  background-color: ${({ theme }) => theme.secondary};
`;

const PageName = styled.h1`
  text-transform: capitalize;
`;
