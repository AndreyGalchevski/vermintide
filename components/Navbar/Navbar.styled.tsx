import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 8vh;
  width: 100%;
  background-color: ${({ theme }) => theme.primaryLight};
`;

export const Logo = styled.a`
  font-family: 'Bebas Neue', cursive;
  font-size: 5vh;
`;
