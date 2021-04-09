import { Head, StyledContainer, StyledMain } from '../../components';

interface Visual {
  name: string;
  url: string;
}

export default function Visuals(): JSX.Element {
  const visuals: Array<Visual> = [];
  // const sounds: Array<Sound> = [
  //   { name: 'abc1', url: 'https://open.spotify.com/embed/track/1GYxVWtdmNaRCjkYkXlTYB' },
  // ];
  // const sounds: Array<Sound> = [
  //   { name: 'abc1', url: 'https://open.spotify.com/embed/track/1GYxVWtdmNaRCjkYkXlTYB' },
  //   { name: 'abc2', url: 'https://open.spotify.com/embed/track/5wWikZnOM0fEeFxCF3AnuD' },
  //   { name: 'abc3', url: 'https://open.spotify.com/embed/track/1GYxVWtdmNaRCjkYkXlTYB' },
  //   { name: 'abc4', url: 'https://open.spotify.com/embed/track/5wWikZnOM0fEeFxCF3AnuD' },
  //   { name: 'abc5', url: 'https://open.spotify.com/embed/track/1GYxVWtdmNaRCjkYkXlTYB' },
  //   { name: 'abc6', url: 'https://open.spotify.com/embed/track/5wWikZnOM0fEeFxCF3AnuD' },
  //   { name: 'abc7', url: 'https://open.spotify.com/embed/track/1GYxVWtdmNaRCjkYkXlTYB' },
  //   { name: 'abc8', url: 'https://open.spotify.com/embed/track/5wWikZnOM0fEeFxCF3AnuD' },
  // ];

  return (
    <StyledContainer>
      <Head
        path="/visuals"
        pageTitle="Vermintide - Visuals"
        pageDescription="List of songs from Vermintide's debut EP 'Destroyers in nature': 1 - I vomit, 2 - Castrate rapist, 3 - Earth stays, 4 - Lead, 5 - Don't look in the mirror, 6 - Can't breathe, 7 - The Depression maze, 8 - The plague"
      />
      <StyledMain>
        {visuals.length === 0 ? (
          <div>
            <p>No visuals yet</p>
          </div>
        ) : (
          <div>
            {visuals.map((visual) => (
              <iframe
                key={visual.name}
                title={visual.name}
                src={visual.url}
                frameBorder="0"
                allow="encrypted-media"
                height="232"
              />
            ))}
          </div>
        )}
      </StyledMain>
    </StyledContainer>
  );
}
