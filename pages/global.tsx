import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

import { Theme } from '../utils/theme';

const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  ${normalize}
  html, body {
    padding: 0;
    margin: 0;
    font-family: 'Helvetica', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primary};
  }
`;

export default GlobalStyles;
