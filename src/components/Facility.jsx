import React from 'react';

const HospitalFacilities = () => {
  const facilities = [
    {
      title: 'State-of-the-Art Operating Theatres',
      description: 'Our advanced operating rooms are equipped with the latest technology to ensure safe and precise surgical care.',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop&crop=center',
    },
    {
      title: '24/7 Emergency Services',
      description: 'Our emergency department is always open, offering prompt and expert care for urgent medical situations.',
      image: 'https://images.unsplash.com/photo-1516841273335-e39b37888115?w=600&h=400&fit=crop&crop=center',
    },
    {
      title: 'Modern Patient Rooms',
      description: 'Comfortable, private rooms designed to promote healing and well-being for our patients.',
      image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=600&h=400&fit=crop&crop=center',
    },
    {
      title: 'Advanced Imaging & Diagnostics',
      description: 'From MRI to ultrasound, we provide comprehensive diagnostic services for accurate and timely results.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center',
    },
    {
      title: 'Pharmacy Services',
      description: 'Our in-house pharmacy ensures easy access to prescribed medications for patients and their families.',
      image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=600&h=400&fit=crop&crop=center',
    },
  ];

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif', color: '#333' }}>
      <section id="hospital-facilities">
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '30px' }}>Our Facilities</h2>
        {facilities.map((facility, index) => (
          <div key={index} style={{ marginBottom: '40px' }}>
            <img
              src={facility.image}
              alt={facility.title}
              style={{ width: '85%',maxHeight:'80%',  borderRadius: '8px', marginBottom: '15px' }}
            />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{facility.title}</h3>
            <p>{facility.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HospitalFacilities;