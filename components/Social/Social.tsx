import styled from 'styled-components';

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
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
      <SocialLink href="https://www.facebook.com/vermintide.band" target="_blank">
        <SocialIcon src="/facebook.svg" />
      </SocialLink>
      <SocialLink href="https://music.apple.com/il/artist/vermintide/1474119907" target="_blank">
        <SocialIcon src="/itunes.svg" />
      </SocialLink>
      <SocialLink href="https://www.instagram.com/virmintide.band" target="_blank">
        <SocialIcon src="/instagram.svg" />
      </SocialLink>
      <SocialLink href="https://open.spotify.com/artist/5lPVe4olWXVhRKMceEPqgs" target="_blank">
        <SocialIcon src="/spotify.svg" />
      </SocialLink>
      <SocialLink href="https://www.youtube.com/channel/UCnscHLfwxs-6kApOiHZMLMQ" target="_blank">
        <SocialIcon src="/youtube.svg" />
      </SocialLink>
    </LinksContainer>
  );
}
