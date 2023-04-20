import Link from 'next/link';
import { Head, Container, MainSection } from '../../components';
import { albums } from '../../data';
import SoundsContainer, {
  AlbumIFrame,
  AlbumContainer,
  AlbumImage,
  PurchaseButton,
  AlbumRow,
} from './Sounds.styled';

const Sounds = () => (
  <Container>
    <Head
      path="/sounds"
      pageTitle="Vermintide - Official Streams And Downloads"
      pageDescription="Official music streams and downloads by Vermintide"
    />
    <MainSection>
      <SoundsContainer>
        {albums.map(({ name, artworkURL, streamingURL, purchaseURL }) => (
          <AlbumContainer key={name}>
            <h2>{name}</h2>
            <AlbumRow>
              <AlbumImage src={artworkURL} alt={`${name} artwork`} />
              <AlbumIFrame
                title={name}
                src={streamingURL}
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen={false}
                height="340"
                width="100%"
              />
            </AlbumRow>
            <PurchaseButton href={purchaseURL} target="_blank">
              Buy
            </PurchaseButton>
          </AlbumContainer>
        ))}
      </SoundsContainer>
    </MainSection>
  </Container>
);

export default Sounds;
