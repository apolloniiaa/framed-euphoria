import React, { useState, useEffect } from 'react';
import '../components/Model.css';
import style from '../components/Gallery.module.css';

const Gallery = ({ images }) => {
  const maxVisibleImages = 11;

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

  const toggleShowAllImages = () => {
    if (visibleImages.length === maxVisibleImages) {
      setVisibleImages(images);
    } else {
      setVisibleImages(images.slice(0, maxVisibleImages));
    }
  };

  useEffect(() => {
    toggleShowAllImages();
  }, []);

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
      {images.length > maxVisibleImages && (
        <div className={style.moreBtnContainer}>
          <button
            className={style.showMoreButton}
            onClick={toggleShowAllImages}
          >
            {visibleImages.length === maxVisibleImages
              ? 'Mutass többet'
              : 'Mutass kevesebbet'}
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
