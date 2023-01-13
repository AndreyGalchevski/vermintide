import { FunctionComponent, SVGProps } from 'react';
import styled from 'styled-components';

import BandcampIcon from '../icons/BandcampIcon';
import FacebookIcon from '../icons/FacebookIcon';
import InstagramIcon from '../icons/InstagramIcon';
import SpotifyIcon from '../icons/SpotifyIcon';
import YouTubeIcon from '../icons/YouTubeIcon';

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
`;

interface SocialLink {
  url: string;
  Icon: FunctionComponent<SVGProps<SVGPathElement>>;
  altText: string;
}

const socialLinks: Array<SocialLink> = [
  {
    url: 'https://open.spotify.com/artist/1qZhVB4v4QVJweTVC3c2uB',
    Icon: SpotifyIcon,
    altText: 'Spotify icon',
  },
  {
    url: 'https://vermintide.bandcamp.com',
    Icon: BandcampIcon,
    altText: 'Bandcamp icon',
  },
  {
    url: 'https://www.youtube.com/channel/UCgJ586vhsKUFASCBA5RrDLw',
    Icon: YouTubeIcon,
    altText: 'YouTube icon',
  },
  {
    url: 'https://www.instagram.com/vermintide.band',
    Icon: InstagramIcon,
    altText: 'Instagram icon',
  },
  {
    url: 'https://www.facebook.com/vermintide.band',
    Icon: FacebookIcon,
    altText: 'Facebook icon',
  },
];

interface Props {
  variant: 'dark' | 'light';
  iconSize: number;
}

const Social: FunctionComponent<Props> = ({ variant, iconSize }) => (
  <LinksContainer>
    {socialLinks.map(({ url, Icon }) => (
      <a
        key={url}
        href={url}
        target="_blank"
        rel="noreferrer"
        style={{ width: iconSize, margin: 15 }}
      >
        <Icon fill={variant === 'dark' ? 'black' : 'white'} width={iconSize} height={iconSize} />
      </a>
    ))}
  </LinksContainer>
);

export default Social;
