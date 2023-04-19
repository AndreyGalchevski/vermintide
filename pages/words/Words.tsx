import { useState } from 'react';
import Select, { SingleValue, Options, StylesConfig } from 'react-select';

import { Head, Container, MainSection } from '../../components';
import { words } from '../../data';
import { AlbumName } from '../../data/words';
import theme from '../../utils/theme';
import WordsContainer, { Content, WordCard } from './Words.styled';

export interface AlbumOption {
  value: AlbumName;
  label: AlbumName;
}

const options: Options<AlbumOption> = [
  { value: 'Meaningless Convulsions', label: 'Meaningless Convulsions' },
];

const selectStyles: StylesConfig<AlbumOption> = {
  control: (base) => ({
    ...base,
    ':hover': { borderColor: theme.hover },
    ':focus': { borderColor: theme.hover },
    ':focus-visible': { borderColor: theme.hover },
    ':focus-within': {
      borderColor: theme.hover,
      boxShadow: `0 0 0 1px ${theme.hover}`,
    },
  }),
  option: (base) => ({
    ...base,
    backgroundColor: theme.hover,
  }),
};

const Words = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<SingleValue<AlbumOption>>(options[0]);

  const handleAlbumChange = (option: AlbumOption | null) => {
    setSelectedAlbum(option);
  };

  return (
    <Container>
      <Head
        path="/words"
        pageTitle="Vermintide - Official Lyrics"
        pageDescription="Official lyrics by Vermintide"
      />
      <MainSection>
        <div style={{ margin: '30px 15px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20,
            }}
          >
            <Select<AlbumOption>
              value={selectedAlbum}
              options={options}
              onChange={handleAlbumChange}
              styles={selectStyles}
              instanceId="lyrics-select"
            />
          </div>
          <WordsContainer>
            {words
              .filter((it) => it.album === selectedAlbum?.value)
              .map(({ title, content }) => (
                <WordCard key={title}>
                  <h2>{title}</h2>
                  <Content>{content}</Content>
                </WordCard>
              ))}
          </WordsContainer>
        </div>
      </MainSection>
    </Container>
  );
};

export default Words;
