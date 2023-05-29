import { motion } from 'framer-motion';

import './Button.css';

const SendButton = ({ children }) => {
  return (
    <motion.button
      animate={{ x: [-100, 0], opacity: [0, 1] }}
      className='button'
      transition={{
        duration: 1.5,
        delay: 1,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.button>
  );
};

export default SendButton;
