import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { styled } from 'styled-components';

import { Container, Head, MainSection } from '../../components';
import { visuals } from '../../data';

export default function Visuals() {
  return (
    <Container>
      <Head
        path="/visuals"
        pageTitle="Vermintide - Official Music Video Streams"
        pageDescription="Official music video streams by Vermintide"
      />
      <MainSection style={{ marginTop: '1em' }}>
        <VisualsContainer>
          {visuals.map(({ name, youtubeID }) => (
            <VideoRow key={youtubeID}>
              <LiteYouTubeEmbed id={youtubeID} title={name} poster="hqdefault" webp />
              <p>{name}</p>
            </VideoRow>
          ))}
        </VisualsContainer>
      </MainSection>
    </Container>
  );
}

const VisualsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px 15px;
  max-width: 330px;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    max-width: 1200px;
  }
`;

const VideoRow = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;
