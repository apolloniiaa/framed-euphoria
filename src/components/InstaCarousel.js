import React, { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import './InstaCarousel.css';

const InstaCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const games = [
    {
      title: 'Dota 2',
      backgroundImage:
        'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Lorem..',
    },
    {
      title: 'Dota 2',
      backgroundImage:
        'https://images.pexels.com/photos/3014859/pexels-photo-3014859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Dota 2 is a multiplayer online battle arena by Valve...',
    },
    {
      title: 'Dota 2',
      backgroundImage:
        'https://images.pexels.com/photos/2691787/pexels-photo-2691787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Dota 2 is a multiplayer online battle arena by Valve...',
    },
    {
      title: 'Dota 2',
      backgroundImage:
        'https://images.pexels.com/photos/4119625/pexels-photo-4119625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Dota 2 is a multiplayer online battle arena by Valve...',
    },
   
  ];
  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className='game-section'>
      <h2 className='line-title'>
        Follow me on Instagram{' '}
        <a
          href='https://www.instagram.com/your_instagram_account/'
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
            style={{ backgroundImage: `url(${game.backgroundImage})` }}
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
