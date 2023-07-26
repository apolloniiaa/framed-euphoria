import React, { useState, useEffect } from 'react';
import '../components/Model.css';
import style from '../components/Gallery.module.css';

const Gallery = ({ images }) => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');
  const [visibleImages, setVisibleImages] = useState([]);
  const [loadedImages, setLoadedImages] = useState([]);

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

      setVisibleImages(images.slice(0, maxVisibleImages));
    };

    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    return () => {
      // Remove event listener on component unmount
      window.removeEventListener('resize', handleResize);
    };
  }, [images]);

  useEffect(() => {
    const loadImages = async () => {
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
      }
    };

    loadImages();
  }, [visibleImages]);

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
      {images.length > visibleImages.length && (
        <div className={style.moreBtnContainer}>
          <button
            className={style.showMoreButton}
            onClick={() => setVisibleImages(images.slice(0, images.length))}
          >
            Mutass többet
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
