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
