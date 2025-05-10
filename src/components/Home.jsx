import React from 'react';
import './Home.css';
import SpecialitySection from './Speciality';
import TopDoctors from './AllDoc';
import DoctorDetails from './DocDetail';
import dr1 from '../images/dr1.webp';
import dr2 from '../images/dr4.webp'

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
          <button className="hero-button">Book appointment →</button>
        </div>
        <div className="hero-right">
          <img
            src={dr2}
            alt="Doctor"
            className="doctor-image"
          />
        </div>
      </section>
      
      <SpecialitySection />
      <TopDoctors />

      <section className="hero mb-5">
        <div className="hero-left">
          <h1>
            Book Appointment <br />
            <span>With 100+ Trusted Doctors</span>
          </h1>
         
          <button className="hero-button">Create Account →</button>
        </div>
        <div className="hero-right">
          <img
            src={dr2}
            alt="Doctor"
            className="doctor-image"
          />
        </div>
      </section>
    </>
  );
};

export default Home;