import styles from '../styles/Main.module.scss'
import Loader from './loader'
import Navbar from '../componets/Navbar'
import MobileNav from '../componets/MobileNav'
import Links from '../componets/Links'
import Qoute from '../componets/Qoute'
import MainPageCard from '../componets/MainPageCard'
import About from '../componets/About'
import { doneLoadingState } from '../provider/DoneLoadingContext'

import handleViewport from 'react-in-viewport'
const ViewportBlock = handleViewport(About)

export default function Main() {
  const doneState = doneLoadingState()

  console.log(doneState)

  return !doneState ? (
    <Loader />
  ) : (
    <main className={styles.main}>
      <MobileNav done={doneState} />
      <div className={styles.content}>
        <MainPageCard done={doneState} />
        <ViewportBlock />
      </div>
      <Links done={doneState} />
      <Qoute done={doneState} />
    </main>
  )
}

/* <Navbar done={doneState} /> */
