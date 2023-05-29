import { useState } from 'react';
import SendButton from '../components/SendButton';
import { motion } from 'framer-motion';
import style from './Contact.module.css';
import img21 from '../assets/img/img21.jpg';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <img className={style.headerImg} src={img21} alt='wedding photo' />
      <section name='contact' id='contact' className={style.contactSection}>
        <div className={style.sideTitle}>
          <motion.h2>KONTAKT</motion.h2>
        </div>
        <div className={style.contact}></div>

        <div className={style.contactContent}>
          <motion.div
            animate={{ x: [100, 0], opacity: [0, 1] }}
            transition={{
              duration: 1.5,
              delay: 0.7,
            }}
            className={style.data}
          >
            <div className={style.description}>
              <h4 className={style.offer}>PRECIOUS MEMORIES FOREVER</h4>
              <p className={style.subtitles}>
                {' '}
                I am here to help you to remember the best days. Business Owners
                to take their Online Presence to the next level.Online Presence
                to the next level.
              </p>

              <div>
                <p className={style.info}>
                  <span className={style.span}>Address:</span> Budapest,Hungary
                </p>
                <p className={style.info}>
                  <span>Email:</span> baloghjanos@gmail.com
                </p>
                <p className={style.info}>
                  <span>Website:</span> www.woodlandcapture.com
                </p>
              </div>
            </div>
            <div>
              <form
                action='https://getform.io/f/ddc105f4-9955-4138-bb79-30d8e826dcf1'
                method='POST'
                className={style.form}
              >
                <input
                  type='text'
                  placeholder='Írd be a neved'
                  value={name}
                  onChange={handleNameChange}
                  name='name'
                  style={{ width: '450px', height: '86px' }}
                />

                <input
                  type='text'
                  placeholder='Írd be az email címed'
                  value={email}
                  onChange={handleEmailChange}
                  name='email'
                  style={{ width: '450px', height: '86px' }}
                />
                <textarea
                  placeholder='Hagyj üzenetet'
                  cols='40'
                  rows='10'
                  value={message}
                  onChange={handleMessageChange}
                  name='message'
                  type='text'
                  className={style.message}
                  style={{ width: '450px', height: '86px', resize: 'both' }}
                ></textarea>
                <SendButton type='submit'>Küldés</SendButton>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
