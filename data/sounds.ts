interface Sound {
  name: string;
  streamingURL: string;
  artworkURL: string;
  purchaseURL: string;
}

const sounds: Array<Sound> = [
  {
    name: 'Meaningless Convulsions',
    streamingURL:
      'https://open.spotify.com/embed/album/6Ay1zvYut0KnIHDIsOco3m?utm_source=generator&theme=0',
    artworkURL:
      'https://res.cloudinary.com/dqvimfd8b/image/upload/v1659103477/vermintide/sounds/Meaningless_Convulsions.jpg',
    purchaseURL: 'https://vermintide.bandcamp.com/album/meaningless-convulsions',
  },
];

export default sounds;
