import styles from '../styles/Main.module.scss'
import Loader from './loader'
import Navbar from '../componets/Navbar'
import MobileNav from '../componets/MobileNav'
import Links from '../componets/Links'
import Qoute from '../componets/Qoute'
import MainPageCard from '../componets/MainPageCard'
import Experiences from '../componets/Experiences'
import Contact from '../componets/Contact'
import About from '../componets/About'
import Projects from '../componets/Projects'
import { doneLoadingState } from '../provider/DoneLoadingContext'

export default function Main() {
  const doneState = doneLoadingState()

  return !doneState ? (
    <Loader />
  ) : (
    <main className={styles.main}>
      <MobileNav done={doneState} />
      <div className={styles.content}>
        <MainPageCard done={doneState} />

        <About />
        <Experiences />
        <Projects />
        <Contact />
      </div>
      <Links done={doneState} />
      <Qoute done={doneState} />
    </main>
  )
}

/* <Navbar done={doneState} /> */
