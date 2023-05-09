import { Link, useLocation } from 'react-router-dom';
import style from '../components/Navigation.module.css';
import { motion } from 'framer-motion';

const Line = motion.div;

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <nav className={style.navigation}>
      <h1>
        <a className={style.logo} href='#'>
          Framed Euphoria
        </a>
      </h1>
      <ul className={style.links}>
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
    </nav>
  );
};

export default Nav;
