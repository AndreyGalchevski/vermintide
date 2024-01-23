import Link from 'next/link';
import styled from 'styled-components';

const StyledMenu = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.primary};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  z-index: 9;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;

export default StyledMenu;

export const MenuItem = styled(Link)<{ $isActive: boolean }>`
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 1rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: ${({ theme, $isActive }) => ($isActive ? theme.accent : theme.secondary)};
  text-decoration: none;
  transition: color 0.3s linear;
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;
