import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from './Components/Header'
import TitleHero from './Components/TitleHero'
import WorkShop from './Components/EventsSection/workshop'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mutex 22 - Workshop</title>
        <meta name="description" content="Mutex 22 - Workshop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.blackRedGradientBackground}>
        <TitleHero id="10003" />
        <WorkShop />
      </main>
    </div>
  )
}
