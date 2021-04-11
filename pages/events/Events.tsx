import { Head, Container, MainSection } from '../../components';
import { events } from '../../data';
import { dayNames, monthNames } from '../../utils/date';
import EventsContainer, { EventCard, EventImage } from './Events.styled';

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
            {events.map((event) => (
              <EventCard key={event.name}>
                <EventImage src={event.image} />
                <div style={{ padding: '0px 16px' }}>
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
