import styles from '../styles/Main.module.scss'
import Loader from './loader'
import Navbar from '../componets/Navbar'
import MobileNav from '../componets/MobileNav'
import Links from '../componets/Links'
import Qoute from '../componets/Qoute'
import MainPageCard from '../componets/MainPageCard'
import { doneLoadingState } from '../provider/DoneLoadingContext'
import { techList } from '../utils/tech-list'
import { about } from '../utils/about'
import ScrollAnimation from 'react-animate-on-scroll'

const test = ({ inViewport }) => {
  const [wew, setwew] = useState(false)
  useEffect(() => {
    console.log('IN VIEW PORT', inViewport)
    inViewport && setwew(true)
    console.log(wew)
  }, [inViewport])

  return (
    <ScrollAnimation animateIn="ani-about" className={`${wew ? '' : 'hide2'}`}>
      <div className={styles.about_card}>
        <div className={styles.about_info}>
          <div className={styles.about_container}>
            <h1 className={styles.about_title}>About</h1>
            <div className={styles.vertical_line}></div>
          </div>
          <text className={styles.about_subject}>{about.nameTitle}</text>
          <text className={styles.about_subject}>{about.firstP}</text>
          <p className={styles.about_subject}>{about.secondP}</p>
          <p className={styles.about_subject}>{about.techAbout}</p>
          <ul className={styles.tech_list}>
            {techList.map((tech, i) => {
              return <li key={i}>{tech}</li>
            })}
          </ul>
        </div>
        <div className={styles.img_cont}>
          <img src="/me.jpg" />
        </div>
      </div>
    </ScrollAnimation>
  )
}

/* <Navbar done={doneState} /> */

import handleViewport from 'react-in-viewport'
import { useEffect, useState } from 'react'
const ViewportBlock = handleViewport(test)

export default function Main() {
  const doneState = doneLoadingState()

  return (
    <main className={styles.main}>
      <MobileNav done={doneState} />
      <div className={styles.content}>
        <MainPageCard done={doneState} />
        <ViewportBlock onEnterViewport={() => console.log('ONVIEW PORT!!!')} />
      </div>
      <Links done={doneState} />
      <Qoute done={doneState} />
      <Loader />
    </main>
  )
}
