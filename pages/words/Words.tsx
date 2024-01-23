import { useState } from 'react';
import Select, { SingleValue, Options, StylesConfig } from 'react-select';
import { useRouter } from 'next/router';
import { styled } from 'styled-components';

import { Head, Container, MainSection, Card, MasonryBrick, MasonryLayout } from '../../components';
import { albums } from '../../data';
import { AlbumName } from '../../data/albums';
import theme from '../../utils/theme';

export interface AlbumOption {
  value: AlbumName;
  label: AlbumName;
}

const options: Options<AlbumOption> = [
  { value: 'Virus Pedigree', label: 'Virus Pedigree' },
  { value: 'Ashamed Of My Species', label: 'Ashamed Of My Species' },
  { value: 'Meaningless Convulsions', label: 'Meaningless Convulsions' },
];

export default function Words() {
  const router = useRouter();

  const [selectedAlbum, setSelectedAlbum] = useState<SingleValue<AlbumOption>>(
    options.find((it) => it.value === router.query.album) || options[0],
  );

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
          <MasonryLayout>
            {albums
              .find((it) => it.name === selectedAlbum?.value)
              ?.lyrics.map(({ title, content }) => (
                <MasonryBrick key={title}>
                  <Card>
                    <h2>{title}</h2>
                    <Content>{content}</Content>
                  </Card>
                </MasonryBrick>
              ))}
          </MasonryLayout>
        </div>
      </MainSection>
    </Container>
  );
}

const Content = styled.pre`
  margin: 0;
  font-family: 'Helvetica', sans-serif;
`;

const selectStyles: StylesConfig<AlbumOption> = {
  control: (base) => ({
    ...base,
    ':hover': { borderColor: theme.accent },
    ':focus': { borderColor: theme.accent },
    ':focus-visible': { borderColor: theme.accent },
    ':focus-within': {
      borderColor: theme.accent,
      boxShadow: `0 0 0 1px ${theme.accent}`,
    },
  }),
  option: (base) => ({
    ...base,
    backgroundColor: theme.accent,
  }),
};
