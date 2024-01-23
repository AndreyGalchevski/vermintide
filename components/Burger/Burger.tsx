import { Dispatch, SetStateAction } from 'react';
import { styled } from 'styled-components';

import Navbar from '../Navbar';

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Burger({ open, setOpen }: Props) {
  return (
    <>
      <Navbar />
      <StyledBurger open={open} onClick={() => setOpen(!open)} aria-label="Side menu button">
        <Line open={open} aria-hidden="true" />
        <Line open={open} aria-hidden="true" />
        <Line open={open} aria-hidden="true" />
      </StyledBurger>
    </>
  );
}

const StyledBurger = styled.button<{ open: boolean }>`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }
`;

const Line = styled.div<{ open: boolean }>`
  width: 2rem;
  height: 0.25rem;
  background: ${({ theme, open }) => (open ? theme.secondary : theme.primary)};
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;

  :first-child {
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
  }

  :nth-child(2) {
    opacity: ${({ open }) => (open ? '0' : '1')};
    transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
  }

  :nth-child(3) {
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`;
