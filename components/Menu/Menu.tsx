import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import { styled } from 'styled-components';
import Link from 'next/link';

import Social from '../Social';
import ExternalLinkIcon from '../icons/ExternalLinkIcon';

const merchandiseShopURL = 'https://shop.vermintide.band';

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Menu({ open, setOpen }: Props) {
  const router = useRouter();

  const isActivePath = (currentPath: string) => {
    return router.pathname === currentPath;
  };

  const handleMenuItemClick = () => setOpen(false);

  return (
    <StyledMenu open={open}>
      <MenuItem href="/" onClick={handleMenuItemClick} $isActive={isActivePath('/')}>
        Home
      </MenuItem>

      <MenuItem href="/sounds" onClick={handleMenuItemClick} $isActive={isActivePath('/sounds')}>
        Sounds
      </MenuItem>

      <MenuItem href="/words" onClick={handleMenuItemClick} $isActive={isActivePath('/words')}>
        Words
      </MenuItem>

      <MenuItem href="/visuals" onClick={handleMenuItemClick} $isActive={isActivePath('/visuals')}>
        Visuals
      </MenuItem>

      <MenuItem href="/events" onClick={handleMenuItemClick} $isActive={isActivePath('/events')}>
        Events
      </MenuItem>

      <MenuItem href={merchandiseShopURL} $isActive={false} target="_blank">
        <div style={{ display: 'flex', alignItems: 'baseLine' }}>
          <span style={{ marginRight: 5 }}>Shop</span>
          <ExternalLinkIcon fill="white" />
        </div>
      </MenuItem>

      <Social variant="light" iconSize={30} />
    </StyledMenu>
  );
}

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

const MenuItem = styled(Link)<{ $isActive: boolean }>`
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
