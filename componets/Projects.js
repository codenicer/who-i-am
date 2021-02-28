import styles from '../styles/Projects.module.scss'

export default function Projects({ done }) {
  return (
    <div className={styles.projects_cotainer}>
      <div className={styles.projects_header}>
        <div className={'heading_container'}>
          <h1 className={'heading_title'}>About Me</h1>
          <div className={'heading_vertical_line'}></div>
        </div>
      </div>
    </div>
  )
}
