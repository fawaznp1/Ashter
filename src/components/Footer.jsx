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
            Ashter Hospital provides compassionate care, advanced technology, and expert medical services to ensure every patient’s health, comfort, and recovery.

          </p>
          <div className="social-icons">
           <a href='#'>
             <FaTwitter />
           </a>
          <a href='#'>
              <FaFacebookF />
          </a>
          <a href='#'>
              <FaInstagram />
          </a>
           <a href='#'>
             <FaGithub />
           </a>
          </div>
        </div>

        {/* Company */}
        <div className="footer-section">
          <h3 className="footer-heading">Company</h3>
          <ul>
           
              <a href='/about' style={{textDecoration:"none" ,color:"black"}}> <li>About</li> </a>
             <a href='/facilities' style={{textDecoration:"none" ,color:"black"}}> <li>Features</li> </a>
             <a href='/alldoctors' style={{textDecoration:"none" ,color:"black"}}> <li>All Doctors</li> </a>
             <a href='/career' style={{textDecoration:"none" ,color:"black"}}> <li>Career</li> </a>
          </ul>
        </div>

        {/* Help */}
        <div className="footer-section" >
          <h3 className="footer-heading">Help</h3>
          <ul>
          
             <a href='/contact' style={{textDecoration:"none" ,color:"black"}}> <li>Customer Support</li> </a>
             <a href='/blog' style={{textDecoration:"none" ,color:"black"}}> <li>BLOG</li> </a>
             <a href='/terms' style={{textDecoration:"none" ,color:"black"}}> <li>Terms & Conditions</li> </a>
             <a href='/privacy' style={{textDecoration:"none" ,color:"black"}}> <li>Privacy Policy</li> </a>
          
          </ul>
        </div>

       
      </div>

      <div className="footer-bottom">
        &copy; Copyright 2025, All Rights Reserved by  <a href="http://fawaznp.vercel.app" target='_blank' style={{textDecoration:"none"}}>Fawaz</a>
      </div>
    </footer>
  );
};

export default Footer;
