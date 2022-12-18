import Head from "next/head";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Сімейні ресурси</title>
        <meta name="description" content="Сімейні ресурси" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/germon_logo.png" />
      </Head>
      <main className={styles.main}>
        <Header />
        <Tabs />
      </main>
    </>
  );
}
