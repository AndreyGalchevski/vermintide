import { Head, Container, MainSection } from '../../components';
import { dayNames, monthNames } from '../../utils/date';
import EventsContainer, { EventCard, EventImage } from './Events.styled';

interface Event {
  name: string;
  venue: string;
  city: string;
  country: string;
  date: Date;
  fbEvent: string;
  image: string;
}

export default function Events(): JSX.Element {
  // const events: Array<Event> = [];

  const events: Array<Event> = [
    {
      name: 'Metal fest',
      venue: 'Ozen bar',
      city: 'Tel Aviv',
      country: 'Israel',
      date: new Date(),
      fbEvent: 'https://www.facebook.com/events/268710077533818/',
      image:
        'https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.6435-9/84385566_1855283544605678_483841406062821376_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=340051&_nc_ohc=xw1zUHJ_ARgAX_D5_bY&_nc_ht=scontent.fhfa1-1.fna&oh=4c5ee6da72264077e6d551fc9b702289&oe=6096AAE9t',
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

  return (
    <Container>
      <Head
        path="/events"
        pageTitle="Vermintide - Events"
        pageDescription="Past and future events and gigs by Vermintide"
      />
      <MainSection>
        {events.length === 0 ? (
          <div>
            <p>No events yet</p>
          </div>
        ) : (
          <EventsContainer>
            {events.map((event) => (
              <EventCard key={event.name}>
                <div style={{ padding: '0px 16px' }}>
                  <EventImage src={event.image} />
                  <h2>{event.name}</h2>
                  <time>
                    {dayNames[event.date.getDay()]}, {monthNames[event.date.getMonth()]}{' '}
                    {event.date.getDate()} • {event.date.getHours()}:{event.date.getMinutes()}
                  </time>
                  <p>
                    {event.city}, {event.country}
                  </p>
                  <p>{event.venue}</p>
                  {/* <p>FB event: {event.fbEvent}</p> */}
                  {/* <p>image: {event.images}</p> */}
                </div>
              </EventCard>
            ))}
          </EventsContainer>
        )}
      </MainSection>
    </Container>
  );
}
