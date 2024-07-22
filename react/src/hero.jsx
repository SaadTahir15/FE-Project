// src/components/Hero.js
import React from 'react';
import Button from '@mui/material/Button';
import footballImage from './assets/football-1419954_1280.jpg';
import shopImage from './assets/istockphoto-1293281887-612x612.jpg';
import './hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      {/* <div className="hero-item">
        <img src={footballImage} alt="Forum" className="hero-image" />
        <div className="overlay">
          <h2>Join the Forum</h2>
          <Button variant="contained" color="primary" className="hero-button">Forum</Button>
        </div>
      </div>
      <div className="hero-item">
        <img src={shopImage} alt="Shop" className="hero-image" />
        <div className="overlay">
          <h2>Shop Now</h2>
          <Button variant="contained" color="secondary" className="hero-button">Shop Now</Button>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
