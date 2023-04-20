interface Sound {
  name: string;
  streamingURL: string;
  artworkURL: string;
  purchaseURL: string;
}

const sounds: Array<Sound> = [
  {
    name: 'Ashamed Of My Species',
    streamingURL:
      'https://open.spotify.com/embed/album/3LGuV5M5zvP0tor8snYpiD?utm_source=generator',
    artworkURL:
      'https://res.cloudinary.com/dqvimfd8b/image/upload/v1682022299/vermintide/sounds/Ashamed-Of-My-Species.png',
    purchaseURL: 'https://vermintide.bandcamp.com/album/ashamed-of-my-species',
  },
  {
    name: 'Meaningless Convulsions',
    streamingURL:
      'https://open.spotify.com/embed/album/6Ay1zvYut0KnIHDIsOco3m?utm_source=generator',
    artworkURL:
      'https://res.cloudinary.com/dqvimfd8b/image/upload/v1682022299/vermintide/sounds/Meaningless-Convulsions.png',
    purchaseURL: 'https://vermintide.bandcamp.com/album/meaningless-convulsions',
  },
];

export default sounds;
