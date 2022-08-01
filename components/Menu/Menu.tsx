import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';

import StyledMenu, { MenuItem } from './Menu.styled';
import Social from '../Social';
import ExternalLinkIcon from '../icons/ExternalLinkIcon';

const merchandiseShopURL = 'https://www.etsy.com/shop/Vermintide';

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
      <Link href="/" passHref>
        <MenuItem isActive={isActivePath('/')} onClick={handleMenuItemClick}>
          Home
        </MenuItem>
      </Link>

      <Link href="/sounds" passHref>
        <MenuItem isActive={isActivePath('/sounds')} onClick={handleMenuItemClick}>
          Sounds
        </MenuItem>
      </Link>

      <Link href="/words" passHref>
        <MenuItem isActive={isActivePath('/words')} onClick={handleMenuItemClick}>
          Words
        </MenuItem>
      </Link>

      <Link href="/visuals" passHref>
        <MenuItem isActive={isActivePath('/visuals')} onClick={handleMenuItemClick}>
          Visuals
        </MenuItem>
      </Link>

      <Link href="/events" passHref>
        <MenuItem isActive={isActivePath('/events')} onClick={handleMenuItemClick}>
          Events
        </MenuItem>
      </Link>

      <Link href={merchandiseShopURL} passHref>
        <MenuItem isActive={false} target="_blank">
          <div style={{ display: 'flex', alignItems: 'baseLine' }}>
            <span style={{ marginRight: 5 }}>Shop</span>
            <ExternalLinkIcon fill="white" />
          </div>
        </MenuItem>
      </Link>

      <Social variant="light" iconSize={30} />
    </StyledMenu>
  );
};

export default Menu;
