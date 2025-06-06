import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import SpecialitySection from './Speciality';
import dr3 from '../images/dr26 (1).webp';
import dr2 from '../images/dr4.webp';
import dr4 from '../images/dr26 (14).webp'

import TopDoctors from './TopDoctors';
import PatientReviews from './PatientReview';
import DoctorReviews from './DoctorReview';
import StakeReview from './StakeReview';

const Home = () => {
  return ( 
    <>
      <section className="hero">
        <div className="hero-left">
          <h1>
            Book Appointment <br />
            <span>With Trusted Doctors</span>
          </h1>
          <div className="user-avatars">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user" />
            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="user" />
            <img src="https://randomuser.me/api/portraits/women/29.jpg" alt="user" />
          </div>
          <p className="hero-description">
            Simply browse through our extensive list of trusted doctors,<br />
            schedule your appointment hassle-free.
          </p>
        <button
            className="hero-button"
            onClick={() => { document.getElementById('topd')?.scrollIntoView({ behavior: 'smooth' });}}>
              Book appointment →
        </button>
          
        </div>
        <div className="hero-right">
          <img
            src={dr4}
            alt="Doctor"
            className="doctor-image"
          />
        </div>
      </section>
      
      <SpecialitySection />
  <div id='topd'>
        <TopDoctors />

        <PatientReviews />

        <DoctorReviews />

        <StakeReview />
  </div>
      <section className="hero mb-5">
        <div className="hero-left">
          <h1>
            Book Appointment <br />
            <span>With 100+ Trusted Doctors</span>
          </h1>
         
         
          <Link to='/login' > <button className="hero-button" >Create Account →</button></Link>
        </div>
        <div className="hero-right">
          <img
            src={dr3}
            alt="Doctor"
            className="doctor-image"
            loading='lazy'
          />
        </div>
      </section>
    </>
  );
};

export default Home;