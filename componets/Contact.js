import styles from '../styles/Contact.module.scss'
import ScrollAnimation from 'react-animate-on-scroll'

export default function Contact() {
  return (
    <ScrollAnimation animateOnce animateIn="ani-viewport">
      <div className={styles.contact_card}>
        <div className={styles.contact_info}>
          <div className={'heading_container'}>
            <h1 className={'heading_title'}>Contact Me</h1>
            <div className={'heading_vertical_line'}></div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  )
}
