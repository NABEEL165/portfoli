import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Contact.css';
import profileImage from '../assets/profile.jpg';
import Chatbot from './Chatbot';

const Contact = () => {
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setToastMessage(type === 'email' ? 'Email copied!' : 'Phone copied!');
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2500);
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="contact-header"
        >
          <motion.div 
            className="profile-image-wrapper"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          >
            <div className="profile-glow"></div>
            <img src={profileImage} alt="Profile" className="profile-image" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="contact-title">
              Let's <span className="contact-title-gradient">Connect</span>
            </h2>
            <motion.p 
              className="contact-subtitle"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Have a project in mind or just want to say hi? I'd love to hear from you.
            </motion.p>
          </motion.div>
        </motion.div>

        <div className="contact-list">
          
          <motion.div 
            initial={{ opacity: 0, x: -40, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.02, x: 8 }}
            onClick={() => copyToClipboard('muhammednabeel1832@gmail.com', 'email')} 
            className="contact-item"
          >
            <div className="contact-icon-wrapper">
              <div className="pulse-ring"></div>
              <div className="contact-icon">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
            </div>
            <div className="contact-info">
              <p className="contact-label">Email</p>
              <p className="contact-value">muhammednabeel1832@gmail.com</p>
            </div>
            <div className="contact-arrow">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -40, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.02, x: 8 }}
            onClick={() => copyToClipboard('+91 6282116340', 'phone')} 
            className="contact-item"
          >
            <div className="contact-icon-wrapper">
              <div className="pulse-ring"></div>
              <div className="contact-icon">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
            </div>
            <div className="contact-info">
              <p className="contact-label">Phone</p>
              <p className="contact-value">+91 6282116340</p>
            </div>
            <div className="contact-arrow">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -40, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.02, x: 8 }}
            className="contact-item"
          >
            <div className="contact-icon-wrapper">
              <div className="pulse-ring"></div>
              <div className="contact-icon">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
            </div>
            <div className="contact-info">
              <p className="contact-label">Location</p>
              <p className="contact-value">Palakkad, Kerala</p>
            </div>
            <div className="contact-arrow">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
            </div>
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          className="contact-badge"
        >
          <span className="pulse-dot"></span>
          <span className="badge-text">Available for New Projects</span>
        </motion.div>
      </div>

      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="toast"
          >
            <svg className="toast-icon text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <Chatbot />
    </section>
  );
};

export default Contact;
