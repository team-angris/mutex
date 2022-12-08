import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from './Components/Header'
import TitleHero from './Components/TitleHero'
import EventSection from './Components/EventsSection'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mutex 22 - Technical Events</title>
        <meta name="description" content="Mutex 22 - Technical Events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header />
      </header>

      <main className={styles.blackRedGradientBackground}>
        <TitleHero heading="Technical Events" />
        <EventSection type="tech" />
      </main>
    </div>
  )
}
