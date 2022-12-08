import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Events from './Components/Events'
import Sponsors from './Components/Sponsors'
import Contact from './Components/Contact'

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
