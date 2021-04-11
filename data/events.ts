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
    name: 'Metal fest',
    venue: 'Ozen bar',
    city: 'Tel Aviv',
    country: 'Israel',
    date: new Date(),
    fbEvent: 'https://www.facebook.com/events/268710077533818/',
    image:
      'https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.6435-9/84385566_1855283544605678_483841406062821376_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=340051&_nc_ohc=xw1zUHJ_ARgAX_D5_bY&_nc_ht=scontent.fhfa1-1.fna&oh=4c5ee6da72264077e6d551fc9b702289&oe=6096AAE9',
  },
  {
    name: 'Grind you to death',
    venue: 'Gagarin',
    city: 'Tel Aviv',
    country: 'Israel',
    date: new Date(),
    fbEvent: 'https://www.facebook.com/events/268710077533818/',
    image:
      'https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.6435-9/84385566_1855283544605678_483841406062821376_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=340051&_nc_ohc=xw1zUHJ_ARgAX_D5_bY&_nc_ht=scontent.fhfa1-1.fna&oh=4c5ee6da72264077e6d551fc9b702289&oe=6096AAE9',
  },
  {
    name: 'Metal fest 2',
    venue: 'Blaze bar',
    city: 'Jerusalem',
    country: 'Israel',
    date: new Date(),
    fbEvent: 'https://www.facebook.com/events/268710077533818/',
    image:
      'https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.6435-9/84385566_1855283544605678_483841406062821376_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=340051&_nc_ohc=xw1zUHJ_ARgAX_D5_bY&_nc_ht=scontent.fhfa1-1.fna&oh=4c5ee6da72264077e6d551fc9b702289&oe=6096AAE9',
  },
  {
    name: 'Balagan at the roof',
    venue: 'Keoss',
    city: 'Tel Aviv',
    country: 'Israel',
    date: new Date(),
    fbEvent: 'https://www.facebook.com/events/268710077533818/',
    image:
      'https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.6435-9/84385566_1855283544605678_483841406062821376_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=340051&_nc_ohc=xw1zUHJ_ARgAX_D5_bY&_nc_ht=scontent.fhfa1-1.fna&oh=4c5ee6da72264077e6d551fc9b702289&oe=6096AAE9',
  },
];

export default events;
