import { useState } from 'react';
import SendButton from '../components/SendButton';
import { motion } from 'framer-motion';
import style from './Contact.module.css';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ellenőrizze a form érvényességét itt
    const isValid = name !== '' && email !== '' && message !== '';
    setIsFormValid(isValid);
  };

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
      <div className={style.contact}></div>

      <motion.div
        animate={{ y: [50, 0], opacity: [0, 1] }}
        transition={{
          delay: 0.03,
          type: 'tween',
          duration: 0.8,
        }}
        className={style.contactContent}
      >
        <div className={style.data}>
          <div className={style.description}>
            <h4 className={style.offer}>Kérj árajánlatot</h4>
            <p className={style.subtitles}>[Stay in touch with me]</p>
            <p className={style.subtitles}>
              If you have any questions simply use the following contact
              details.
            </p>
            <p className={style.subtitles}>
              Business Owners to take their Online Presence to the next level.
              We are in the business of Bulk SMS, Digital Marketing.
            </p>
            <div>
              <p>
                <span className={style.span}>Address:</span> Budapest,Hungary
              </p>
              <p>
                <span>Email:</span> baloghjanos@gmail.com
              </p>
              <p>
                <span>Website:</span> www.woodlandcapture.com
              </p>
            </div>
          </div>
          <div>
            <form className={style.form} onSubmit={handleSubmit}>
              <input
                type='text'
                placeholder='name'
                value={name}
                onChange={handleNameChange}
              />
              <input
                type='email'
                placeholder='email'
                value={email}
                onChange={handleEmailChange}
              />
              <textarea
                placeholder='message'
                cols='42'
                rows='20'
                value={message}
                onChange={handleMessageChange}
              ></textarea>
              <SendButton isFormValid={isFormValid}>Küldés</SendButton>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactPage;
