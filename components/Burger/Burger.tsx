import { Dispatch, SetStateAction } from 'react';
import Navbar from '../Navbar';

import StyledBurger, { Line } from './Burger.styled';

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Burger({ open, setOpen }: Props): JSX.Element {
  return (
    <>
      <Navbar />
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <Line open={open} />
        <Line open={open} />
        <Line open={open} />
      </StyledBurger>
    </>
  );
}
