import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaLinkedin,
} from 'react-icons/fa';
import style from './Footer.module.css';
const Footer = () => {
  return (
    <div>
      <div className={style.footerIcons}>
        <a
          href='https://www.instagram.com/balogh.janos.photoblog/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaInstagram size={30} />
        </a>
        <a
          href='https://www.facebook.com/vonburied.john'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaFacebook size={30} />
        </a>
        <a
          href='mailto:balogh.janos1011@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaEnvelope size={30} />
        </a>

        <a
          href='https://www.linkedin.com/in/janos-balogh-83a21521b/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin size={30} />
        </a>
      </div>

      <div className={style.footer}>
        <div className={style.footerRow}>
          <div className={style.footerCopyright}>
            Crafted with passion by Divine Inborn Studio. <br /> &copy; 2023
            Woodland Capture.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
