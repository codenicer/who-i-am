import { techList } from '../utils/tech-list'
import { about } from '../utils/about'
import ScrollAnimation from 'react-animate-on-scroll'
import styles from '../styles/About.module.scss'
import { useEffect, useState } from 'react'

export default function About({ inViewport }) {
  const [hidden, setHidden] = useState(false)

  return (
    <ScrollAnimation
      animateOnce
      animateIn="ani-viewport"
      className={`${hidden ? '' : 'hidden'}`}
    >
      <div className={styles.about_card}>
        <div className={styles.about_info}>
          <div className={'heading_container'}>
            <h1 className={'heading_title'}>About Me</h1>
            <div className={'heading_vertical_line'}></div>
          </div>
          <p className={styles.about_subject}>{about.nameTitle}</p>
          <p className={styles.about_subject}>{about.firstP}</p>
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
