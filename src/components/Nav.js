import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Spiral as Hamburger } from 'hamburger-react';

import style from '../components/Navigation.module.css';
import { motion } from 'framer-motion';
import '../App.css';

const Line = motion.div;

const Nav = () => {
  const { pathname } = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className={style.navbar}>
      {!isMobile && (
        <h1>
          <a className={style.logo} href='#'>
            Framed Euphoria
          </a>
        </h1>
      )}
      <ul
        className={isMobile ? 'nav-links-mobile' : 'nav-links'}
        onClick={() => setIsMobile(false)}
      >
        <li>
          <Link to='/' className={style.links}>
            Főoldal
          </Link>
          <Line
            className={style.line}
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/' ? '35%' : '0%' }}
          />
        </li>
        <li>
          <Link to='/projects' className={style.links}>
            Munkáim
          </Link>
          <Line
            className={style.line}
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/projects' ? '35%' : '0%' }}
          />
        </li>
        <li>
          <Link to='/contact' className={style.links}>
            Kontakt
          </Link>
          <Line
            className={style.line}
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/contact' ? '35%' : '0%' }}
          />
        </li>
      </ul>
      <button className={style.menuIcon} onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <Hamburger /> : <Hamburger />}
      </button>
    </nav>
  );
};

export default Nav;
