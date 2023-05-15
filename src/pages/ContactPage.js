<<<<<<< HEAD
import style from './Contact.module.css';
const ContactPage = () => {
  return (
    <section id='contact' className={style.contactSection}>
      <div className={style.sideTitle}>
        <h2>CONTACT</h2>
      </div>
      <div className={style.contact} />
      <div
        className={style.contactContent}
        transition={{
          delay: 0.03,
          type: 'tween',
          duration: 0.8,
        }}
      >
        <div className={style.title}>
          <h4>Kérj árajánlatot!!!</h4>
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
                <spam>Website:</spam> www.framedeuphoria.com
              </p>
            </div>
          </div>
          <div className={style.form}>
            <input type='text' placeholder='name' />
            <input type='email' placeholder='email' />
            <textarea placeholder='message'></textarea>
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </section>
  );
};
=======
import React, { useState } from 'react';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};

    // Validate name
    if (!name.trim()) {
      newErrors.name = 'Name is required';
      formIsValid = false;
    }

    // Validate email
    if (!email.trim()) {
      newErrors.email = 'Email is required';
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      formIsValid = false;
    }

    // Validate message
    if (!message.trim()) {
      newErrors.message = 'Message is required';
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, do something with the data (e.g., send it to a server)
      console.log('Form submitted:', { name, email, message });

      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span className='error'>{errors.name}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className='error'>{errors.email}</span>}
      </div>

      <div>
        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {errors.message && <span className='error'>{errors.message}</span>}
      </div>

      <button type='submit'>Submit</button>
    </form>
  );
}
>>>>>>> 1c3c6bd9b5086dc98f92af2ac15fc67d4726ba3f

export default ContactPage;
