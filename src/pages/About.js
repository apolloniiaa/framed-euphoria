import HomePage from '../components/HomePage';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const About = () => {
  return (
    <motion.div variants={pageAnimation} initial='hidden' animate='show'>
      <HomePage />
    </motion.div>
  );
};

export default About;
