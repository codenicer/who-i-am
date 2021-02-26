import styles from '../styles/Main.module.scss'
import Loader from './loader'
import Navbar from '../componets/Navbar'
import Links from '../componets/Links'
import Qoute from '../componets/Qoute'
import MainPageCard from '../componets/MainPageCard'
import { doneLoadingState } from '../provider/DoneLoadingContext'
import { techList } from '../utils/tech-list'

export default function Main() {
  const doneState = doneLoadingState()

  return (
    <main className={styles.main}>
      <Navbar done={doneState} />
      <div className={styles.content}>
        <MainPageCard done={doneState} />
        <div className={styles.about_card}>
          <div className={styles.about_container}>
            <h1 className={styles.about_title}>About</h1>
            <div className={styles.vertical_line}></div>
          </div>
          <p className={styles.about_subject}>
            In pharetra, massa porta pharetra posuere, tellus diam scelerisque
            purus, ut elementum sem diam in nisl. Proin at quam volutpat,
            bibendum dolor vitae, iaculis quam. Integer quis gravida odio, vitae
            aliquam tellus.{' '}
          </p>
          <p className={styles.about_subject}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dui
            odio, tincidunt et erat eget, ultricies tempor turpis. Vivamus eget
            pellentesque nunc, sed maximus orci. Etiam gravida vitae justo et
            congue. Suspendisse sit amet vestibulum leo. Nunc facilisis augue
            non justo congue, sed viverra tortor laoreet.{' '}
          </p>
          <p className={styles.about_subject}>
            Here`s the technologies Ive been enhancing through my works:
          </p>
          <ul className={styles.tech_list}>
            {techList.map((tech, i) => {
              return <li key={i}>{tech}</li>
            })}
          </ul>
        </div>
      </div>
      <Links done={doneState} />
      <Qoute done={doneState} />
      <Loader />
    </main>
  )
}
