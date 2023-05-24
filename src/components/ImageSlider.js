import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './ImageSlider.module.css';
import videoFile from '../assets/video.mp4';

const ImageSlider = () => {
  const slideshowVideos = [videoFile];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const isMobileDevice = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex(
        (prevIndex) => (prevIndex + 1) % slideshowVideos.length
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  const handleVideoClick = (e) => {
    e.preventDefault();
    e.target.play();
  };

  return (
    <header className={styles.intro}>
      <div className={`${styles['intro-slideshow']}`}>
        {slideshowVideos.map((videoUrl, index) => (
          <React.Fragment key={index}>
            {isMobileDevice ? (
              <video
                src={videoUrl}
                autoPlay={isPageLoaded}
                muted
                loop
                playsInline
                style={{ opacity: index === currentVideoIndex ? 1 : 0 }}
                className={`${styles['intro-slideshow']} ${styles['intro-slideshow-video']}`}
                onClick={handleVideoClick}
              />
            ) : (
              <video
                src={videoUrl}
                autoPlay
                muted
                loop
                style={{ opacity: index === currentVideoIndex ? 1 : 0 }}
                className={`${styles['intro-slideshow']} ${styles['intro-slideshow-video']}`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className={`${styles['intro-header']}`}>
        <p className={styles.subtitles}>[let it be amazing]</p>
        <h1 className={`${styles['intro-h1']}`}>
          Catch your <br /> life moment!
        </h1>
        <p className={styles.subtitles}>
          Lorem ipsum dolor sit amet consectetur <br /> sit amet consectetur
        </p>
      </div>
    </header>
  );
};

export default ImageSlider;

// import React, { useState, useEffect } from 'react';
// import styles from './ImageSlider.module.css';

// const ImageSlider = () => {
//   const slideshowImages = [
//     'https://images.pexels.com/photos/1128782/pexels-photo-1128782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   ];
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex(
//         (prevIndex) => (prevIndex + 1) % slideshowImages.length
//       );
//     }, 3000); // Updated interval time to 3000 milliseconds (3 seconds)

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <header className={styles.intro}>
//       <div className={`${styles['intro-slideshow']}`}>
//         {slideshowImages.map((imageUrl, index) => (
//           <img
//             key={index}
//             src={imageUrl}
//             alt={`Slide ${index + 1}`}
//             style={{ opacity: index === currentImageIndex ? 1 : 0 }}
//             className={`${styles['intro-slideshow']} ${styles['intro-slideshow-img']}`}
//           />
//         ))}
//       </div>
//       <div className={`${styles['intro-header']}`}>
//         <h1 className={`${styles['intro-h1']}`}>Coding Journey</h1>
//         <p className={`${styles['intro-p']}`}>It's all about the journey</p>
//       </div>
//     </header>
//   );
// };

// export default ImageSlider;
