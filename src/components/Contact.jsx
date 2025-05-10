import React from 'react';
import './About.css';
import dr18 from '../images/dr18.jpg'
import dr19 from '../images/dr19.jpg'
import dr20 from '../images/dr20.jpg'

const Contact = () => {
  return (
    <section className="about-container">
      <h2 className="section-title">Contact <span>Us</span></h2>

      <div className="about-content">
        <div className="about-image">
          <img
            src={dr19}
            alt="Doctors"
          />
        </div>

        <div className="about-text">
            <h4>OUR OFFICE</h4>
          <p>
            00000 Willms Station <br />
            Suite 000, Washington, USA

          </p>
          <p>
           
            Tel: (000) 000-0000 <br />
            Email: info@Ashter.com
          </p>
          <h4>CAREERS AT PRESCRIPTO</h4>
          <p>
            Learn more about our teams and job openings.
          </p>

           <button className="hero-button">Explore Jobs →</button>

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
