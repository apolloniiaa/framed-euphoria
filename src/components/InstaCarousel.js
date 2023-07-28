import React, { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import './InstaCarousel.css';

import image1 from '../assets/img/intsa1.jpg';
import image2 from '../assets/img/insta2.jpg';
import image3 from '../assets/img/insta3.jpg';
import image4 from '../assets/img/insta4.jpg';

const InstaCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const games = [
    {
      backgroundImage: image1,
    },
    {
      backgroundImage: image2,
    },
    {
      backgroundImage: image3,
    },
    {
      backgroundImage: image4,
    },
  ];

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className='game-section'>
      <h2 className='line-title'>
        Kövess Instagramon is
        <a
          href='https://www.instagram.com/balogh.janos.photoblog/'
          target='_blank'
          rel='noopener noreferrer'
          className='instagram-link'
        >
          <FaInstagram className='instagram-icon' />
        </a>
      </h2>
      <div className='custom-carousel'>
        {games.map((game, index) => (
          <div
            className={`item ${index === activeIndex ? 'active' : ''}`}
            key={index}
            style={{
              backgroundImage: `url(${game.backgroundImage})`,
              backgroundSize: 'cover', // Ensure the image covers the entire item
              backgroundPosition: 'center', // Center the image
            }}
            onClick={() => handleItemClick(index)}
          >
            <div className='item-desc'>
              <h3>{game.title}</h3>
              <p>{game.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='carousel-dots'>
        {games.map((game, index) => (
          <div
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleItemClick(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default InstaCarousel;
