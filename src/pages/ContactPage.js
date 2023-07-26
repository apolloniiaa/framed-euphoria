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
              <h4 className={style.offer}>Felbecsülhetetlen emlékek örökre</h4>
              <p className={style.subtitles}>
                Itt vagyok, hogy segítsek megőrizni és örök emlékké varázsolni
                az élet legszebb napjait. Legyen az esküvő, családi ünnepség
                vagy egy fontos mérföldkő, a célom, hogy örökre megőrizzem a
                boldogságot és szeretetet az emlékekben. Fotóimmal és
                tapasztalatommal gondoskodom arról, hogy minden pillanatot
                átélhessetek újra és újra, és felidézhessétek az érzelmeiteket
                akár évek múltán is.
              </p>

              <div>
                <p className={style.info}>
                  <span className={style.span}>Cím:</span> Budapest,Hungary
                </p>
                <p className={style.info}>
                  <span>Email:</span> baloghjanos1011@gmail.com
                </p>
                <p className={style.info}>
                  <span>Weboldal:</span> www.woodlandcapture.com
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
                  placeholder='Név'
                  value={name}
                  onChange={handleNameChange}
                  name='name'
                  style={{ width: '450px', height: '86px' }}
                />

                <input
                  type='text'
                  placeholder='Email cím'
                  value={email}
                  onChange={handleEmailChange}
                  name='email'
                  style={{ width: '450px', height: '86px' }}
                />
                <textarea
                  placeholder='Üzenet'
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
