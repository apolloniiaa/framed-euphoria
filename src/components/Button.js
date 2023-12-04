import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Button.css';

const Button = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <motion.button
      animate={{ x: [-100, 0], opacity: [0, 1] }}
      className='button'
      transition={{
        duration: 1.5,
        delay: 1,
      }}
      onClick={handleClick}
    >
      Kapcsolat
    </motion.button>
  );
};

export default Button;
