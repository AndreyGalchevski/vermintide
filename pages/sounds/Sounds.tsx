import { Head, Container, MainSection } from '../../components';
import { sounds } from '../../data';
import SoundsContainer, { SoundEmbed } from './Sounds.styled';

export default function Sounds(): JSX.Element {
  return (
    <Container>
      <Head
        path="/sounds"
        pageTitle="Vermintide - Sounds"
        pageDescription="List of songs from Vermintide's debut EP 'Meaningless convulsions': 1 - I vomit, 2 - Castrate rapist, 3 - Earth stays, 4 - Lead, 5 - Don't look in the mirror, 6 - Can't breathe, 7 - The Depression maze, 8 - The plague"
      />
      <MainSection>
        {sounds.length === 0 ? (
          <div>
            <p>No sounds yet</p>
          </div>
        ) : (
          <SoundsContainer>
            {sounds.map((sound) => (
              <SoundEmbed
                key={sound.name}
                title={sound.name}
                src={sound.url}
                frameBorder="0"
                allow="encrypted-media"
                height="232"
              />
            ))}
          </SoundsContainer>
        )}
      </MainSection>
    </Container>
  );
}
