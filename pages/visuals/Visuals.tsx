import { Head, Container, MainSection } from '../../components';
import { visuals } from '../../data';
import VisualsContainer, { VisualEmbed } from './Visuals.styled';

export default function Visuals(): JSX.Element {
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
                allowFullScreen
                height="432"
              />
            ))}
          </VisualsContainer>
        )}
      </MainSection>
    </Container>
  );
}
