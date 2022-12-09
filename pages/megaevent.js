import Head from 'next/head'
import styles from '../styles/Home.module.css'


import MegaEvent from './Components/MegaEvent'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mutex 22 - Mega Event</title>
        <meta name="description" content="Mutex 22 - Mega Event" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MegaEvent />
      </main>
    </div>
  )
}
