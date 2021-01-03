import Head from "next/head";

import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vermintide - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex velit
        debitis vero sed reprehenderit obcaecati ipsa placeat, veritatis sint
        explicabo nemo blanditiis, voluptatum rem, dolores fugit sit? Accusamus,
        sit commodi. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Incidunt voluptatum mollitia vero eligendi ad, velit qui unde at debitis
        harum accusantium? Officiis dicta reiciendis deserunt maiores atque
        animi provident amet.
      </main>

      <footer className={styles.footer}>
        <p>Link to Spotify</p>
      </footer>
    </div>
  );
}
