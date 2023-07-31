import React, { useState, useEffect, useCallback } from 'react';
import '../components/Model.css';
import style from '../components/Gallery.module.css';

const Gallery = ({ images }) => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');
  const [visibleImages, setVisibleImages] = useState([]);
  const [loadedImages, setLoadedImages] = useState([]);
  const [showMoreImages, setShowMoreImages] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState(-1);
  const [batchSize, setBatchSize] = useState(3); // Change this number to adjust batch size

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  const closeModel = () => {
    setModel(false);
  };

  const handleResize = useCallback(() => {
    const screenWidth = window.innerWidth;
    let maxVisibleImages;

    if (screenWidth <= 767) {
      maxVisibleImages = 3;
    } else if (screenWidth <= 1024) {
      maxVisibleImages = 6;
    } else {
      maxVisibleImages = 10;
    }

    setVisibleImages(
      images.slice(0, showMoreImages ? images.length : maxVisibleImages)
    );
  }, [images, showMoreImages]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    setLoadingIndex(-1); // Reset loading index when visibleImages changes
  }, [visibleImages]);

  const handleImageLoad = (itemId) => {
    setLoadedImages((prevLoadedIds) => [...prevLoadedIds, itemId]);
  };

  useEffect(() => {
    const loadImages = async () => {
      if (loadingIndex === -1 || loadingIndex >= visibleImages.length) return;

      for (
        let i = loadingIndex;
        i < Math.min(loadingIndex + batchSize, visibleImages.length);
        i++
      ) {
        const item = visibleImages[i];
        setLoadingIndex((prevIndex) => prevIndex + 1);

        const img = new Image();
        img.src = item.imgSrc;
        img.onload = () => {
          handleImageLoad(item.id);
        };
        img.onerror = () => {
          console.error('Error loading image:', item.imgSrc);
          handleImageLoad(item.id); // Even if the image fails to load, consider it loaded to continue the process
        };
      }
    };

    loadImages();
  }, [visibleImages, loadingIndex, batchSize]);

  const toggleShowMoreImages = () => {
    setShowMoreImages((prevValue) => !prevValue);
    setBatchSize(3); // Reset batchSize when the button is clicked
  };

  return (
    <>
      {model && (
        <div className={model ? 'model open' : 'model'} onClick={closeModel}>
          <img src={tempImgSrc} alt='gallery' />
        </div>
      )}

      <div className={style.gallery}>
        {visibleImages.map((item) => (
          <div
            className={style.pics}
            key={item.id}
            onClick={() => getImg(item.imgSrc)}
          >
            <img
              src={item.imgSrc}
              alt='gallery-image'
              className={`${style.images} ${
                loadedImages.includes(item.id) ? style.loaded : ''
              }`}
              onLoad={() => handleImageLoad(item.id)}
            />
          </div>
        ))}
      </div>

      {loadingIndex !== -1 && (
        <div className={`${style.loadingMessage} ${style.fadeInOut}`}>
          Töltés...
        </div>
      )}

      {!showMoreImages && images.length > visibleImages.length && (
        <div className={style.moreBtnContainer}>
          <button
            className={`${style.showMoreButton} ${style.fadeInOut}`}
            onClick={toggleShowMoreImages}
          >
            Mutass többet
          </button>
        </div>
      )}

      {showMoreImages && (
        <div className={style.moreBtnContainer}>
          <button
            className={`${style.showMoreButton} ${style.fadeInOut}`}
            onClick={toggleShowMoreImages}
          >
            Mutass kevesebbet
          </button>
        </div>
      )}
    </>
  );
};

// Helper function to debounce window resize event
const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

export default Gallery;
