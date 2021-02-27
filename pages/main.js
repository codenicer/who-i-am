import styles from '../styles/Main.module.scss'
import Loader from './loader'
import Navbar from '../componets/Navbar'
import Links from '../componets/Links'
import Qoute from '../componets/Qoute'
import MainPageCard from '../componets/MainPageCard'
import { doneLoadingState } from '../provider/DoneLoadingContext'
import { techList } from '../utils/tech-list'
import { about } from '../utils/about'

export default function Main() {
  const doneState = doneLoadingState()

  return (
    <main className={styles.main}>
      <Navbar done={doneState} />
      <div className={styles.content}>
        <MainPageCard done={doneState} />
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
      </div>
      <Links done={doneState} />
      <Qoute done={doneState} />
      <Loader />
    </main>
  )
}
