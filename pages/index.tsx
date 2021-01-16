import { useRouter } from 'next/router';

import Head from '../components/Head';
import Card from '../components/Card';
import StyledContainer from '../components/StyledContainer';
import StyledMain from '../components/StyledMain/StyledMain';
import Grid from '../components/Grid';

export default function Home(): JSX.Element {
  const router = useRouter();

  const navigate = (to: string) => {
    router.push(to);
  };

  return (
    <StyledContainer>
      <Head pageTitle="Vermintide - Home" />
      <StyledMain>
        <Grid>
          <Card
            title="Sounds"
            subtitle="Rerum quibusdam tenetur saepe itaque! Aliquam corporis eaofficia"
            onClick={() => navigate('/sounds')}
          />
          <Card
            title="Words"
            subtitle="Ad exercitationem blanditiis deleniti accusamus harum laborum"
            onClick={() => navigate('/words')}
          />
          <Card
            title="Meanings"
            subtitle="Ad exercitationem blanditiis deleniti accusamus harum laborum"
            onClick={() => navigate('/meanings')}
          />
          <Card
            title="Events"
            subtitle="Ad exercitationem blanditiis deleniti accusamus harum laborum"
            onClick={() => navigate('/events')}
          />
        </Grid>
      </StyledMain>
    </StyledContainer>
  );
}
