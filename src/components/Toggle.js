import React, { useState } from 'react';
import style from './FaqSection.module.css';
import { motion } from 'framer-motion';

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className={style.toggle} layout onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ''}
      <div className={style.faqLine}></div>
    </div>
  );
};

export default Toggle;
