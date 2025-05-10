import React from 'react';
import './AllDoc.css';
import dr2 from '../images/dr2.webp' 

const doctors = [
  {
    name: 'Dr. Richard James',
    specialty: 'General physician',
    image: dr2,
    status: 'Available',
  },
  {
    name: 'Dr. Emily Larson',
    specialty: 'Gynecologist',
    image: dr2,
    status: 'Available',
  },
  {
    name: 'Dr. Sarah Patel',
    specialty: 'Dermatologist',
    image: dr2,
    status: 'Available',
  },
  {
    name: 'Dr. Christopher Lee',
    specialty: 'Pediatricians',
    image: dr2,
    status: 'Available',
  },
   {
    name: 'Dr. Aisha Khan',
    specialty: 'Cardiologist',
    image: dr2,
    status: 'Available',
  },
  {
    name: 'Dr. Marcus Hill',
    specialty: 'Orthopedic Surgeon',
    image: dr2,
    status: 'Available',
  },
  {
    name: 'Dr. Priya Verma',
    specialty: 'ENT Specialist',
    image: dr2,
    status: 'Available',
  },
  {
    name: 'Dr. John Chen',
    specialty: 'Neurologist',
    image: dr2,
    status: 'Available',
  },
  {
    name: 'Dr. Natalie Brown',
    specialty: 'Psychiatrist',
    image : dr2,
    status: 'Available',
  },
  {
    name: 'Dr. Ibrahim Al-Sayed',
    specialty: 'Urologist',
    image: dr2,
    status: 'Available',
  },
  {
    name: 'Dr. Elena Petrova',
    specialty: 'Oncologist',
    image: dr2,
    status: 'Available',
  },
  {
    name: 'Dr. Daniel Lee',
    specialty: 'Pulmonologist',
    image: dr2,
    status: 'Available',
  },
  {
    name: 'Dr. Susan Green',
    specialty: 'Nephrologist',
    image: dr2,
    status: 'Available',
  },
  {
    name: 'Dr. Tomoko Yamada',
    specialty: 'Endocrinologist',
    image: dr2,
    status: 'Available',
  },
  {
    name: 'Dr. Rafael Silva',
    specialty: 'Ophthalmologist',
    image: dr2,
    status: 'Available',
  },
  {
    name: 'Dr. Meera Sinha',
    specialty: 'Rheumatologist',
    image: dr2,
    status: 'Available',
  },
  {
    name: 'Dr. Eric Johnson',
    specialty: 'Plastic Surgeon',
    image: dr2,
    status: 'Available',
  },
  {
    name: 'Dr. Hana Mahmoud',
    specialty: 'Hematologist',
    image: dr2,
    status: 'Available',
  },
  {
    name: 'Dr. Oliver Stone',
    specialty: 'Gastroenterologist',
    image: dr2,
    status: 'Available',
  },
];

const TopDoctors = () => {
  return (
    <section className="top-doctors-section">
      <h2>Top Doctors to Book</h2>
      <p>
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="doctor-grid">
        {doctors.map((doctor, index) => (
          <div key={index} className="doctor-card">
            <img src={doctor.image} alt={doctor.name} loading='lazy' />
            <div className="doctor-info">
              <span className="status">
                <span className="dot"></span> {doctor.status}
              </span>
              <h3>{doctor.name}</h3>
              <p>{doctor.specialty}</p>
            </div>
          </div>
        ))} 
      </div>
    </section>
  );
};

export default TopDoctors;
