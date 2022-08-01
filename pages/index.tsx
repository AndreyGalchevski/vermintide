import { Head, Social, Container, MainSection } from '../components';
import Logo from '../components/Logo';

const Home = () => (
  <Container>
    <Head
      path=""
      pageTitle="Vermintide - Official Website"
      pageDescription="Vermintide - Israeli Slamming Grindcore"
    />
    <MainSection>
      <div style={{ marginBottom: 10 }}>
        <Logo />
      </div>
      <Social variant="dark" iconSize={35} />
    </MainSection>
  </Container>
);

export default Home;
