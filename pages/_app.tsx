/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { useRef, useState } from 'react';

import theme from '../utils/theme';
import GlobalStyles from './global';
import { Footer, Burger, Menu } from '../components';
import useOnClickOutside from '../hooks/useOnClickOutside';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const burgerMenuRef = useRef(null);

  useOnClickOutside(burgerMenuRef, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={burgerMenuRef}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <Component {...pageProps} />
        <Footer />
      </>
    </ThemeProvider>
  );
}
