import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './AllDoctors.css';
import { doctorsData } from './DoctorData';

const AllDoctors = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get specialty from URL query parameters
  const searchParams = new URLSearchParams(location.search);
  const specialtyParam = searchParams.get('specialty');

  const [selectedCategory, setSelectedCategory] = useState(specialtyParam || 'all');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const doctors = doctorsData.map(doc => ({
    ...doc,
  }));

  const categories = ['all', ...new Set(doctors.map(doctor => doctor.specialty))];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsSidebarOpen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (specialtyParam && categories.includes(specialtyParam)) {
      setSelectedCategory(specialtyParam);
    }
  }, [specialtyParam, categories]);

  const filteredDoctors =
    selectedCategory === 'all'
      ? doctors
      : doctors.filter(doctor => doctor.specialty === selectedCategory);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="doctors-page-container">
      {/* Mobile toggle button */}
      <button
        className="sidebar-toggle"
        onClick={toggleSidebar}
        style={{ display: windowWidth <= 768 ? 'block' : 'none' }}
      >
        {isSidebarOpen ? '✕' : '☰'} Categories
      </button>

      <div className="doctors-layout">
        {/* Sidebar */}
        <aside className={`categories-sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
          <h3 className="sidebar-title">Categories</h3>
          <ul className="category-list">
            {categories.map((category) => (
              <li
                key={category}
                className={`category-item ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(category);
                  navigate(`/alldoctors?specialty=${encodeURIComponent(category)}`);
                  if (windowWidth <= 768) {
                    setIsSidebarOpen(false);
                  }
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main content */}
        <section className="top-doctors-section" id="topd">
          <h2>Select Doctors to Book</h2>
          <p>
            Simply browse through our extensive list of trusted doctors.
            {selectedCategory !== 'all' && (
              <span className="filter-indicator"> 
                {' '} <br />
                Filtered by: <strong>{selectedCategory}</strong>
              </span>
            )}
          </p>

          <div className="doctor-grid">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor) => (
                <Link
                  to={`/doctor/${doctor.id}`}
                  key={doctor.id}
                  className="doctor-card-link"
                >
                  <div className="doctor-card">
                    <div className="image-container">
                      <img src={doctor.image} alt={doctor.name} loading="lazy" />
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
              ))
            ) : (
              <div className="no-results">No doctors found in this category</div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllDoctors;
