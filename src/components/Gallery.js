import React, { useState } from 'react';
import { motion } from 'framer-motion';
import style from './Gallery.module.css';

const Gallery = ({ images }) => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');
  const maxVisibleImages = 10;
  const [visibleImages, setVisibleImages] = useState(
    images.slice(0, maxVisibleImages)
  );
  const [showAllImages, setShowAllImages] = useState(false);

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  const closeModel = () => {
    setModel(false);
  };

  const toggleShowAllImages = () => {
    setShowAllImages(!showAllImages);
    if (!showAllImages) {
      setVisibleImages(images);
    } else {
      setVisibleImages(images.slice(0, maxVisibleImages));
    }
  };

  return (
    <>
      {model && (
        <div className={style.model} onClick={closeModel}>
          <img src={tempImgSrc} alt='gallery' />
        </div>
      )}

      <div className={style.gallery}>
        {visibleImages.map((item, index) => (
          <motion.div
            className={style.pics}
            key={item.id}
            onClick={() => getImg(item.imgSrc)}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={item.imgSrc}
              alt='gallery-image'
              className={style.images}
            />
          </motion.div>
        ))}
        {images.length > maxVisibleImages && !showAllImages && (
          <button
            className={style.showMoreButton}
            onClick={toggleShowAllImages}
          >
            Tovább
          </button>
        )}
      </div>
    </>
  );
};

export default Gallery;
