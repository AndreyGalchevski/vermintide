import { Head, Container, MainSection } from '../../components';
import { words } from '../../data';
import WordsContainer, { Content, WordCard } from './Words.styled';

export default function Words(): JSX.Element {
  return (
    <Container>
      <Head
        path="/words"
        pageTitle="Vermintide - Words"
        pageDescription="List of song lyrics from Vermintide's debut EP 'Meaningless convulsions': 1 - I vomit, 2 - Castrate rapist, 3 - Earth stays, 4 - Lead, 5 - Don't look in the mirror, 6 - Can't breathe, 7 - The depression maze, 8 - The Plague"
      />
      <MainSection>
        <WordsContainer>
          {words.map((word) => (
            <WordCard key={word.title}>
              <h2>{word.title}</h2>
              <Content>{word.content}</Content>
            </WordCard>
          ))}
        </WordsContainer>
      </MainSection>
    </Container>
  );
}
