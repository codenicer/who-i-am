import { techList } from '../utils/tech-list'
import { about } from '../utils/about'
import ScrollAnimation from 'react-animate-on-scroll'
import styles from '../styles/About.module.scss'
import { useEffect, useState } from 'react'

export default function About({ inViewport }) {
  const [hidden, setHidden] = useState(false)
  useEffect(() => {
    inViewport && setHidden(true)
  }, [inViewport])

  return (
    <ScrollAnimation
      animateIn="ani-about"
      className={`${hidden ? '' : 'hide2'}`}
    >
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
