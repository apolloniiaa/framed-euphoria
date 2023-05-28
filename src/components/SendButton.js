import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Button.css';

const SendButton = ({ children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // A "Küldés" gombra kattintás eseménykezelője
    console.log('Küldés gombra kattintva');
    // Ide írd a kívánt műveleteket vagy navigációt
    navigate('/send');
  };

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
      onClick={handleClick}
    >
      {children}
    </motion.button>
  );
};

export default SendButton;
