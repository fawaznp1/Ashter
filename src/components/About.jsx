import React from 'react';
import './About.css';
import dr18 from '../images/dr18.jpg';
import dr19 from '../images/dr19.jpg';
import dr20 from '../images/dr20.jpg';

const About = () => {
  return (
    <section className="about-container">
      <h2 className="section-title">About <span>Us</span></h2>
      
      <div className="about-content">
        <div className="about-image">
          <img
            src={dr19}
            alt="Doctors"
          />
        </div>
        
        <div className="about-text">
          <p>
            Welcome to Prescripto, your trusted partner in managing your healthcare needs
            conveniently and efficiently. At Prescripto, we understand the challenges
            individuals face when it comes to scheduling doctor appointments and managing
            their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We continuously
            strive to enhance our platform, integrating the latest advancements to improve
            user experience and deliver superior service. Whether you're booking your first
            appointment or managing ongoing care, Prescripto is here to support you every step
            of the way.
          </p>
          <h4>Our Vision</h4>
          <p>
            Our vision at Prescripto is to create a seamless healthcare experience for every
            user. We aim to bridge the gap between patients and healthcare providers, making
            it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </div>
      
      <h3 className="why-title">Why <span>Choose Us</span></h3>
      <div className="features">
        <div className="feature-box">
          <h4>Efficiency:</h4>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className="feature-box">
          <h4>Convenience:</h4>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className="feature-box">
          <h4>Personalization:</h4>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </section>
  );
};

export default About;