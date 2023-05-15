import { Link } from 'react-router-dom';
import style from './Project.module.css';
import img4 from '../assets/img/img4.jpg';
import img5 from '../assets/img/img5.jpg';
import img2 from '../assets/img/img2.jpg';
//Animation
import { motion } from 'framer-motion';

const Project = () => {
  return (
    <motion.div
      className={style.project}
      animate={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{
        duration: 1.5,
        delay: 1,
      }}
    >
      <motion.div className={style.movie}>
        <h2> Eljegyzés</h2>
        <div className={style.line}></div>
        <Link to='/projects/eljegyzes'>
          <img src={img4} alt='wedding' />
        </Link>
      </motion.div>

      <motion.div
        className={style.movie}
        animate={{ x: [100, 0], opacity: [0, 1] }}
        transition={{
          duration: 1.5,
          delay: 2,
        }}
      >
        <h2>Esküvő</h2>
        <div className={style.line}></div>
        <Link to='/projects/eskuvo'>
          <img src={img5} alt='wedding' />
        </Link>
      </motion.div>

      <motion.div
        className={style.movie}
        animate={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{
          duration: 1.5,
          delay: 3,
        }}
      >
        <h2>Pár fotók</h2>
        <div className={style.line}></div>
        <Link to='/projects/parok'>
          <img src={img2} alt='wedding' />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Project;
