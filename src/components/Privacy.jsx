import React from 'react';

const Privacy = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif', color: '#333' }}>
      {/* Privacy Policy */}
      <section id="privacy-policy" style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '15px' }}>Privacy Policy</h2>
        <p>
          At <strong>Ashter Hospital</strong>, we are committed to protecting your personal information and ensuring your privacy is respected at all times. This Privacy Policy outlines how we collect, use, and safeguard your data. By accessing or using our services, you agree to the terms described herein.
        </p>
        
        <h3 style={{ fontSize: '1.2rem', marginTop: '20px', marginBottom: '10px' }}>Information We Collect</h3>
        <ul>
          <li>Personal details you provide (such as name, contact information, and medical history).</li>
          <li>Usage data, including pages visited, interactions on our platform, and device information.</li>
    {/*       <li>Cookies and tracking technologies to enhance your experience.()</li> */}
        </ul>
        
        <h3 style={{ fontSize: '1.2rem', marginTop: '20px', marginBottom: '10px' }}>How We Use Your Information</h3>
        <ul>
          <li>To deliver and improve healthcare services at Ashter Hospital.</li>
          <li>To communicate with you regarding appointments, important updates, or health-related information.</li>
          <li>To comply with legal and regulatory requirements.</li>
        </ul>
        
        <h3 style={{ fontSize: '1.2rem', marginTop: '20px', marginBottom: '10px' }}>Your Rights</h3>
        <p>
          You have the right to access, modify, or request the deletion of your personal information. If you have any questions or concerns regarding your data or this Privacy Policy, please reach out to us at <a href="mailto:support@ashterhospital.com" style={{ color: '#007BFF', textDecoration: 'underline' }}>support@ashterhospital.com</a>.
        </p>
      </section>
    </div>
  );
};

export default Privacy;
