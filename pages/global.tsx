import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

import { Theme } from './theme';

const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
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

  body {
    background: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryDark};
  }
`;

export default GlobalStyles;
