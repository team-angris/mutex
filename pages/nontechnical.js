import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from './Components/Header'
import TitleHero from './Components/TitleHero'
import EventSection from './Components/EventsSection'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mutex 22 - Non Technical Events</title>
        <meta name="description" content="Mutex 22 - Technical Events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.blackRedGradientBackground}>
        <TitleHero heading="Non-Technical Events" />
        <EventSection type="nontech" />
      </main>
    </div>
  )
}
