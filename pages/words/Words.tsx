import styles from './Words.module.css';
import Head from '../../components/Head';

export default function Words(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head pageTitle="Vermintide - Words" />
      <main className={styles.main}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex velit debitis vero sed
        reprehenderit obcaecati ipsa placeat, veritatis sint explicabo nemo blanditiis, voluptatum
        rem, dolores fugit sit? Accusamus, sit commodi. Loarem ipsum, dolor sit amet consectetur
        adipisicing elit. Incidunt voluptatum mollitia vero eligendi ad, velit qui unde at debitis
        harum accusantium? Officiis dicta reiciendis deserunt maiores atque animi provident amet.
      </main>
    </div>
  );
}
