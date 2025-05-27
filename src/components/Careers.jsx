import React from 'react';

const Careers = () => {
  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '40px 20px', 
      fontFamily: 'Arial, sans-serif', 
      color: '#2c3e50',
      lineHeight: '1.6',
      backgroundColor: '#f8f9fa'
    }}>
      <section id="careers" style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        border: '1px solid #e9ecef'
      }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          fontWeight: '700', 
          marginBottom: '20px',
          color: '#1a472a',
          textAlign: 'center',
          borderBottom: '3px solid #28a745',
          paddingBottom: '15px'
        }}>
          Careers at Ashter Hospital
        </h2>
        
        <p style={{
          fontSize: '1.1rem',
          marginBottom: '20px',
          textAlign: 'justify'
        }}>
          At <strong style={{ color: '#28a745' }}>Ashter Hospital</strong>, we are dedicated to fostering a supportive and dynamic work environment where healthcare professionals can thrive. We believe that our people are the heart of our mission to deliver exceptional patient care and make a meaningful difference in our community.
        </p>
        
        <p style={{
          fontSize: '1.1rem',
          marginBottom: '30px',
          textAlign: 'justify'
        }}>
          Whether you're a doctor, nurse, technician, or part of our essential support staff, we are always looking for passionate, skilled individuals who are committed to improving lives. Join us in our mission to provide compassionate, high-quality healthcare.
        </p>
        
        <h3 style={{ 
          fontSize: '1.5rem', 
          marginTop: '35px', 
          marginBottom: '20px',
          color: '#1a472a',
          fontWeight: '600'
        }}>
          Why Join Ashter Hospital?
        </h3>
        
        <ul style={{
          listStyleType: 'none',
          padding: '0',
          margin: '0'
        }}>
          {[
            'Collaborative and supportive team culture',
            'Opportunities for professional growth and development',
            'Cutting-edge facilities and technology',
            'A commitment to work-life balance and employee well-being',
            'Making a real difference in the lives of our patients and community'
          ].map((item, index) => (
            <li key={index} style={{
              padding: '12px 0',
              borderLeft: '4px solid #28a745',
              paddingLeft: '20px',
              marginBottom: '10px',
              backgroundColor: '#f8f9fa',
              borderRadius: '0 8px 8px 0',
              fontSize: '1.05rem'
            }}>
              {item}
            </li>
          ))}
        </ul>
        
        <div style={{
          marginTop: '40px',
          padding: '25px',
          backgroundColor: '#e8f5e8',
          borderRadius: '10px',
          border: '2px solid #28a745'
        }}>
          <p style={{ 
            marginBottom: '15px',
            fontSize: '1.1rem',
            fontWeight: '600',
            color: '#1a472a'
          }}>
            If you're ready to take the next step in your healthcare career, we invite you to explore current opportunities and apply today.
          </p>
          
          <p style={{ margin: '0', fontSize: '1.05rem' }}>
            For inquiries or to submit your resume, please contact us at{' '}
            <a 
              href="mailto:careers@ashterhospital.com" 
              style={{ 
                color: '#28a745', 
                textDecoration: 'none',
                fontWeight: '600',
                padding: '2px 4px',
                borderRadius: '4px',
                backgroundColor: 'white',
                border: '1px solid #28a745'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#28a745';
                e.target.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = '#28a745';
              }}
            >
              careers@ashterhospital.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Careers;