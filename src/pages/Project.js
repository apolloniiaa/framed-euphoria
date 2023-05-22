import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { fade, photoAnim, lineAnim } from '../animation';
import img4 from '../assets/img/img4.jpg';
import img5 from '../assets/img/img5.jpg';
import img2 from '../assets/img/img2.jpg';
import style from './Project.module.css';

const Project = () => {
  return (
    <motion.div
      className={style.project}
      exit='exit'
      initial='hidden'
      animate='show'
    >
      <motion.div className={style.movie}>
        <motion.h2 variants={fade} className={style.subtitle}>
          {' '}
          Eljegyzés
        </motion.h2>
        <motion.div variants={lineAnim} className={style.line}></motion.div>
        <Link to='/projects/eljegyzes'>
          <div className={style.hide}>
            <motion.img
              variants={photoAnim}
              className={style.images}
              src={img4}
              alt='wedding'
            />
          </div>
        </Link>
      </motion.div>

      <motion.div
        className={style.movie}
        animate={{ x: [100, 0], opacity: [0, 1] }}
        transition={{
          duration: 1.5,
          delay: 3,
        }}
      >
        <h2 className={style.subtitle}>Esküvő</h2>
        <div className={style.line}></div>
        <Link to='/projects/eskuvo'>
          <img className={style.images} src={img5} alt='wedding' />
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
        <h2 className={style.subtitle}>Párok</h2>
        <div className={style.line}></div>
        <Link to='/projects/parok'>
          <img className={style.images} src={img2} alt='wedding' />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Project;
