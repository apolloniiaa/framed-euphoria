import { Link } from 'react-router-dom';
import style from './Project.module.css';
import img4 from '../assets/img/img4.jpg';
import img5 from '../assets/img/img5.jpg';
import img2 from '../assets/img/img2.jpg';

const Project = () => {
  return (
    <div className={style.project}>
      <div className={style.movie}>
        <h2> Eljegyzés</h2>
        <div className={style.line}></div>
        <Link to='/projects/eljegyzes'>
          <img src={img4} alt='wedding' />
        </Link>
      </div>

      <div className={style.movie}>
        <h2>Esküvő</h2>
        <div className={style.line}></div>
        <Link to='/projects/eskuvo'>
          <img src={img5} alt='wedding' />
        </Link>
      </div>

      <div className={style.movie}>
        <h2>Pár fotók</h2>
        <div className={style.line}></div>
        <Link to='/projects/parok'>
          <img src={img2} alt='wedding' />
        </Link>
      </div>
    </div>
  );
};

export default Project;
