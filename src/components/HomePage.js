import { Helmet } from 'react-helmet';
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
    <>
      <Helmet>
        <title>Esküvői fotózás - A legjobb esküvői fotós</title>
        <meta
          name='description'
          content='Fedezd fel a legjobb esküvői fotósok munkáit és válassz számodra tökéletes megoldást!'
        />
        <meta
          name='keywords'
          content='esküvő, fotózás, esküvői fotózás, esküvői videó,pár fotózás, eljegyzés fotózás'
        />
        <meta name='language' content='magyar' />
        <meta name='robots' content='noindex, nofollow' />
        <link rel='canonical' href='https://www.woodlandcapture.com' />
      </Helmet>

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
            Sziasztok! Jani vagyok. Közel nyolc éve foglalkozom fotózással. Ez
            idő alatt szinte minden területen dolgoztam már, legyen az portré,
            divat, ételfotózás, esküvők, enteriőr. Ezeket a tapasztalatokat mind
            igyekszem felhasználni, és olyan fotókat készíteni, amik egyfajta
            igazi természetességgel bírnak, egyben különlegesek is. A mai napig
            szeretem elővenni otthon a fényképeket, lapozni az albumot.
            Különösen jó érzés, ha a szüleimről vagy magamról, öcsémről látok
            fotókat. Ezek igazi emlékek. Ezért is vágtam bele az esküvői
            fotózásba, mert szeretnék valami igazit teremteni és átadni, hogy
            majd Ti is és mindenki, aki megnézi ezeket a képeket, emlékezzenek
            úgy rátok, amilyenek igazán vagytok. Éppen ezért fotózás közben
            mindig szigorúan figyelek a stílusotokra, személyes
            jellemvonásaitokra. Ha szeretnétek, hogy én kísérjelek titeket végig
            a nagy napon, írjatok bátran, és egyeztetünk a részletekről.
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
    </>
  );
};

export default HomePage;
