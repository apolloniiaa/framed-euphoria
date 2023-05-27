import React, { useState, useEffect } from 'react';
import styles from './ImageSlider.module.css';

const ImageSlider = () => {
  const slideshowImages = [
    require('../assets/img/img82.jpg'),
    require('../assets/img/img73.jpg'),
    require('../assets/img/img65.jpg'),
    require('../assets/img/img85.jpg'),
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
      <div className={`${styles['intro-slideshow']}`}>
        {slideshowImages.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Slide ${index + 1}`}
            style={{ opacity: index === currentImageIndex ? 1 : 0 }}
            className={`${styles['intro-slideshow']} ${styles['intro-slideshow-img']}`}
          />
        ))}
      </div>
      <div className={`${styles['intro-header']}`}>
        <p className={styles.subtitles}>[esküvő fotózás & videózás]</p>{' '}
        <h1 className={`${styles['intro-h1']}`}>
          Esküvői emlékek
          <br /> örökre{' '}
        </h1>
      </div>
    </header>
  );
};

export default ImageSlider;
