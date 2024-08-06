import React from 'react';
import { motion } from 'framer-motion';
import './about.css';

const About = () => (
  <div className="about-container">
    <motion.h1 
      className="about-header"
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
    >
      About Us
    </motion.h1>
    <motion.div
      className="mission-section"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Our Mission</h2>
      <p>
        Our mission is to elevate Pakistani football by creating a vibrant community that fosters connection, engagement, and growth among football enthusiasts. We aim to provide a platform where players, fans, and supporters can come together to share their passion, access valuable resources, and contribute to the development of football in Pakistan.
      </p>
    </motion.div>
    <motion.div
      className="vision-section"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Our Vision</h2>
      <p>
        Our vision is to be the leading platform for Pakistani football, driving positive change and fostering talent development across the country. We strive to build a strong network of football communities that support local talent, promote football events, and inspire the next generation of footballers in Pakistan.
      </p>
    </motion.div>
  </div>
);

export default About;
