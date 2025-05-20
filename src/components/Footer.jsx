import React from 'react';
import './Footer.css';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="footer-container mt-2">
        <div className="footer-section">
          <div className="footer-logo">
            <div className="logo-box yellow"></div>
            <div className="logo-box blue"></div> 
            <h1 className="logo-text">Ashter</h1>
          </div>
          <p className="footer-description">
            Ahster Hospital provides compassionate care, advanced technology, and expert medical services to ensure every patient’s health, comfort, and recovery.

          </p>
          <div className="social-icons">
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaGithub />
          </div>
        </div>

        {/* Company */}
        <div className="footer-section">
          <h3 className="footer-heading">Company</h3>
          <ul>
            <li>About</li>
            <li>Features</li> 
            <li>Works</li>
            <li >Career</li>
          </ul>
        </div>

        {/* Help */}
        <div className="footer-section">
          <h3 className="footer-heading">Help</h3>
          <ul>
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

       {/*  <div className="footer-section">
          <h3 className="footer-heading">Subscribe to Newsletter</h3>
          <input type="email" placeholder="Enter your email" className="footer-input" />
          <button className="footer-button">Subscribe</button>
        </div> */}
      </div>

      <div className="footer-bottom">
        &copy; Copyright 2025, All Rights Reserved by FAWAZ
      </div>
    </footer>
  );
};

export default Footer;
