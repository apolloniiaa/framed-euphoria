import Toggle from './Toggle';
import style from './FaqSection.module.css';
import { motion } from 'framer-motion';

const FaqSection = () => {
  return (
    <div className={style.faqSection}>
      <motion.h2
        layout
        animate={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{
          duration: 1.5,
        }}
      >
        Gyakran feltett kérdések
      </motion.h2>
      <motion.div
        layout
        animate={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{
          duration: 1.5,
          delay: 1,
        }}
      >
        <Toggle title='Első találkozás'>
          <div className={style.answer}>
            <p className={style.answer2}>
              Az első találkozás nagyon fontos eleme az egész fotózásnak. Minden
              párral személyesen szoktam találkozni, hogy egy picit figyelhessem
              őket, megismerjem őket, így könnyen elcsíphetem azokat az apró
              vonásokat, mozdulatokat amik igazán jellemzőek rájuk.Szeretem ha
              nem csak két ember van ott akik felkértek, hogy fotózzam le őket,
              hanem tisztában vagyok azzal is, milyen lelkületűek, hogyan néznek
              egymásra, hogyan viccelődnek, hiszen ezek az apró dolgok keltik
              igazán életre a képeket, amikor megnézitek őket és felismeritek
              azokat a pici csak a másikra jellemző apróságokat
            </p>
          </div>
        </Toggle>

        <Toggle title='Fotók stílusa,  darabszám '>
          <div className={style.answer}>
            <p className={style.answer2}>
              Fontos beszélgetni arról is, hogy ki mit szeret, legyen az akár
              zene, film, könyv stb.Szeretek tudni előre az eseményen megjelenő
              színekről, dekor elemekről, és mindent figyelembe véve úgy
              kialakítani a beállításokat, hogy a fényelt képek tükrözzék azt a
              hangulatot, azt a képi világot amit a pár magáénak érezhet
            </p>
          </div>
        </Toggle>
      </motion.div>
    </div>
  );
};

export default FaqSection;
