import Image from 'next/image';

import { Head, Social, Container, MainSection } from '../components';
import logoImage from '../public/logo.png';

export default function Home(): JSX.Element {
  return (
    <Container>
      <Head
        path=""
        pageTitle="Vermintide - In Grind We Slam"
        pageDescription="Vermintide is a Brutal Deathgrind collective from Israel"
      />
      <MainSection>
        <div style={{ marginBottom: 10 }}>
          <Image src={logoImage} alt="Vermintide band logo" placeholder="blur" />
        </div>
        <Social />
      </MainSection>
    </Container>
  );
}
