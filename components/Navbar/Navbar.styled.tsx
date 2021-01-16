import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 8vh;
  width: 100%;
  background-color: white;
  border-bottom-color: lightgray;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  z-index: 1000;
`;

export const Logo = styled.a`
  flex: 1;
  font-family: 'Bebas Neue', cursive;
  font-size: 5vh;
  padding-right: 1vw;
  padding-left: 2vw;
`;

export const NavItem = styled.a<{ isActive: boolean }>`
  color: black;
  color: ${(props) => (props.isActive ? 'darkred' : 'black')};
  text-decoration: none;
  padding-top: 3vh;
  padding-bottom: 3vh;
  padding-right: 1vw;
  padding-left: 1vw;
  margin-right: 1vh;
  margin-left: 1vh;
  transition-property: all;
  transition-duration: 0.25s;
  transition-timing-function: ease-out;

  &:hover {
    background-color: lightgrey;
    color: darkred;
  }
`;
