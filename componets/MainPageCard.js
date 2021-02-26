import styles from '../styles/MainPageCard.module.scss'

export default function MainPageCard({ done }) {
  return (
    <div className={`${styles.main_card} ${done ? 'ani-card' : ''}`}>
      <p className={styles.main_card__sub_title}>Hi, my name is</p>
      <h1 className={styles.main_card__header}>Ruther Teñido</h1>
      <h2 className={styles.main_card__sub_header}>Im just a guy who code.</h2>
      <p className={styles.main_card__subject}>
        I am a full stack web developer based on Philippines. Building a web
        application is my specialties , from setting up till deployment.
        Additionaly adding implementaion of continues integration and
        development for the application.
      </p>
      <button className={styles.main_card__btn}> Get In Touch </button>
    </div>
  )
}
