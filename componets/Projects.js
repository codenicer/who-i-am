import styles from '../styles/Projects.module.scss'
import ScrollAnimation from 'react-animate-on-scroll'

export default function Projects({ done }) {
  return (
    <ScrollAnimation animateOnce animateIn="ani-viewport">
      <div className={styles.projects_cotainer}>
        <div className={styles.projects_info}>
          <div className={'heading_container'}>
            <h1 className={'heading_title'}>My works</h1>
            <div className={'heading_vertical_line'}></div>
          </div>
          <div className={styles.project_list}>
            <ul>
              <li>
                <div className={styles.project_card}>
                  <p className={styles.project_type}>Project Type</p>
                  <h5 className={styles.project_title}>Project Title</h5>
                  <p className={styles.project_decription}>
                    Project description project description project description
                    project description project description project description
                    project description project description project description
                    project description project description project description
                    project description project description project description
                  </p>
                  <ul className={styles.project_teh_list}>
                    <li>Tech List</li>
                    <li>Tech List</li>
                    <li>Tech List</li>
                    <li>Tech List</li>
                  </ul>

                  <ul className={styles.links}>
                    <li>Links</li>
                    <li>Links</li>
                    <li>Links</li>
                    <li>Links</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  )
}
