import styled from 'styled-components';

import { Head, Social, Container, MainSection } from '../components';

const Logo = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
`;

export default function Home(): JSX.Element {
  return (
    <Container>
      <Head
        path=""
        pageTitle="Vermintide - Home"
        pageDescription="Vermintide Official Website Home Page"
      />
      <MainSection>
        <Logo src="/logo.png" alt="Vermintide band logo" width="600" height="305" />
        <Social />
      </MainSection>
    </Container>
  );
}
