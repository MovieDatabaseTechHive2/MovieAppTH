import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            This is a movie app where you can explore, search, and save your favorite
            movies. Stay tuned for updates and new features!
          </p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@movieapp.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Movie App. All rights reserved.TechHive</p>
      </div>
    </footer>
  );
};

export default Footer;