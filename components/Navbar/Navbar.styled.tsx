import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  position: absolute;
  top: 3%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 8vh;
  width: 100%;
  background-color: ${({ theme }) => theme.primaryLight};
`;

export const PageName = styled.h2`
  text-transform: capitalize;
`;
