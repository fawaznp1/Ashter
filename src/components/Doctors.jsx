import React, { useState, useEffect } from 'react';
import './Doctors.css';
import dr2 from '../images/dr2.webp'

const doctors = [
  {
    name: 'Dr. Richard James',
    specialty: 'General physician',
    qualification: 'MBBS',
    experience: 4,
    fee: 50,
    image: dr2,
    about: 'Dr. James focuses on preventive medicine and effective treatment strategies.',
  },
  {
    name: 'Dr. Emily Larson',
    specialty: 'Gynecologist',
    qualification: 'MBBS, MD',
    experience: 6,
    fee: 70,
    image: '/api/placeholder/100/100',
    about: 'Experienced in women\'s health and reproductive care.',
  },
  {
    name: 'Dr. Sarah Patel',
    specialty: 'Dermatologist',
    qualification: 'MBBS, DDVL',
    experience: 5,
    fee: 65,
    image: '/api/placeholder/100/100',
    about: 'Specialist in skin care and treatments.',
  },
  {
    name: 'Dr. Michael Chen',
    specialty: 'Pediatricians',
    qualification: 'MBBS, DCH',
    experience: 8,
    fee: 80,
    image: '/api/placeholder/100/100',
    about: 'Specialized in child healthcare and development.',
  },
  {
    name: 'Dr. Lisa Rodriguez',
    specialty: 'Neurologist',
    qualification: 'MBBS, DM',
    experience: 10,
    fee: 90,
    image: '/api/placeholder/100/100',
    about: 'Expert in diagnosing and treating neurological disorders.',
  },
  {
    name: 'Dr. Robert Smith',
    specialty: 'Gastroenterologist',
    qualification: 'MBBS, DM',
    experience: 7,
    fee: 85,
    image: '/api/placeholder/100/100',
    about: 'Specializes in digestive system disorders and treatments.',
  },
];

// Extract unique specialties for filter options
const specialties = [...new Set(doctors.map(doc => doc.specialty))];

// Sidebar component
const Sidebar = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="sidebar">
      <h3>Filter by Specialty</h3>
      <div className="filter-buttons">
        {specialties.map((specialty) => (
          <button
            key={specialty}
            onClick={() => onFilterChange(specialty)}
            className={`filter-btn ${activeFilter === specialty ? 'active' : ''}`}
          >
            {specialty}
          </button>
        ))}
        <button 
          onClick={() => onFilterChange('')}
          className={`clear-btn ${activeFilter === '' ? 'active' : ''}`}
        >
          Show All
        </button>
      </div>
    </div>
  );
};

// Doctor Card component
const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card">
      <div className="doctor-image">
        <img src={doctor.image} alt={doctor.name} />
      </div>
      <div className="doctor-status">● Available</div>
      <h4>{doctor.name}</h4>
      <p className="specialty">{doctor.specialty}</p>
      <div className="doctor-details">
        <p><strong>Experience:</strong> {doctor.experience} years</p>
        <p><strong>Fee:</strong> ${doctor.fee}</p>
        <p><strong>Qualification:</strong> {doctor.qualification}</p>
      </div>
      <button className="book-btn">Book Appointment</button>
    </div>
  );
};

// Main component
const DoctorDirectory = () => {
  const [filter, setFilter] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Check window size for responsive design
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredDoctors = filter
    ? doctors.filter((doc) => doc.specialty === filter)
    : doctors;

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="doctor-directory">
      {isMobile && (
        <button className="mobile-filter-btn" onClick={toggleSidebar}>
          {sidebarOpen ? 'Hide Filters' : 'Show Filters'}
        </button>
      )}
      
      <div className="directory-container">
        <div className={`sidebar-container ${isMobile ? (sidebarOpen ? 'open' : 'closed') : ''}`}>
          <Sidebar activeFilter={filter} onFilterChange={(specialty) => {
            setFilter(specialty);
            if (isMobile) setSidebarOpen(false);
          }} />
        </div>
        
        <div className="doctors-container">
          <h2>Available Doctors {filter && `- ${filter}`}</h2>
          <div className="doctors-grid">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor, idx) => (
                <DoctorCard key={idx} doctor={doctor} />
              ))
            ) : (
              <div className="no-results">No doctors found for this specialty.</div>
            )}
          </div>
        </div>
      </div>
      
      {/* <style jsx>{`
        
      `}</style> */}
    </div>
  );
};

export default DoctorDirectory;