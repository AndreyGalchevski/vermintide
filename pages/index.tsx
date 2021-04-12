import Image from 'next/image';

import { Head, Social, Container, MainSection } from '../components';

export default function Home(): JSX.Element {
  return (
    <Container>
      <Head
        path=""
        pageTitle="Vermintide - Home"
        pageDescription="Vermintide Official Website Home Page"
      />
      <MainSection>
        <Image src="/logo.png" alt="Vermintide band logo" width="600" height="305" />
        <Social />
      </MainSection>
    </Container>
  );
}
