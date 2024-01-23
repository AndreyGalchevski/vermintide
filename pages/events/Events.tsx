import Link from 'next/link';
import { CSSProperties, styled } from 'styled-components';

import { Head, Container, MainSection, Card, MasonryBrick, MasonryLayout } from '../../components';
import { events } from '../../data';

const formatEventDate = (date: Date) =>
  `${date.toDateString()} • ${date.toTimeString().split(' ')[0].split(':').slice(0, 2).join(':')}`;

export default function Events() {
  return (
    <Container>
      <Head
        path="/events"
        pageTitle="Vermintide - Official Tour Dates"
        pageDescription="Official past and future events and gigs by Vermintide"
      />
      <MainSection style={{ paddingTop: '7em' }}>
        <MasonryLayout>
          {events.map(({ name, image, date, city, country, venue, fbEvent }) => (
            <MasonryBrick key={name}>
              <EventCard>
                <EventImage src={image} alt={`"${name}" event`} />
                <h2>{name}</h2>
                <time>{formatEventDate(date)}</time>
                <p>
                  {city}, {country}
                </p>
                <p>{venue}</p>
                {fbEvent && (
                  <Link href={fbEvent} target="_blank">
                    <b>Facebook Event</b>
                  </Link>
                )}
              </EventCard>
            </MasonryBrick>
          ))}
        </MasonryLayout>
      </MainSection>
    </Container>
  );
}

const EventCard = styled(Card)`
  padding: 0px 0px 16px 0px;
`;

const EventImage = styled.img(({ theme }) => ({
  display: 'block' as CSSProperties['display'],
  borderTopLeftRadius: theme.borderRadius,
  borderTopRightRadius: theme.borderRadius,
  width: '100%',
}));
