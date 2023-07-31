import React, { useState, useEffect } from 'react';
import '../components/Model.css';
import style from '../components/Gallery.module.css';

const Gallery = ({ images }) => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');
  const [visibleImages, setVisibleImages] = useState([]);
  const [loadedImages, setLoadedImages] = useState([]);
  const [showMoreImages, setShowMoreImages] = useState(false);
  const [loadInProgress, setLoadInProgress] = useState(true);

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  const closeModel = () => {
    setModel(false);
  };

  useEffect(() => {
    const handleResize = () => {
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
    };

    handleResize();

    // Add event listener for window resize
    const debouncedHandleResize = debounce(handleResize, 200);
    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      // Remove event listener on component unmount
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, [images, showMoreImages]);

  useEffect(() => {
    const loadImages = async () => {
      if (loadInProgress) {
        // Betöltés folyamatban van, a "Töltés..." üzenet látható
        const promises = visibleImages.map((item) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = item.imgSrc;
            img.onload = () => resolve(item.id);
            img.onerror = () => reject(item.id);
          });
        });

        try {
          const loadedIds = await Promise.all(promises);
          setLoadedImages(loadedIds);
        } catch (error) {
          console.error('Error loading images:', error);
        } finally {
          setLoadInProgress(false); // Betöltés befejezése
        }
      }
    };

    loadImages();
  }, [visibleImages, loadInProgress]);

  const toggleShowMoreImages = () => {
    setShowMoreImages((prevValue) => !prevValue);
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
                loadedImages.includes(item.id) ? 'loaded' : ''
              }`}
            />
          </div>
        ))}
      </div>

      {loadInProgress && <div className={style.loadingMessage}>Töltés...</div>}

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
