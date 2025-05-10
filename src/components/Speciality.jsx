import React from 'react';
import './Speciality.css';

const specialities = [
  {
    name: 'General physician',
    image: 'https://cdn-icons-png.flaticon.com/512/3774/3774299.png',
  },
  {
    name: 'Gynecologist',
    image: 'https://cdn-icons-png.flaticon.com/512/3774/3774304.png',
  },
  {
    name: 'Dermatologist',
    image: 'https://cdn-icons-png.flaticon.com/512/3774/3774306.png',
  },
  {
    name: 'Pediatricians',
    image: 'https://cdn-icons-png.flaticon.com/512/3774/3774309.png',
  },
  {
    name: 'Neurologist',
    image: 'https://cdn-icons-png.flaticon.com/512/3774/3774297.png',
  },
  {
    name: 'Gastroenterologist',
    image: 'https://cdn-icons-png.flaticon.com/512/3774/3774302.png',
  },
];

const SpecialitySection = () => {
  const handleClick = (speciality) => {
    alert(`You clicked on ${speciality}`);
    // You can navigate or filter here instead of alert
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
