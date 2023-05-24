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

  const isHomePage = pathname === '/';

  const handleClick = () => {
    setIsMobile(false);
  };

  return (
    <nav className={style.navbar}>
      <h1>
        <Link
          to='/'
          className={`${style.logo} ${isHomePage ? style.homeLogo : ''}`}
          style={{ color: isHomePage ? 'white' : '#1a451c' }}
        >
          Woodland Captures
        </Link>
      </h1>
      <ul
        className={isMobile ? 'nav-links-mobile' : 'nav-links'}
        onClick={handleClick}
      >
        <li>
          <Link
            to='/'
            className={`${style.links} ${isHomePage ? '' : style.greenColor}`}
            style={{ color: isHomePage ? 'white' : '#1a451c' }}
          >
            Főoldal
          </Link>
          <Line
            className={style.line}
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/' ? '70%' : '0%' }}
          />
        </li>
        <li>
          <Link
            to='/about'
            className={`${style.links} ${isHomePage ? '' : style.greenColor}`}
            style={{ color: isHomePage ? 'white' : '#1a451c' }}
          >
            Rólam
          </Link>
          <Line
            className={style.line}
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/about' ? '70%' : '0%' }}
          />
        </li>

        <li>
          <Link
            to='/projects'
            className={`${style.links} ${isHomePage ? '' : style.greenColor}`}
            style={{ color: isHomePage ? 'white' : '#1a451c' }}
          >
            Munkáim
          </Link>
          <Line
            className={style.line}
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/projects' ? '70%' : '0%' }}
          />
        </li>

        <li>
          <Link
            to='/questions'
            className={`${style.links} ${isHomePage ? '' : style.greenColor}`}
            style={{ color: isHomePage ? 'white' : '#1a451c' }}
          >
            QA
          </Link>
          <Line
            className={style.line}
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/questions' ? '70%' : '0%' }}
          />
        </li>

        <li>
          <Link
            to='/contact'
            className={`${style.links} ${isHomePage ? '' : style.greenColor}`}
            style={{ color: isHomePage ? 'white' : '#1a451c' }}
          >
            Kontakt
          </Link>
          <Line
            className={style.line}
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/contact' ? '70%' : '0%' }}
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
