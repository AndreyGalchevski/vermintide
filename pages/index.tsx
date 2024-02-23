import Image from 'next/image';
import { Head, Social, Container, MainSection } from '../components';
import logo from '../public/logo.webp';

export default function Home() {
  return (
    <Container>
      <Head
        path=""
        pageTitle="Vermintide - Official Band Website"
        pageDescription="Vermintide - Israeli DeathGrind Band"
      />
      <MainSection>
        <div style={{ marginBottom: 10 }}>
          <Image priority src={logo} alt="Vermintide band logo" width={400} />
        </div>
        <Social variant="dark" iconSize={35} />
      </MainSection>
    </Container>
  );
}
