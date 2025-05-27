import React from 'react';
import './About.css';
import dr18 from '../images/dr18.jpg'
import dr19 from '../images/dr19.jpg'
import dr20 from '../images/dr20.jpg'
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section className="about-container">
      <h2 className="section-title">Contact <span>Us</span></h2>

      <div className="about-content">
        <div className="about-image">
          <img
            src={dr20}
            alt="Doctors"
            loading='lazy'
          />
        </div>

        <div className="about-text">
            <h4>OUR OFFICE</h4>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198740.92451084367!2d-77.17973160377316!3d38.89363817760632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20DC%2C%20USA!5e0!3m2!1sen!2sin!4v1747732231442!5m2!1sen!2sin" width="450" height="300" style={{maxWidth:"350px"}} /* style="border:0;" */ allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" alt='Google maps '></iframe>
          <p>+(307) 70246 354</p>
          <p>+(307) 70246 355</p>
          <h4>CAREERS AT ASHTER</h4>
          <p>
            Learn more about our teams and job openings.
          </p>

         <Link className="hero-button" to={"/career"}>Explore Jobs →</Link>  

        </div>

                 
      </div>

      <h3 className="why-title">Perks <span>From Us</span></h3>
      <div className="features">
        <div className="feature-box">
  <h4>Growth Opportunities:</h4>
  <p>Continuous learning, training programs, and chances to advance your career in a supportive environment.</p>
</div>
<div className="feature-box">
  <h4>Work-Life Balance:</h4>
  <p>Flexible schedules and leave policies designed to support your personal and family life.</p>
</div>
<div className="feature-box">
  <h4>Comprehensive Benefits:</h4>
  <p>Enjoy health insurance, wellness programs, and employee discounts for you and your family.</p>
</div>

      </div>
    </section>
  );
};

export default Contact;
