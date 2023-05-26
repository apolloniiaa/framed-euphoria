import { motion } from 'framer-motion';
import style from './HomePage.module.css';
import about from '../assets/img/about.jpg';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <div className={style.about}>
      <div className={style.description}>
        <motion.h2
          animate={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{
            duration: 1.5,
            delay: 1,
          }}
          className={style.name}
        >
          Photographer{' '}
          <span className={style.span}>
            {' '}
            <br />& Film Maker
          </span>
        </motion.h2>

        <motion.p
          animate={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{
            duration: 1.5,
            delay: 0.4,
          }}
          className={style.text}
        >
          Szia! Jani vagyok .Ha éppen a{' '}
          <span className={style.span}> Woodland Captures</span> weboldalán
          jársz, akkor biztosan a tökéletes esküvői fotós után kutatsz. Nos,
          remélem, hogy én lehetek az, akit keresel! Az esküvői fotózás nem csak
          egy munka számomra, hanem egy szenvedély. A párok személyes stílusát
          és elképzeléseit mindig figyelembe veszem, hogy olyan képeket
          készítsek, amelyek tökéletesen tükrözik az esküvőjüket. Esküvők
          mellett divatfotózásban is dolgozom. Az ott megszerzett
          tapasztalatokat, látásmódot igyekszem beleépíteni az esküvői fotókba
          is, így a végeredmény nemcsak csodálatos emlék lesz, de egyúttal igazi
          művészeti alkotás is. Nézz körül, írj bátran ha engem szeretnél
          fotósnak a nagy napra!
        </motion.p>

        <motion.button
          animate={{ x: [-100, 0], opacity: [0, 1] }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={style.button}
          onClick={handleClick}
        >
          Kapcsolat
        </motion.button>
      </div>
      <div className={style.imgContainer}>
        <motion.img
          animate={{ x: [100, 0], opacity: [0, 1] }}
          transition={{
            duration: 1.5,
            delay: 0.7,
          }}
          className={style.img}
          src={about}
          alt='guy with a camera'
        />
      </div>
    </div>
  );
};

export default HomePage;
