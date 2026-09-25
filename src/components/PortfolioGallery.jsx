import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiZoomIn, FiX } from 'react-icons/fi';
import portfolioImage1 from '../assets/WhatsApp Image 2026-09-24 at 4.54.23 PM.jpeg';
import portfolioImage2 from '../assets/WhatsApp Image 2026-09-24 at 4.54.23 PM(1).jpeg';
import portfolioImage3 from '../assets/WhatsApp Image 2026-09-25 at 11.14.18 AM.jpeg';
import userImage1 from '../assets/user.jpeg';
import userImage2 from '../assets/userr.jpeg';
import collectorImage1 from '../assets/collecter.jpeg';
import collectorImage2 from '../assets/co.jpeg';
import jewelleryImage1 from '../assets/WhatsApp Image 2026-09-25 at 11.23.04 AM.jpeg';
import jewelleryImage2 from '../assets/WhatsApp Image 2026-09-25 at 11.25.11 AM.jpeg';
import gabbyImage from '../assets/a.jpeg';
import gabbyImage1 from '../assets/n.jpeg';
import gabbyImage2 from '../assets/m.jpeg';
import './PortfolioGallery.css';

const portfolioItems = [
  {
    id: 'user-app',
    title: "Suchigo Waste Management User App",
    description: "User application for waste management services",
    image: portfolioImage1,
    category: "",
    live: "#"
  },
  {
    id: 'collector-app',
    title: "Suchigo Waste Management Collector App",
    description: "Collector application for waste management services",
    image: portfolioImage2,
    category: "",
    live: "#"
  },
  {
    id: 'jewellery-app',
    title: "Ecommerce Jewellery App",
    description: "E-commerce platform for jewellery shopping and customization",
    image: portfolioImage3,
    category: "",
    live: "#"
  },
  {
    id: 'gabby-app',
    title: "Gabby Talk",
    description: "Dating call app for connecting people",
    image: gabbyImage,
    category: "",
    live: "#"
  }
];

const PortfolioGallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showUserModal, setShowUserModal] = useState(false);
  const [showCollectorModal, setShowCollectorModal] = useState(false);
  const [showJewelleryModal, setShowJewelleryModal] = useState(false);
  const [showGabbyModal, setShowGabbyModal] = useState(false);

  const handleItemClick = (item) => {
    if (item.id === 'user-app') {
      setShowUserModal(true);
    } else if (item.id === 'collector-app') {
      setShowCollectorModal(true);
    } else if (item.id === 'jewellery-app') {
      setShowJewelleryModal(true);
    } else if (item.id === 'gabby-app') {
      setShowGabbyModal(true);
    }
  };

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Apps <span className="text-gradient">Showcase</span></h2>
          <p className="section-subtitle">A visual showcase of my Api projects.</p>
        </motion.div>

        <div className="portfolio-single">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className="portfolio-item-single"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleItemClick(item)}
              style={{ cursor: item.id ? 'pointer' : 'default' }}
            >
              <div className="portfolio-image-small">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="portfolio-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.category && <span className="portfolio-category">{item.category}</span>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* User App Modal */}
      <AnimatePresence>
        {showUserModal && (
          <motion.div
            className="portfolio-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowUserModal(false)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setShowUserModal(false)}>
                <FiX size={24} />
              </button>
              <h2 className="modal-title">Suchigo Waste Management User App</h2>
              <div className="modal-images">
                <div className="modal-image-item">
                  <img src={userImage1} alt="User App Screen 1" />
                </div>
                <div className="modal-image-item">
                  <img src={userImage2} alt="User App Screen 2" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Collector App Modal */}
      <AnimatePresence>
        {showCollectorModal && (
          <motion.div
            className="portfolio-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowCollectorModal(false)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setShowCollectorModal(false)}>
                <FiX size={24} />
              </button>
              <h2 className="modal-title">Suchigo Waste Management Collector App</h2>
              <div className="modal-images">
                <div className="modal-image-item">
                  <img src={collectorImage1} alt="Collector App Screen 1" />
                </div>
                <div className="modal-image-item">
                  <img src={collectorImage2} alt="Collector App Screen 2" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Jewellery App Modal */}
      <AnimatePresence>
        {showJewelleryModal && (
          <motion.div
            className="portfolio-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowJewelleryModal(false)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setShowJewelleryModal(false)}>
                <FiX size={24} />
              </button>
              <h2 className="modal-title">Ecommerce Jewellery App</h2>
              <div className="modal-images">
                <div className="modal-image-item">
                  <img src={jewelleryImage1} alt="Jewellery App Screen 1" />
                </div>
                <div className="modal-image-item">
                  <img src={jewelleryImage2} alt="Jewellery App Screen 2" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gabby Talk Modal */}
      <AnimatePresence>
        {showGabbyModal && (
          <motion.div
            className="portfolio-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowGabbyModal(false)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setShowGabbyModal(false)}>
                <FiX size={24} />
              </button>
              <h2 className="modal-title">Gabby Talk</h2>
              <div className="modal-images">
                <div className="modal-image-item">
                  <img src={gabbyImage1} alt="Gabby Talk Screen 1" />
                </div>
                <div className="modal-image-item">
                  <img src={gabbyImage2} alt="Gabby Talk Screen 2" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioGallery;
