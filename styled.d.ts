import 'styled-components';

declare module 'styled-components' {
  export interface VermintideTheme {
    primary: string;
    secondary: string;
    hover: string;
    mobile: string;
    small: string;
  }
}
