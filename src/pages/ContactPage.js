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

export default ContactPage;
