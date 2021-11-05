import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blefonix RolePlay</title>
        <meta name="description" content="Blefonix RolePlay — open.mp samp ugmp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.head_title}>Blefonix RolePlay</h1>
        <h2 className={styles.head_title_2}>Breaking the Limits</h2>
        <p className={styles.description_title}>open.mp samp ugmp – partially open-source</p>
        <code className={styles.code_title}>to start playing, check the docs</code>

        <div className={styles.grid}>
          <a href="https://brpsa.vercel.app" className={styles.card}>
            <h2>Docs &rarr;</h2>
            <p>Find in-depth information about server features and how to play. Anyone can edit this docs. Welcome!</p>
          </a>

          <a href="https://rp.blefonix.com" className={styles.card}>
            <h2>Forum &rarr;</h2>
            <p>Find a friends to play with, talk heart-to-heart, and be among the first to hear about the latest news.</p>
          </a>

          <a href="https://github.com/brpsamp/brpsa-public" className={styles.card}>
            <h2>Source &rarr;</h2>
            <p>Help improve the server. There is an opportunity to make respect and money.</p>
          </a>

          <a href="https://discord.gg/bccRnBNDGu" className={styles.card}>
            <h2>Discord &rarr;</h2>
            <p>Communicate and read without borders. You're always welcome here.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.grid}>
          <a href="https://github.com/brpsamp/brpsa-web" target="_blank" className={styles.footer_ui}>Edit on GitHub</a>
          <p className={styles.footer_ui}>{new Date().getFullYear()} © Blefonix</p>
        </div>
      </footer>
    </div>
  );
}
