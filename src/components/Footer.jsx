import React from 'react';
import { FiHeart } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass">
      <div className="container">
        <div className="footer-content">
          <p className="copyright">
            &copy; {new Date().getFullYear()} PortFolio. All rights reserved.
          </p>
          <p className="made-with">
            Built with <FiHeart className="heart-icon" /> and React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
