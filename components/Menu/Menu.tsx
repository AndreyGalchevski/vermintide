import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';

import StyledMenu, { MenuItem } from './Menu.styled';
import Social from '../Social';
import ExternalLinkIcon from '../icons/ExternalLinkIcon';

const merchandiseShopURL = 'https://shop.vermintide.band';

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ open, setOpen }: Props) => {
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
};

export default Menu;
