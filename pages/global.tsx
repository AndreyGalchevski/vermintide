import { normalize } from 'styled-normalize';
import { VermintideTheme, createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle<{ theme: VermintideTheme }>`
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

  .yt-lite {
    border-radius: 10px;
    width: 330px;
    height: 185px;

    @media (min-width: 768px) {
      width: 583px;
      height: 328px;
    }
  }
`;

export default GlobalStyles;
