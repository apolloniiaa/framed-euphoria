import styles from './BlockQuote.module.css';
import { motion } from 'framer-motion';

const BlockQuote = () => {
  return (
    <div>
      <figure className={styles.review}>
        <motion.blockquote
          animate={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{
            duration: 1.5,
            delay: 0.7,
          }}
          className={styles.text}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ab
          quod iure aperiam! Quisquam unde quo ipsum ipsa.
        </motion.blockquote>
      </figure>
    </div>
  );
};

export default BlockQuote;
