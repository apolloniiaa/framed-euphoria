import style from './Contact.module.css';

import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <section id='contact' className={style.contactSection}>
      <motion.div
        animate={{ y: [50, 0], opacity: [0, 1] }}
        transition={{
          delay: 0.03,
          type: 'tween',
          duration: 0.8,
          delay: 1,
        }}
        className={style.sideTitle}
      >
        <h2>KONTAKT</h2>
      </motion.div>
      <div className={style.contact} />

      <motion.div
        animate={{ y: [50, 0], opacity: [0, 1] }}
        transition={{
          delay: 0.03,
          type: 'tween',
          duration: 0.8,
        }}
        className={style.contactContent}
      >
        <div className={style.title}>
          <h4 className={style.offer}>Kérj árajánlatot!!!</h4>
          <p>Stay in touch with me</p>
        </div>
        <div className={style.data}>
          <div className={style.description}>
            <p>
              If you have any questions simply use the following contact
              details.
            </p>
            <p>
              Business Owners to take their Online Presence to the next level.
              We are in the business of Bulk SMS, Digital Marketing.
            </p>
            <div>
              <p>
                <spam className={style.spam}>Address:</spam> Budapest,Hungary
              </p>
              <p>
                <spam>Email:</spam> baloghjanos@gmail.com
              </p>
              <p>
                <spam>Website:</spam> www.woodlandcapture.com
              </p>
            </div>
          </div>
          <div className={style.form}>
            <input type='text' placeholder='name' />
            <input type='email' placeholder='email' />
            <textarea placeholder='message' cols='42' rows='5'></textarea>
            <button>Küldés</button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactPage;
