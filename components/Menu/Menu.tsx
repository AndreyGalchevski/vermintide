import Link from 'next/link';
import { useRouter } from 'next/router';

import StyledMenu, { MenuItem } from './Menu.styled';

interface Props {
  open: boolean;
}

export default function Menu({ open }: Props): JSX.Element {
  const router = useRouter();

  const isActivePath = (currentPath: string) => {
    return router.pathname === currentPath;
  };

  return (
    <StyledMenu open={open}>
      <Link href="/">
        <MenuItem isActive={isActivePath('/')}>Home</MenuItem>
      </Link>

      <Link href="/sounds">
        <MenuItem isActive={isActivePath('/sounds')}>Sounds</MenuItem>
      </Link>

      <Link href="/words">
        <MenuItem isActive={isActivePath('/words')}>Words</MenuItem>
      </Link>

      <Link href="/meanings">
        <MenuItem isActive={isActivePath('/meanings')}>Meanings</MenuItem>
      </Link>

      <Link href="/events">
        <MenuItem isActive={isActivePath('/events')}>Events</MenuItem>
      </Link>
    </StyledMenu>
  );
}
