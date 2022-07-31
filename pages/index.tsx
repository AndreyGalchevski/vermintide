import Image from 'next/image';

import { Head, Social, Container, MainSection } from '../components';
import logoImage from '../public/logo.png';

const Home = () => (
  <Container>
    <Head
      path=""
      pageTitle="Vermintide - Official Website"
      pageDescription="Vermintide - Israeli Slamming Grindcore"
    />
    <MainSection>
      <div style={{ marginBottom: 10 }}>
        <Image src={logoImage} alt="Vermintide band logo" placeholder="blur" />
      </div>
      <Social variant="dark" iconSize={35} iconMargin={12} />
    </MainSection>
  </Container>
);

export default Home;
