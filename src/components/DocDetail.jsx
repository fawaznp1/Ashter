import React, { useState } from 'react';
import './DocDetails.css';
import dr2 from '../images/dr2.webp'

const DoctorDetails = ({ doctor }) => {
  const [selectedDay, setSelectedDay] = useState(0);
  const days = ['SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI'];
  const dates = [10, 11, 12, 13, 14, 15, 16];
  const timeSlots = ['04:30 pm', '05:00 pm', '05:30 pm', '06:00 pm', '06:30 pm', '07:00 pm', '07:30 pm', '08:00 pm'];

  const handleDaySelect = (index) => {
    setSelectedDay(index);
  };

  return (
    <div className="doctor-details-container">
      <div className="doctor-profile">
        <div className="doctor-image-container">
          <img
            src={dr2}
            alt={doctor.name}
            className="doctor-image"
          />
        </div>

        <div className="doctor-info">
          <h2 className="doctor-name">
            {doctor.name}
            <span className="verified-badge">✓</span>
          </h2>
          <p className="doctor-credentials">{doctor.qualification} – {doctor.specialty}</p>
          <p className="doctor-experience">
            <span className="experience-badge">
              {doctor.experience} Years
            </span>
          </p>

          <div className="doctor-about">
            <p className="about-title">About <span className="info-icon" title="More information">ℹ</span></p>
            <p className="about-content">
              {doctor.about}
            </p>
          </div>

          <p className="appointment-fee">
            Appointment fee: <span className="fee-amount">${doctor.fee}</span>
          </p>
        </div>
      </div>

      {/* Booking Slots */}
      <div className="booking-section">
        <h3 className="booking-title">Booking slots</h3>

        {/* Days */}
        <div className="days-container">
          {days.map((day, idx) => (
            <div
              key={day}
              className={`day-item ${idx === selectedDay ? 'selected' : ''}`}
              onClick={() => handleDaySelect(idx)}
            >
              <span className="day-name">{day}</span>
              <span className="day-date">{dates[idx]}</span>
            </div>
          ))}
        </div>

        {/* Times */}
        <div className="time-slots">
          {timeSlots.map((slot, index) => (
            <button
              key={index}
              className="time-slot-btn"
            >
              {slot}
            </button>
          ))}
        </div>
      </div>
      
      {/* Related Doctors Section */}
      <div className="related-doctors-section">
        <h3 className="related-title">Related Doctors</h3>
        <div className="related-doctors-container">
          {relatedDoctors.map((doc, index) => (
            <div key={index} className="related-doctor-card">
              <img src={doc.image} alt={doc.name} className="related-doctor-image" />
              <div className="related-doctor-info">
                <h4 className="related-doctor-name">{doc.name}</h4>
                <p className="related-doctor-specialty">{doc.specialty}</p>
                <p className="related-doctor-rating">
                  <span className="star-icon">★</span> {doc.rating} ({doc.reviewCount} reviews)
                </p>
                <button className="book-now-btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Sample related doctors data
const relatedDoctors = [
  {
    name: 'Dr. Sarah Wilson',
    specialty: 'General Physician',
    rating: 4.8,
    reviewCount: 124,
    image: 'https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027266_1280.png'
  },
  {
    name: 'Dr. Michael Brown',
    specialty: 'Family Medicine',
    rating: 4.9,
    reviewCount: 95,
    image: 'https://cdn.pixabay.com/photo/2017/01/31/13/14/avatar-2026518_960_720.png'
  },
  {
    name: 'Dr. Emily Parker',
    specialty: 'Internal Medicine',
    rating: 4.7,
    reviewCount: 83,
    image: 'https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027266_1280.png'
  }
];

const DoctorDetailsPage = () => {
  const doctorData = {
    name: 'Dr. Richard James',
    specialty: 'General Physician',
    qualification: 'MBBS',
    experience: 4,
    fee: 50,
    image: 'https://cdn.pixabay.com/photo/2017/01/31/13/14/avatar-2026518_960_720.png',
    about:
      'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
  };

  return <DoctorDetails doctor={doctorData} />;
};

export default DoctorDetailsPage;