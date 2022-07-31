import Image from 'next/image';
import styled from 'styled-components';

import { Head, Social, Container, MainSection } from '../components';
import logoImage from '../public/logo.png';

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
`;

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
      <LinksContainer>
        <Social iconSize={35} iconMargin={12} />
      </LinksContainer>
    </MainSection>
  </Container>
);

export default Home;
