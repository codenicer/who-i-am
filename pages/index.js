import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Main from './main'
import Footer from './footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Code Nicer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      {/* <Footer /> */}
    </div>
  )
}
