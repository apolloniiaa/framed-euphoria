import Toggle from './Toggle';
import style from './FaqSection.module.css';
import { motion } from 'framer-motion';

const FaqSection = () => {
  return (
    <div className={style.faq}>
      <h2>Gyakran feltett kérdések</h2>
      <motion.div layout>
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
