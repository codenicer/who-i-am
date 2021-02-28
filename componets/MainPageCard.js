import styles from '../styles/MainPageCard.module.scss'
import { generalSetting } from '../utils/general'

export default function MainPageCard({ done }) {
  return (
    <div className={`${styles.main_card} ${done ? 'ani-card' : ''}`}>
      <div className={styles.main_card_content}>
        <p className={styles.main_card__sub_title}>Hi, my name is</p>
        <h1 className={styles.main_card__header}>Ruther Teñido</h1>
        <h2 className={styles.main_card__sub_header}>
          Im just a guy who codes.
        </h2>
        <p className={styles.main_card__subject}>
          I am a full stack web developer based on Philippines. Building a web
          application is my specialties, from setting up till deployment.
          Additionaly adding implementaion of continues integration and
          development for the application.
        </p>
        <a href={generalSetting.emailTo}>
          <button className={styles.main_card__btn}> Get In Touch </button>
        </a>
      </div>
    </div>
  )
}
