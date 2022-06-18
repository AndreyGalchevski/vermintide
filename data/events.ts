interface Event {
  name: string;
  venue: string;
  city: string;
  country: string;
  date: Date;
  fbEvent: string;
  image: string;
}

const events: Array<Event> = [
  {
    name: 'Maalim Shedim 3',
    venue: 'Jan Jack',
    city: 'Tel Aviv',
    country: 'Israel',
    date: new Date(2022, 6, 9, 20, 0),
    fbEvent: 'https://www.facebook.com/events/291156976474765',
    image:
      'https://res.cloudinary.com/dqvimfd8b/image/upload/v1655548752/vermintide/events/45C38253-CAAD-4A0A-8988-12F146671F5E.jpg',
  },
  {
    name: 'Bonegrinder',
    venue: 'Jan Jack',
    city: 'Tel Aviv',
    country: 'Israel',
    date: new Date(2022, 5, 14, 21, 0),
    fbEvent: 'https://www.facebook.com/events/5111588252240950',
    image:
      'https://res.cloudinary.com/dqvimfd8b/image/upload/v1655549224/vermintide/events/5AD0D111-459D-4F9F-A0BE-3807C6D0B973.jpg',
  },
  {
    name: 'Grind Your Mind',
    venue: 'Jan Jack',
    city: 'Tel Aviv',
    country: 'Israel',
    date: new Date(2022, 1, 3, 21, 0),
    fbEvent: 'https://www.facebook.com/events/441334920975550',
    image:
      'https://res.cloudinary.com/dqvimfd8b/image/upload/v1642267563/vermintide/events/jan-jack-03022022.jpg',
  },
];

export default events;
