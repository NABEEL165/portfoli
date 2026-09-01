import React from 'react';
import { motion } from 'framer-motion';
import IdCard from './IdCard';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h4 
            className="hero-subtitle text-gradient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Hello, I am
          </motion.h4>
          <h1 className="hero-title">
            Python Full Stack <br />
            <span className="text-gradient">Developer.</span>
          </h1>
          <p className="hero-description">
            Motivated developer with hands-on experience building scalable web applications, REST APIs, and AI-integrated solutions.
          </p>
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.a 
              href="#projects" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
        
        <div className="hero-image-container">
          <IdCard />
        </div>
      </div>
      
      {/* Background glowing orbs */}
      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>
    </section>
  );
};

export default Hero;
