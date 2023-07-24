import Toggle from './Toggle';
import style from './FaqSection.module.css';
import { motion } from 'framer-motion';

const FaqSection = () => {
  return (
    <>
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
                Az első találkozás nagyon fontos eleme az egész fotózásnak.
                Minden párral személyesen szoktam találkozni, hogy egy picit
                figyelhessem őket, megismerjem őket, így könnyen elcsíphetem
                azokat az apró vonásokat, mozdulatokat amik igazán jellemzőek
                rájuk.Szeretem ha nem csak két ember van ott akik felkértek,
                hogy fotózzam le őket, hanem tisztában vagyok azzal is, milyen
                lelkületűek, hogyan néznek egymásra, hogyan viccelődnek, hiszen
                ezek az apró dolgok keltik igazán életre a képeket, amikor
                megnézitek őket és felismeritek azokat a pici csak a másikra
                jellemző apróságokat.
              </p>
            </div>
          </Toggle>

          <Toggle title='Fotók stílusa, darabszám '>
            <div className={style.answer}>
              <p className={style.answer2}>
                Fontos beszélgetni arról is, hogy ki mit szeret, legyen az akár
                zene, film, könyv stb.Szeretek tudni előre az eseményen
                megjelenő színekről, dekor elemekről, és mindent figyelembe véve
                úgy kialakítani a beállításokat, hogy a fényelt képek tükrözzék
                azt a hangulatot, azt a képi világot amit a pár magáénak
                érezhet. Fontos beszélgetni arról is, hogy ki mit szeret, legyen
                az akár zene, film, könyv stb.Szeretek tudni előre az eseményen
                megjelenő színekről, dekor elemekről, és mindent figyelembe véve
                úgy kialakítani a beállításokat, hogy a fényelt képek tükrözzék
                azt a hangulatot, azt a képi világot amit a pár magáénak
                érezhet.Nálam nincs a képekre darabszám. Az összes képet ami
                készül és technikailag, esztétikailag rendben van, mindet
                fényelve, szerkesztve átadom. A nap kezdetétől a végéig, minden
                pillanatról kaptok képet. Szerintem fontos, hogy végig tudjuk
                nézni, kísérni az egész napot pillanatról pillanatra. (Kb 1500
                képet jelent)
              </p>
            </div>
          </Toggle>

          <Toggle title='Hol vállalsz fotózásokat?'>
            <div className={style.answer}>
              <p className={style.answer2}>
                Az ország bármely pontján vállalok esküvő, jegyes és páros
                fotózásokat.
              </p>
            </div>
          </Toggle>

          <Toggle title='Hogyan tudok időpontot kérni?'>
            <div className={style.answer}>
              <p className={style.answer2}>
                A kontakt menüpont alatt, a felugró kis panelt kitöltve tudsz
                időpontot illetve árajánlatot kérni.
              </p>
            </div>
          </Toggle>

          <Toggle title='Egyedül vagy csapatban dolgozol?'>
            <div className={style.answer}>
              <p className={style.answer2}>
                Általában egyedül, de ha igényeltek több fős csapatot pl. plusz
                fotós, sminkes, fodrász akkor vannak megbízható kollégáim
                akikkel már összeszokottan, csapatként dolgozunk együtt.
              </p>
            </div>
          </Toggle>

          <Toggle title='Esküvőkön kívül fotózol mást is?'>
            <div className={style.answer}>
              <p className={style.answer2}>
                Igen, az esküvőkön kívül, kereshettek még portré, divat, termék,
                ételfotózással kapcsolatban is.
              </p>
            </div>
          </Toggle>
        </motion.div>
      </div>
    </>
  );
};

export default FaqSection;
