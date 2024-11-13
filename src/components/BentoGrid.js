// src/components/BentoGrid.js

import React, { useState, useEffect } from 'react';
import './BentoGrid.css';
import superStreakLarge from '../assets/images/super-streak-large.jpg';
import superStreakMedium from '../assets/images/super-streak-medium.jpg';
import superStreakSmall from '../assets/images/super-streak-small.jpg';

import cardShopLarge from '../assets/images/card-shop-large.jpg';
import cardShopMedium from '../assets/images/card-shop-medium.jpg';
import cardShopSmall from '../assets/images/card-shop-small.jpg';


import streakBoardLarge from '../assets/images/streak-board-large.jpg';
import streakBoardMedium from '../assets/images/streak-board-medium.jpg';
import streakBoardSmall from '../assets/images/streak-board-small.jpg';

const BentoGrid = () => {
  const handleClick = (containerName) => {
    alert(`You clicked on ${containerName}`);
  };

  const getBackgroundImage = () => {
    const width = window.innerWidth;

    if (width <= 600) {
      return superStreakSmall;
    } else if (width <= 1200) {
      return superStreakMedium;
    } else {
      return superStreakLarge;
    }
  };

  const getCardShopBackgroundImage = () => {
    const width = window.innerWidth;

    if (width <= 600) {
      return cardShopSmall;
    } else if (width <= 1200) {
      return cardShopMedium;
    } else {
      return cardShopLarge;
    }
  };

  const getStreakBoardBackgroundImage = () => {
    const width = window.innerWidth;
  
    if (width <= 600) {
      return streakBoardSmall;
    } else if (width <= 1200) {
      return streakBoardMedium;
    } else {
      return streakBoardLarge;
    }
  };
  

  

  const [backgroundImage, setBackgroundImage] = useState(getBackgroundImage());
  const [cardShopBackgroundImage, setCardShopBackgroundImage] = useState(getCardShopBackgroundImage());
  const [streakBoardBackgroundImage, setStreakBoardBackgroundImage] = useState(getStreakBoardBackgroundImage());

  useEffect(() => {
    const handleResize = () => {
      setBackgroundImage(getBackgroundImage());
      setCardShopBackgroundImage(getCardShopBackgroundImage());
      setStreakBoardBackgroundImage(getStreakBoardBackgroundImage());
    };
  
    window.addEventListener('resize', handleResize);
  
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);  

  return (
    <div className="bento-grid">
      {/* Container 1 - Super Streak with Background Image */}
      <div
        className="grid-item item1"
        onClick={() => handleClick('Super Streak')}
        tabIndex="0"
        role="button"
        aria-label="Super Streak"
        onKeyPress={(e) => {
          if (e.key === 'Enter') handleClick('Super Streak');
        }}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Background image is handled via inline styles */}
      </div>

     {/* Container 2 - Streak Board with Background Image */}
<div
  className="grid-item item2"
  onClick={() => handleClick('Streak Board')}
  tabIndex="0"
  role="button"
  aria-label="Streak Board"
  onKeyPress={(e) => {
    if (e.key === 'Enter') handleClick('Streak Board');
  }}
  style={{
    backgroundImage: `url(${streakBoardBackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Background image is handled via inline styles */}
</div>


      {/* Container 3 - Card Shop with Background Image */}
      <div
        className="grid-item item3"
        onClick={() => handleClick('Card Shop')}
        tabIndex="0"
        role="button"
        aria-label="Card Shop"
        onKeyPress={(e) => {
          if (e.key === 'Enter') handleClick('Card Shop');
        }}
        style={{
          backgroundImage: `url(${cardShopBackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Background image is handled via inline styles */}
      </div>

      {/* Container 4 - Avatar */}
      <div
        className="grid-item item4"
        onClick={() => handleClick('Avatar')}
        tabIndex="0"
        role="button"
        aria-label="Avatar"
        onKeyPress={(e) => {
          if (e.key === 'Enter') handleClick('Avatar');
        }}
      >
        <div className="content">Avatar</div>
      </div>

      {/* Container 5 - Collection */}
      <div
        className="grid-item item5"
        onClick={() => handleClick('Collection')}
        tabIndex="0"
        role="button"
        aria-label="Collection"
        onKeyPress={(e) => {
          if (e.key === 'Enter') handleClick('Collection');
        }}
      >
        <div className="content">Collection</div>
      </div>

      {/* Container 6 - World Ranking */}
      <div
        className="grid-item item6"
        onClick={() => handleClick('World Ranking')}
        tabIndex="0"
        role="button"
        aria-label="World Ranking"
        onKeyPress={(e) => {
          if (e.key === 'Enter') handleClick('World Ranking');
        }}
      >
        <div className="content">World Ranking</div>
      </div>
    </div>
  );
};

export default BentoGrid;
