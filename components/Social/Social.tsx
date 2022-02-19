import styled from 'styled-components';
import Image from 'next/image';

import facebookIcon from '../../public/facebook.png';
import instagramIcon from '../../public/instagram.png';
import spotifyIcon from '../../public/spotify.png';
import youtubeIcon from '../../public/youtube.png';
import soundcloudIcon from '../../public/soundcloud.png';
import bandcampIcon from '../../public/bandcamp.png';

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
      <SocialLink href="https://soundcloud.com/vermintide_band" target="_blank" rel="noreferrer">
        <Image src={soundcloudIcon} alt="SoundCloud icon" />
      </SocialLink>
      <SocialLink href="https://vermintide.bandcamp.com" target="_blank" rel="noreferrer">
        <Image src={bandcampIcon} alt="BandCamp icon" />
      </SocialLink>
    </LinksContainer>
  );
}
