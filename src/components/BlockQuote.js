import styles from './BlockQuote.module.css';
import { motion } from 'framer-motion';

const BlockQuote = () => {
  return (
    <div className={styles.blockContainer}>
      <figure className={styles.review}>
        <motion.blockquote
          animate={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{
            duration: 1.5,
            delay: 0.7,
          }}
          className={styles.text}
        >
          " A fényképészet a csend művészete, ahol a szavak helyett a pillanatok
          beszélnek. "
        </motion.blockquote>
      </figure>
    </div>
  );
};

export default BlockQuote;
