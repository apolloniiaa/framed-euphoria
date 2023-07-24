import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './ImageSlider.module.css';

const ImageSlider = () => {
  const slideshowImages = [
    require('../assets/img/img82.jpg'),
    require('../assets/img/img41.jpg'),
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % slideshowImages.length
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <header className={styles.intro}>
      <motion.div className={`${styles['intro-slideshow']}`}>
        {slideshowImages.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Slide ${index + 1}`}
            style={{ opacity: index === currentImageIndex ? 1 : 0 }}
            className={`${styles['intro-slideshow']} ${styles['intro-slideshow-img']}`}
          />
        ))}
      </motion.div>

      <div
        className={`${styles['intro-header']} ${styles['intro-background']}`}
      >
        <motion.div className={styles.title}>
          <motion.p
            animate={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{
              duration: 1.5,
            }}
            className={styles.subtitles}
          >
            [esküvő fotózás & videózás]
          </motion.p>
          <motion.h1
            animate={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{
              duration: 1.5,
              delay: 1,
            }}
            className={`${styles['intro-h1']}`}
          >
            Esküvői emlékek örökre
          </motion.h1>
          <motion.p
            animate={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{
              duration: 1.5,
            }}
            className={styles.subtitles}
          >
            since 2015
          </motion.p>
        </motion.div>
      </div>
    </header>
  );
};

export default ImageSlider;
