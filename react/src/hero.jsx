// src/components/Hero.js
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import CreateSharpIcon from '@mui/icons-material/CreateSharp';
import ShoppingBagSharpIcon from '@mui/icons-material/ShoppingBagSharp';
import image1 from './assets/1.png';
import image2 from './assets/2.png';
import image3 from './assets/3.png';
import image4 from './assets/4.png';
import image5 from './assets/5.png';
import image6 from './assets/6.png';
import Button from '@mui/material/Button';
import './hero.css';

const images = [image1, image2, image3, image4, image5, image6];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Updated interval for a smoother transition

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } });
      setAnimationCompleted(true);
    };
    
    startAnimation();
  }, [controls]);

  return (
    <div className="hero-container">
      <div className="hero-text">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        >
          <span style={{color: '#76885B', fontSize: 'larger'}}>Join the Conversation.</span> <br />
          <span style={{fontSize: 'larger',}}>Fuel the Change.</span> <br />
          <span style={{color: '#76885B', fontSize: 'larger'}}>Shop the Trend.</span>
        </motion.h1>
        <div className="hero-buttons">
          <Button 
            variant="contained" 
            color="primary"
            style={{ marginRight: '10px', borderRadius: '50px', backgroundColor: '#76885B'}}
          >
            Join the Discussion<CreateSharpIcon />
          </Button>
          <Button 
            variant="outlined" 
            style={{ borderRadius: '50px', borderColor: '#76885B', color: '#76885B', backgroundColor: 'transparent'}}
          >
            Shop Now <ShoppingBagSharpIcon />
          </Button>
        </div>
      </div>
      <div className="hero-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Dynamic ${index}`}
            className={`hero-image ${currentImage === index ? 'visible' : 'hidden'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
