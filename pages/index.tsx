import { useRouter } from 'next/router';

import styles from './index.module.css';
import Head from '../components/Head';
import Card from '../components/Card';

export default function Home(): JSX.Element {
  const router = useRouter();

  const navigate = (to: string) => {
    router.push(to);
  };

  return (
    <div className={styles.container}>
      <Head pageTitle="Vermintide - Home" />
      <main className={styles.main}>
        <h1 className={styles.title}>Vermintide</h1>
        <div className={styles.grid}>
          <Card
            title="About"
            subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit"
            onClick={() => navigate('/about')}
          />
          <Card
            title="Songs"
            subtitle="Rerum quibusdam tenetur saepe itaque! Aliquam corporis eaofficia"
            onClick={() => navigate('/songs')}
          />
          <Card
            title="Lyrics"
            subtitle="Ad exercitationem blanditiis deleniti accusamus harum laborum"
            onClick={() => navigate('/lyrics')}
          />
          <Card
            title="Events"
            subtitle="Ad exercitationem blanditiis deleniti accusamus harum laborum"
            onClick={() => navigate('/events')}
          />
        </div>
      </main>
    </div>
  );
}
