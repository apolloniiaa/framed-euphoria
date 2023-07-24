import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fade, photoAnim, lineAnim } from '../animation';
// import img42 from '../assets/img/img42.jpg';
// import img29 from '../assets/img/img29.jpg';
import img21 from '../assets/img/img21.jpg';
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
          Esküvő fotózás
        </motion.h2>
        <motion.div variants={lineAnim} className={style.line}></motion.div>
        <Link to='/projects/eskuvo'>
          <div className={style.hide}>
            <motion.img
              variants={photoAnim}
              className={style.images}
              src={img21}
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
        <h2 className={style.subtitle}>Jegyes fotózás</h2>
        <div className={style.line}></div>
        <Link to='/projects/eljegyzes'>
          <motion.img
            variants={photoAnim}
            className={style.images}
            src={img21}
            alt='jegyes'
          />
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
        <h2 className={style.subtitle}>Páros fotózás</h2>
        <div className={style.line}></div>
        <Link to='/projects/parok'>
          <motion.img
            variants={photoAnim}
            className={style.images}
            src={img21}
            alt='paros'
          />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Project;
