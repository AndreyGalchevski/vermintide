import { Head, Social, Container, MainSection } from '../components';
import Logo from '../components/Logo';

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
          <Logo />
        </div>
        <Social variant="dark" iconSize={35} />
      </MainSection>
    </Container>
  );
}
