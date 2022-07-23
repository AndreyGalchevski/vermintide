import { Head, Container, MainSection } from '../../components';
import { events } from '../../data';
import EventsContainer, { EventCard, EventImage } from './Events.styled';

const formatEventDate = (date: Date) =>
  `${date.toDateString()} • ${date.toTimeString().split(' ')[0].split(':').slice(0, 2).join(':')}`;

export default function Events(): JSX.Element {
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
            {events.map(({ name, image, date, city, country, venue, fbEvent }) => (
              <EventCard key={name}>
                <EventImage src={image} />
                <div style={{ padding: '16px 16px' }}>
                  <h2>{name}</h2>
                  <time>{formatEventDate(date)}</time>
                  <p>
                    {city}, {country}
                  </p>
                  <p>{venue}</p>
                  {fbEvent && (
                    <a href={fbEvent} target="_blank" rel="noreferrer">
                      <b>Event page</b>
                    </a>
                  )}
                </div>
              </EventCard>
            ))}
          </EventsContainer>
        )}
      </MainSection>
    </Container>
  );
}
