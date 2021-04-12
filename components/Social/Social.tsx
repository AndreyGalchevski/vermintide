import styled from 'styled-components';

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
`;

const SocialLink = styled.a`
  display: flex;
  margin: 12px;
`;

const SocialIcon = styled.img`
  width: 100%;
  max-width: 40px;
  height: auto;
`;

export default function Social(): JSX.Element {
  return (
    <LinksContainer>
      <SocialLink href="https://www.facebook.com/vermintide.band" target="_blank" rel="noreferrer">
        <SocialIcon src="/facebook.svg" alt="Facebook icon" width="150" height="150" />
      </SocialLink>
      <SocialLink
        href="https://music.apple.com/il/artist/vermintide/1474119907"
        target="_blank"
        rel="noreferrer"
      >
        <SocialIcon src="/itunes.svg" alt="iTunes icon" width="150" height="150" />
      </SocialLink>
      <SocialLink href="https://www.instagram.com/virmintide.band" target="_blank" rel="noreferrer">
        <SocialIcon src="/instagram.svg" alt="Instagram icon" width="150" height="150" />
      </SocialLink>
      <SocialLink
        href="https://open.spotify.com/artist/5lPVe4olWXVhRKMceEPqgs"
        target="_blank"
        rel="noreferrer"
      >
        <SocialIcon src="/spotify.svg" alt="Spotify icon" width="150" height="150" />
      </SocialLink>
      <SocialLink
        href="https://www.youtube.com/channel/UCnscHLfwxs-6kApOiHZMLMQ"
        target="_blank"
        rel="noreferrer"
      >
        <SocialIcon src="/youtube.svg" alt="YouTube icon" width="150" height="150" />
      </SocialLink>
    </LinksContainer>
  );
}
