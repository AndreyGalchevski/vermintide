import styled from 'styled-components';

import { Head, Social, StyledContainer, StyledMain } from '../components';

const Logo = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
`;

export default function Home(): JSX.Element {
  return (
    <StyledContainer>
      <Head pageTitle="Vermintide - Home" pageDescription="Vermintide Official Website Home Page" />
      <StyledMain>
        <Logo src="/logo.png" />
        <Social />
      </StyledMain>
    </StyledContainer>
  );
}
