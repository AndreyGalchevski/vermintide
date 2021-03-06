import styled from 'styled-components';
import Image from 'next/image';

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
`;

const SocialLink = styled.a`
  display: flex;
  margin: 12px;
`;

export default function Social(): JSX.Element {
  return (
    <LinksContainer>
      <SocialLink href="https://www.facebook.com/vermintide.band" target="_blank" rel="noreferrer">
        <Image src="/facebook.svg" alt="Facebook icon" width="40" height="76" />
      </SocialLink>
      <SocialLink
        href="https://music.apple.com/il/artist/vermintide/1564671614"
        target="_blank"
        rel="noreferrer"
      >
        <Image src="/itunes.svg" alt="iTunes icon" width="40" height="76" />
      </SocialLink>
      <SocialLink href="https://www.instagram.com/vermintide.band" target="_blank" rel="noreferrer">
        <Image src="/instagram.svg" alt="Instagram icon" width="40" height="76" />
      </SocialLink>
      <SocialLink
        href="https://open.spotify.com/artist/1qZhVB4v4QVJweTVC3c2uB"
        target="_blank"
        rel="noreferrer"
      >
        <Image src="/spotify.svg" alt="Spotify icon" width="40" height="76" />
      </SocialLink>
      <SocialLink
        href="https://www.youtube.com/channel/UCgJ586vhsKUFASCBA5RrDLw"
        target="_blank"
        rel="noreferrer"
      >
        <Image src="/youtube.svg" alt="YouTube icon" width="40" height="76" />
      </SocialLink>
    </LinksContainer>
  );
}
