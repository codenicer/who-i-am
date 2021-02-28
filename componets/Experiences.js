import ScrollAnimation from 'react-animate-on-scroll'
import styles from '../styles/Experience.module.scss'
import { useEffect, useState } from 'react'

export default function Experiences({ inViewport }) {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    inViewport && setHidden(true)
  }, [inViewport])

  return (
    <ScrollAnimation
      animateOnce
      animateIn="ani-viewport"
      className={`${hidden ? '' : 'hide2'}`}
    >
      <div className={styles.experience_card}>
        <div className={styles.experience_info}>
          <div className={'heading_container'}>
            <h1 className={'heading_title'}>Experiences</h1>
            <div className={'heading_vertical_line'}></div>
          </div>
          <div className={styles.experences}>
            <div className={styles.timeline}>
              <div className={styles.timeline_line}></div>
              <button className={styles.timeline_btn}>2019</button>

              <button className={styles.timeline_btn}>2021</button>
            </div>
            <div className={styles.timeline_info}>
              <div className={styles.timeline_heading}>
                <h4>Web Developer</h4>
                <h4>@ Flowerstore.ph</h4>
              </div>
              <p className={styles.timeline_date}>
                January 2019 - January 2020
              </p>
              <ul className={styles.timeline_work_list}>
                <li>
                  Worked with a team of four web developer to build a end to end
                  system for the company, and two ecommerce website at the same
                  time while maintaining the quality of the application for the
                  customer .
                </li>
                <li>
                  Collaborate on maintaining and organizing database for future
                  proof data storing.
                </li>
                <li>
                  Helped on renovating for automation little by little, a big
                  step up for the company.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  )
}
