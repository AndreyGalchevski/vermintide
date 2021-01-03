import Head from "next/head";

import styles from "../styles/Home.module.css";

export default function Songs() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vermintide - Songs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        eligendi maiores iste corporis? Quo voluptates deleniti laborum totam
        nostrum nesciunt. Facilis veniam harum eius, atque cumque optio sapiente
        deleniti, dolor vero beatae reiciendis expedita quam cum quaerat
        repellat? Tempore assumenda, illum eveniet quo quibusdam laborum ipsa
        totam aspernatur vitae molestias, tempora ab iste fuga aliquam quaerat
      </main>

      <footer className={styles.footer}>
        <p>Link to Spotify</p>
      </footer>
    </div>
  );
}
