import React from 'react';
import { Link } from 'react-router-dom';
import './TopDoctors.css';
import { doctorsData } from './DoctorData';

// Import your doctor image
import dr2 from '../images/dr2.webp';

const TopDoctors = () => {
  // Create doctors array with image included
  const doctors = doctorsData.map(doc => ({
    ...doc,
    /* image: dr2 */
  }));
  
  // Only take the first 8 doctors to display
  const limitedDoctors = doctors.slice(0, 8);
  
  return (
    <section className="top-doctors-section" id='topd'>
      <h2>Top Doctors to Book</h2>
      <p>
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="doctor-grid">
        {limitedDoctors.map((doctor) => (
          <Link 
            to={`/doctor/${doctor.id}`}
            key={doctor.id}
            className="doctor-card-link"
          >
            <div className="doctor-card">
              <div className='image-container'>
                <img src={doctor.image} alt={doctor.image} loading='lazy' />
              </div>
              <div className="doctor-info">
                <span className="status">
                  <span className="dot"></span> {doctor.status}
                </span>
                <h3>{doctor.name}</h3>
                <p>{doctor.specialty}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="more-button-container">
        <Link to="/alldoctors" className="more-button">
          More
        </Link>
      </div>
    </section>
  );
};

export default TopDoctors;