import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Speciality.css';

const specialities = [
  {
    name: 'General physician',
    image: 'https://cdn-icons-png.flaticon.com/512/3774/3774299.png',
  },
  {
    name: 'Gynecologist',
    image: 'https://cdn-icons-png.flaticon.com/512/3774/3774299.png',
  },
  {
    name: 'Dermatologist',
    image: 'https://cdn-icons-png.flaticon.com/512/3774/3774299.png',
  },
  {
    name: 'Pediatrician',
    image: 'https://cdn-icons-png.flaticon.com/512/3774/3774299.png',
  },
  {
    name: 'Neurologist',
    image: 'https://cdn-icons-png.flaticon.com/512/3774/3774299.png',
  },
  {
    name: 'Gastroenterologist',
    image: 'https://cdn-icons-png.flaticon.com/512/3774/3774299.png',
  },
];

const SpecialitySection = () => {
  const navigate = useNavigate();

  const handleClick = (speciality) => {
  // Capitalize first letter of each word
  const formattedSpeciality = speciality
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  navigate(`/alldoctors?specialty=${encodeURIComponent(formattedSpeciality)}`);
};


  return (
    <section className="speciality-section">
      <h2>Find by Speciality</h2>
      <p>
        Simply browse through our extensive list of trusted doctors,
        <br />
        schedule your appointment hassle-free.
      </p>
      <div className="speciality-grid">
        {specialities.map((item, index) => (
          <div
            key={index}
            className="speciality-card"
            onClick={() => handleClick(item.name)}
          >
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialitySection;