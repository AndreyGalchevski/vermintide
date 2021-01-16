/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html, body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
