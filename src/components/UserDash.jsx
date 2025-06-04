import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  
  const styles = {
    dashboardContainer: {
      maxWidth: '800px',
      margin: '40px auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    pageTitle: {
      textAlign: 'center',
      marginBottom: '30px',
      color: '#2c3e50',
      fontSize: '28px',
    },
    noAppointments: {
      textAlign: 'center',
      fontStyle: 'italic',
      color: '#7f8c8d',
      padding: '40px 0',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      border: '1px dashed #ddd',
    },
    appointmentsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    appointmentCard: {
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      backgroundColor: '#fff',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      ':hover': {
        transform: 'translateY(-3px)',
        boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
      },
    },
    cardHeader: {
      marginBottom: '15px',
      color: '#2c3e50',
      fontSize: '20px',
      borderBottom: '1px solid #f0f0f0',
      paddingBottom: '10px',
    },
    cardContent: {
      margin: '4px 0',
      color: '#555',
      lineHeight: '1.6',
    },
    timestamp: {
      fontSize: '0.85em',
      color: '#95a5a6',
      marginTop: '10px',
      fontStyle: 'italic',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '15px',
      gap: '10px',
    },
    editButton: {
      padding: '8px 16px',
      backgroundColor: '#067057',
      color: 'white',
      border: 'none',
      borderRadius: '25px',
      cursor: 'pointer',
      fontWeight: '600',
      transition: 'background-color 0.2s',
    },
    cancelButton: {
      padding: '8px 16px',
      backgroundColor: '#73080c',
      color: 'white',
      border: 'none',
      borderRadius: '25px',
      cursor: 'pointer',
      fontWeight: '600',
      transition: 'background-color 0.2s',
    },
    statusBadge: {
      display: 'inline-block',
      padding: '4px 8px',
      borderRadius: '12px',
      fontSize: '0.75rem',
      fontWeight: 'bold',
      backgroundColor: '#2ecc71',
      color: 'white',
      marginLeft: '8px',
    }
  };

  const handleCancel = (indexToRemove) => {
    const appointmentToRemove = appointments[indexToRemove]; 
    if (!appointmentToRemove) return;
    
    // Confirm before canceling
    if (window.confirm("Are you sure you want to cancel this appointment?")) {
      const updatedAppointments = appointments.filter((_, i) => i !== indexToRemove);
      setAppointments(updatedAppointments);
      
      const allAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
      
      const filteredAllAppointments = allAppointments.filter(
        appt => !(appt.user.email === loggedInUser.email && appointmentToRemove.timestamp === appt.timestamp)
      );
      
      localStorage.setItem('appointments', JSON.stringify(filteredAllAppointments));
    }
  };
  
  const handleEdit = (appointment) => {
    // You could store the appointment to edit in localStorage or pass it via state
    localStorage.setItem('appointmentToEdit', JSON.stringify(appointment));
    navigate('/alldoctors');
  };
  
  const formatDate = (dateStr) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };
  
  useEffect(() => {
    const fetchAppointments = () => {
      setIsLoading(true);
      try {
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        const allAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
        
        if (loggedInUser) {
          const userAppointments = allAppointments.filter(
            (appt) => appt.user.email === loggedInUser.email
          );
          // Sort appointments by date (newest first)
          userAppointments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
          setAppointments(userAppointments);
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchAppointments();
  }, []);
  
  if (isLoading) {
    return <div style={styles.dashboardContainer}>
      <h2 style={styles.pageTitle}>Loading appointments...</h2>
    </div>;
  }
  
  return (
    <div style={styles.dashboardContainer}>
      <h2 style={styles.pageTitle}>Your Appointments</h2>
      
      {appointments.length === 0 ? (
        <div style={styles.noAppointments}>
          <p>You have no booked appointments.</p>
          <button 
            style={{...styles.editButton, marginTop: '15px'}}
            onClick={() => navigate('/alldoctors')}
          >
            Book an Appointment
          </button>
        </div>
      ) : (
        <div style={styles.appointmentsList}>
          {appointments.map((appt, index) => (
            <div key={index} style={styles.appointmentCard}>
              <h3 style={styles.cardHeader}>
                {appt.doctor.name}
                <span style={styles.statusBadge}>Confirmed</span>
              </h3>
              
              <p style={styles.cardContent}><strong>Specialty:</strong> {appt.doctor.specialty}</p>
              <p style={styles.cardContent}><strong>Date:</strong> {(appt.date)}</p>
              <p style={styles.cardContent}><strong>Time:</strong> {appt.time}</p>
              <p style={styles.cardContent}><strong>Patient:</strong> {appt.user.name} </p>

              
              
              <p style={styles.timestamp}>
                Booked on {new Date(appt.timestamp).toLocaleString()} by ({appt.user.email})
              </p>
              
              <div style={styles.buttonContainer}>
                <button
                  onClick={() => handleEdit(appt)}
                  style={styles.editButton}
                >
                  Reschedule
                </button>
                <button
                  onClick={() => handleCancel(index)}
                  style={styles.cancelButton}
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