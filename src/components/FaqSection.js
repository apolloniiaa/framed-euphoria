import Toggle from './Toggle';
import style from './FaqSection.module.css';
import { motion } from 'framer-motion';

const FaqSection = () => {
  return (
    <div className={style.faq}>
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
        <Toggle title='How Do I start?'>
          <div className={style.answer}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati, repellendus.
            </p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </Toggle>

        <Toggle title='Daily Schedule'>
          <div className={style.answer}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati, repellendus.
            </p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </Toggle>

        <Toggle title='Different Payment'>
          <div className={style.answer}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati, repellendus.
            </p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </Toggle>
        <Toggle title='Products which I use'>
          <div className={style.answer}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati, repellendus.
            </p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </Toggle>
      </motion.div>
    </div>
  );
};

export default FaqSection;
