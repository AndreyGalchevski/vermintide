import { Head, Container, MainSection } from '../../components';
import VisualsContainer, { VisualEmbed } from './Visuals.styled';

interface Visual {
  name: string;
  url: string;
}

export default function Visuals(): JSX.Element {
  // const visuals: Array<Visual> = [];
  // const visuals: Array<Visual> = [
  //   { name: 'abc1', url: 'https://www.youtube.com/embed/NMkffkfl00U' },
  // ];
  const visuals: Array<Visual> = [
    { name: 'abc1', url: 'https://www.youtube.com/embed/NMkffkfl00U' },
    { name: 'abc2', url: 'https://www.youtube.com/embed/2AIzRgegl9o' },
    { name: 'abc3', url: 'https://www.youtube.com/embed/NMkffkfl00U' },
    { name: 'abc4', url: 'https://www.youtube.com/embed/2AIzRgegl9o' },
    { name: 'abc5', url: 'https://www.youtube.com/embed/NMkffkfl00U' },
    { name: 'abc6', url: 'https://www.youtube.com/embed/2AIzRgegl9o' },
    { name: 'abc7', url: 'https://www.youtube.com/embed/NMkffkfl00U' },
    { name: 'abc8', url: 'https://www.youtube.com/embed/2AIzRgegl9o' },
  ];

  return (
    <Container>
      <Head
        path="/visuals"
        pageTitle="Vermintide - Visuals"
        pageDescription="List of various videos released by Vermintide"
      />
      <MainSection>
        {visuals.length === 0 ? (
          <div>
            <p>No visuals yet</p>
          </div>
        ) : (
          <VisualsContainer>
            {visuals.map((visual) => (
              <VisualEmbed
                key={visual.name}
                title={visual.name}
                src={visual.url}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
                height="432"
              />
            ))}
          </VisualsContainer>
        )}
      </MainSection>
    </Container>
  );
}
