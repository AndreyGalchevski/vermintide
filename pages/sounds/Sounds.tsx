import Link from 'next/link';
import { styled } from 'styled-components';

import { Container, Head, MainSection } from '../../components';
import { albums } from '../../data';

export default function Sounds() {
  return (
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
                />
              </AlbumRow>
              <div style={{ display: 'flex' }}>
                <PurchaseButton href={purchaseURL} target="_blank">
                  Buy
                </PurchaseButton>
                <WordsButton href={{ pathname: '/words', search: `album=${name}` }}>
                  Words
                </WordsButton>
              </div>
            </AlbumContainer>
          ))}
        </SoundsContainer>
      </MainSection>
    </Container>
  );
}

const SoundsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 30px 15px;
`;

const AlbumContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
`;

const AlbumRow = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    flex-direction: row;
  }
`;

const AlbumImage = styled.img`
  width: 330px;
  height: 330px;
  margin-bottom: 10px;

  border-radius: ${({ theme }) => theme.borderRadius};

  @media (min-width: ${({ theme }) => theme.mobile}) {
    width: 467px;
    height: 467px;
    margin-right: 10px;
  }
`;

const AlbumIFrame = styled.iframe`
  width: 330px;
  height: 530px;
  margin-bottom: 10px;

  border-radius: ${({ theme }) => theme.borderRadius};

  @media (min-width: ${({ theme }) => theme.mobile}) {
    width: 467px;
    height: 467px;
  }
`;

const PurchaseButton = styled(Link)`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  padding: 16px 26px;
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const WordsButton = styled(Link)`
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  padding: 16px 26px;
  box-shadow: ${({ theme }) => `inset 0px 0px 0px 1px ${theme.primary}`};
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;
