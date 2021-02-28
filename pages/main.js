import styles from '../styles/Main.module.scss'
import Loader from './loader'
import Navbar from '../componets/Navbar'
import MobileNav from '../componets/MobileNav'
import Links from '../componets/Links'
import Qoute from '../componets/Qoute'
import MainPageCard from '../componets/MainPageCard'
import Experiences from '../componets/Experiences'
import handleViewport from 'react-in-viewport'
import About from '../componets/About'
import Projects from '../componets/Projects'
import { doneLoadingState } from '../provider/DoneLoadingContext'

const ViewportAbout = handleViewport(About)
const ViewportExperiences = handleViewport(Experiences)

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
        {/* <ViewportAbout /> */}
        <About />
        <Experiences />
        <Projects />
        {/* <ViewportExperiences /> */}
      </div>
      <Links done={doneState} />
      <Qoute done={doneState} />
    </main>
  )
}

/* <Navbar done={doneState} /> */
