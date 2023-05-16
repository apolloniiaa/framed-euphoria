import HomePage from '../components/HomePage';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div initial='hidden' animate='show'>
      <HomePage />
    </motion.div>
  );
};

export default About;
