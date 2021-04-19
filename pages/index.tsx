import Image from 'next/image';

import { Head, Social, Container, MainSection } from '../components';

export default function Home(): JSX.Element {
  return (
    <Container>
      <Head
        path=""
        pageTitle="Vermintide - Grind you the f**k away"
        pageDescription="Vermintide is a brutal deathgrind collective from Israel"
      />
      <MainSection>
        <Image src="/logo.png" alt="Vermintide band logo" width="600" height="305" />
        <Social />
      </MainSection>
    </Container>
  );
}
