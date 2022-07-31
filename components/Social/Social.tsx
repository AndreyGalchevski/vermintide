import Image from 'next/image';
import { FunctionComponent } from 'react';

interface SocialLink {
  url: string;
  iconPath: string;
  altText: string;
}

const socialLinks: Array<SocialLink> = [
  {
    url: 'https://open.spotify.com/artist/1qZhVB4v4QVJweTVC3c2uB',
    iconPath: '/spotify-brands.svg',
    altText: 'Spotify icon',
  },
  {
    url: 'https://music.apple.com/artist/vermintide/1564671614',
    iconPath: '/music-solid.svg',
    altText: 'Apple Music icon',
  },
  {
    url: 'https://www.youtube.com/channel/UCgJ586vhsKUFASCBA5RrDLw',
    iconPath: '/youtube-brands.svg',
    altText: 'YouTube icon',
  },
  {
    url: 'https://www.instagram.com/vermintide.band',
    iconPath: '/instagram-brands.svg',
    altText: 'Instagram icon',
  },
  {
    url: 'https://www.facebook.com/vermintide.band',
    iconPath: '/facebook-brands.svg',
    altText: 'Facebook icon',
  },
];

interface Props {
  variant: 'dark' | 'light';
  iconMargin: number;
  iconSize: number;
}

const Social: FunctionComponent<Props> = ({ iconMargin, iconSize }) => (
  <>
    {socialLinks.map(({ url, iconPath, altText }) => (
      <a key={url} href={url} target="_blank" rel="noreferrer" style={{ margin: iconMargin }}>
        <Image
          src={iconPath}
          height={iconSize}
          width={iconSize}
          alt={altText}
          style={{ color: 'red' }}
        />
      </a>
    ))}
  </>
);

export default Social;
