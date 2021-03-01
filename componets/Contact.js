import styles from '../styles/Contact.module.scss'
import ScrollAnimation from 'react-animate-on-scroll'
import { generalSetting } from '../utils/general'

export default function Contact() {
  return (
    <ScrollAnimation animateOnce animateIn="ani-viewport">
      <div id="contact" className={styles.contact_card}>
        <div className={styles.contact_info}>
          <p className={styles.contact_sub_title}>Want to work Together?</p>
          <h1 className={styles.contat_title}>Get In Touch</h1>
          <p className={styles.contact_message}>
            I do enjoy freelancing, but I`m currently looking for any new
            opportunities, my inbox is always open. Whether you have an
            interesnt working with me or have a questions, Im happy to respond
            to you. God Speed!
          </p>
          <a href={generalSetting.emailTo} className={styles.contact_btn}>
            <button>Email Me</button>
          </a>
        </div>
      </div>
    </ScrollAnimation>
  )
}