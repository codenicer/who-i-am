import styles from '../styles/Qoute.module.scss'

export default function Qoute({ done }) {
  return (
    <div className={`${styles.qoute_container} ${done ? 'ani-quoute' : ''}`}>
      <p>Stay hungry stay foolish</p>
      <div className={styles.qoute_horizontal_line}></div>
    </div>
  )
}
