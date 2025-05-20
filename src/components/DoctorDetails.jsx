import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './DoctorDetails.css';
import { doctorsData } from './DoctorData';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DoctorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctorId = parseInt(id);
  const doctor = doctorsData.find(doc => doc.id === doctorId);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const generateDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const day = date.getDay();
      if (doctor.availability.includes('Mon-Fri') && (day === 0 || day === 6)) {
        continue;
      }
      dates.push({
        date: date,
        formatted: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
      });
    }
    return dates;
  };

  const generateTimeSlots = () => {
    const availabilityText = doctor.availability;
    const timeRangeMatch = availabilityText.match(/(\d+)(?:AM|PM)-(\d+)(?:AM|PM)/i);

    if (!timeRangeMatch) return [];

    let startHour = parseInt(timeRangeMatch[1]);
    let endHour = parseInt(timeRangeMatch[2]);

    if (availabilityText.includes('PM') && endHour !== 12) {
      endHour += 12;
    }
    if (availabilityText.includes('AM') && startHour === 12) {
      startHour = 0;
    }

    const slots = [];
    for (let hour = startHour; hour < endHour; hour++) {
      slots.push({
        time: `${hour % 12 === 0 ? 12 : hour % 12}:00 ${hour < 12 ? 'AM' : 'PM'}`,
        value: `${hour}:00`
      });
      slots.push({
        time: `${hour % 12 === 0 ? 12 : hour % 12}:30 ${hour < 12 ? 'AM' : 'PM'}`,
        value: `${hour}:30`
      });
    }
    return slots;
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleBookAppointment = () => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));

    if (!user) {
      toast.warning("Please login to proceed", { autoClose: 2000 });
      setTimeout(() => {
        navigate('/login');
      }, 2200);
      return;
    }

    if (selectedDate && selectedTime) {
      const appointment = {
        user: {
          name: user.name,
          email: user.email
        },
        doctor: {
          id: doctor.id,
          name: doctor.name,
          specialty: doctor.specialty
        },
        date: selectedDate.formatted,
        time: selectedTime.time,
        timestamp: new Date().toISOString()
      };

      const existingAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
      existingAppointments.push(appointment);
      localStorage.setItem('appointments', JSON.stringify(existingAppointments));

      toast.success(`Appointment booked with ${doctor.name} on ${selectedDate.formatted} at ${selectedTime.time}`, {
        autoClose: 3000
      });
    } else {
      toast.error("Please select both date and time for your appointment", { autoClose: 2000 });
    }
  };

  if (!doctor) {
    return (
      <div className="doctor-not-found">
        <ToastContainer />
        <h2>Doctor Not Found</h2>
        <p>Sorry, we couldn't find the doctor you're looking for.</p>
        <Link to="/" className="back-btn">Back to Doctors List</Link>
      </div>
    );
  }

  const availableDates = generateDates();
  const timeSlots = generateTimeSlots();

  return (
    <div className="doctor-details-page">
      <ToastContainer />
      <div className="container">
        <Link to="/alldoctors" className="back-btn">
          <span className="back-arrow">←</span> Back to Doctors List
        </Link>

        <div className="doctor-profile">
          <div className="profile-header">
            <div className="profile-image">
              <img src={doctor.image} alt={doctor.name} />
            </div>
            <div className="profile-info">
              <span className="status">
                <span className="dot"></span> {doctor.status}
              </span>
              <h1>{doctor.name}</h1>
              <p className="specialty">{doctor.specialty}</p>
              <div className="rating">
                <span className="stars">{'★'.repeat(Math.floor(doctor.rating))}{'☆'.repeat(5 - Math.floor(doctor.rating))}</span>
                <span className="rating-value">{doctor.rating}</span>
                <span className="reviews">({doctor.reviews} reviews)</span>
              </div>
            </div>
          </div>

          <div className="profile-details">
            <div className="detail-section">
              <h2>About Doctor</h2>
              <p>{doctor.description}</p>
            </div>

            <div className="detail-grid">
              <div className="detail-item">
                <h3>Experience</h3>
                <p>{doctor.experience}</p>
              </div>
              <div className="detail-item">
                <h3>Education</h3>
                <p>{doctor.education}</p>
              </div>
              <div className="detail-item">
                <h3>Languages</h3>
                <p>{doctor.languages.join(', ')}</p>
              </div>
              <div className="detail-item">
                <h3>Location</h3>
                <p>{doctor.location}</p>
              </div>
            </div>

            <div className="appointment-section">
              <div className="appointment-header">
                <h2>Appointment Information</h2>
                <span className="fee">Fee: {doctor.appointmentFee}</span>
              </div>

              <div className="availability">
                <h3>General Availability</h3> 
                <p>{doctor.availability}</p>
 
                <h3 className="mt-4">Choose a Date</h3>
                <div className="date-selector">
                  {availableDates.map((date, index) => (
                    <button
                      key={index}
                      className={`date-btn ${selectedDate === date ? 'selected' : ''}`}
                      onClick={() => handleDateSelect(date)}
                    >
                      {date.formatted}
                    </button>
                  ))} 
                </div>

                {selectedDate && (
                  <>
                    <h3 className="mt-4">Choose a Time</h3>
                    <div className="time-selector">
                      {timeSlots.map((time, index) => (
                        <button
                          key={index}
                          className={`time-btn ${selectedTime === time ? 'selected' : ''}`}
                          onClick={() => handleTimeSelect(time)}
                        >
                          {time.time}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <button
                className={`book-btn ${(!selectedDate || !selectedTime) ? 'disabled' : ''}`}
                onClick={handleBookAppointment}
                disabled={!selectedDate || !selectedTime}
              >
                {(!selectedDate || !selectedTime)
                  ? 'Select Date and Time'
                  : `Book Appointment for ${selectedDate.formatted} at ${selectedTime.time}`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
