import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vermintide - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Vermintide</h1>

        <div className={styles.grid}>
          <Link href="/about">
            <section className={styles.card}>
              <h3>About</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
            </section>
          </Link>

          <Link href="/songs">
            <section className={styles.card}>
              <h3>Songs</h3>
              <p>
                Rerum quibusdam tenetur saepe itaque! Aliquam corporis ea
                officia
              </p>
            </section>
          </Link>

          <Link href="/lyrics">
            <section className={styles.card}>
              <h3>Lyrics</h3>
              <p>
                Ad exercitationem blanditiis deleniti accusamus harum laborum
              </p>
            </section>
          </Link>

          <Link href="/events">
            <section className={styles.card}>
              <h3>Events</h3>
              <p>
                Ad exercitationem blanditiis deleniti accusamus harum laborum
              </p>
            </section>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Link to Spotify</p>
      </footer>
    </div>
  );
}
