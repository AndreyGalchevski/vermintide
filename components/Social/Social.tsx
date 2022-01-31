import styled from 'styled-components';
import Image from 'next/image';

import facebookIcon from '../../public/facebook.png';
import itunesIcon from '../../public/itunes.png';
import instagramIcon from '../../public/instagram.png';
import spotifyIcon from '../../public/spotify.png';
import youtubeIcon from '../../public/youtube.png';

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
`;

const SocialLink = styled.a`
  display: flex;
  margin: 12px;
  max-height: 40px;
  max-width: 40px;
`;

export default function Social(): JSX.Element {
  return (
    <LinksContainer>
      <SocialLink href="https://www.facebook.com/vermintide.band" target="_blank" rel="noreferrer">
        <Image src={facebookIcon} alt="Facebook icon" />
      </SocialLink>
      <SocialLink
        href="https://music.apple.com/il/artist/vermintide/1564671614"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={itunesIcon} alt="iTunes icon" />
      </SocialLink>
      <SocialLink href="https://www.instagram.com/vermintide.band" target="_blank" rel="noreferrer">
        <Image src={instagramIcon} alt="Instagram icon" />
      </SocialLink>
      <SocialLink
        href="https://open.spotify.com/artist/1qZhVB4v4QVJweTVC3c2uB"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={spotifyIcon} alt="Spotify icon" />
      </SocialLink>
      <SocialLink
        href="https://www.youtube.com/channel/UCgJ586vhsKUFASCBA5RrDLw"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={youtubeIcon} alt="YouTube icon" />
      </SocialLink>
    </LinksContainer>
  );
}
