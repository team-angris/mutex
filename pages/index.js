import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from './Header'
import Hero from './Hero'
import About from './About'
import Events from './Events'
import Sponsors from './Sponsors'
import Contact from './Contact'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mutex 22</title>
        <meta name="description" content="Mutex 22" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header />
      </header>

      <main>
        <Hero />
        <About />
        <Events />
        <Sponsors />
        <Contact />
      </main>
    </div>
  )
}
