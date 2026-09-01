import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import './IdCard.css';

const IdCard = () => {
  return (
    <motion.div 
      className="id-card-wrapper"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Lanyard String */}
      <motion.div 
        className="lanyard"
        initial={{ height: 0 }}
        animate={{ height: 100 }}
        transition={{ type: 'spring', damping: 15, stiffness: 100, delay: 0.2 }}
      />
      
      {/* The ID Card */}
      <motion.div 
        className="id-card"
        initial={{ y: -500, rotateZ: 15 }}
        animate={{ 
          y: 0, 
          rotateZ: [-10, 8, -5, 3, -1, 0, -2, 2, -2] // Fall, settle, and then continuous sway
        }}
        transition={{ 
          y: { type: 'spring', damping: 12, stiffness: 80, delay: 0.2 },
          rotateZ: { 
            times: [0, 0.2, 0.4, 0.6, 0.8, 1, 2, 3, 4], // Control timing of the swings
            duration: 8,
            repeat: Infinity,
            repeatType: 'loop',
            ease: "easeInOut",
            delay: 0.2
          }
        }}
        style={{ transformOrigin: "top center" }}
      >
        <div className="card-hole"></div>
        
        <div className="card-photo-container">
          <div className="card-photo">
            <img src={profileImg} alt="Mohammed Nabeel M" />
          </div>
        </div>
        
        <div className="card-details">
          <h2 className="user-name">Mohammed Nabeel M</h2>
          <p className="user-role">Python Developer</p>
        </div>
        
        <div className="card-footer">
          <div className="barcode">
            {/* Simple CSS barcode representation */}
            <div className="bar b1"></div>
            <div className="bar b2"></div>
            <div className="bar b3"></div>
            <div className="bar b1"></div>
            <div className="bar b4"></div>
            <div className="bar b2"></div>
            <div className="bar b3"></div>
            <div className="bar b1"></div>
            <div className="bar b4"></div>
            <div className="bar b2"></div>
            <div className="bar b1"></div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default IdCard;
