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
      <div className={style.footer}>
        <div className={style.footerRow}>
          <div className={style.footerContentCenter}></div>
          <div className={style.footerContentRight}>
            {/* <div className={style.footerIcons}>
              <a
                href='https://www.instagram.com/your-instagram-account'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaInstagram size={30} />
              </a>
              <a
                href='https://www.facebook.com/your-facebook-account'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaFacebook size={30} />
              </a> */}
            {/* <a
                href='https://www.facebook.com/your-facebook-account'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaEnvelope size={30} />
              </a>
              <a
                href='https://www.linkedin.com/your-linkedin-account'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLinkedin size={30} />
              </a> */}
            {/* </div> */}
          </div>
        </div>
        <div className={style.footerRow}>
          <div className={style.footerCopyright}>
            &copy; 2023 Woodland Capture. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
