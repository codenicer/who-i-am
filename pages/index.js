import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Main from './main'
import Footer from '../componets/Footer'
import Loader from './loader'
import { doneLoadingState } from '../provider/DoneLoadingContext'

export default function Home() {
  const doneState = doneLoadingState()
  return !doneState ? (
    <Loader />
  ) : (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Code Nicer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <Footer />
    </div>
  )
}
