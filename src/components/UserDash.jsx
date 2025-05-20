import React, { useEffect, useState } from 'react';
import './UserDash.css';
import { useNavigate } from 'react-router-dom';





const UserDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();


  const handleCancel = (indexToRemove) => {
  const updatedAppointments = appointments.filter((_, i) => i !== indexToRemove);
  setAppointments(updatedAppointments);

  const allAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  const filteredAllAppointments = allAppointments.filter(
    appt => !(appt.user.email === loggedInUser.email && appointments[indexToRemove].timestamp === appt.timestamp)
  );

  localStorage.setItem('appointments', JSON.stringify(filteredAllAppointments));
};

const handleEdit = () => {
  navigate('/alldoctors');
};


  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const allAppointments = JSON.parse(localStorage.getItem('appointments')) || [];

    if (loggedInUser) {
      const userAppointments = allAppointments.filter(
        (appt) => appt.user.email === loggedInUser.email
      );
      setAppointments(userAppointments);
    }
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Your Appointments</h2>
      {appointments.length === 0 ? (
        <p className="no-appointments">You have no booked appointments.</p>
      ) : (
        <div className="appointments-list">
         {appointments.map((appt, index) => (
  <div key={index} className="appointment-card">
   

    <h3>{appt.doctor.name}</h3>
    <p><strong>Specialty:</strong> {appt.doctor.specialty}</p>
    <p><strong>Date:</strong> {appt.date}</p>
    <p><strong>Time:</strong> {appt.time}</p>
    <p><strong>Booked By:</strong> {appt.user.name} ({appt.user.email})</p>
    <p className="timestamp"><strong>Booked On:</strong> {new Date(appt.timestamp).toLocaleString()}</p>

    {/* Buttons */}
    <div className="appointment-actions" style={{ marginTop: '10px' }}>
      <button
        onClick={() => handleEdit(index)}
        style={{ marginRight: '10px', padding: '6px 12px' }}
      >
        Edit
      </button>
      <button
        onClick={handleEdit}

        style={{ padding: '6px 12px', backgroundColor: 'red', color: 'white' }}
      >
        Cancel
      </button>
    </div>
  </div>
))}

        </div>
      )}
    </div>
  );
};

export default UserDashboard;
