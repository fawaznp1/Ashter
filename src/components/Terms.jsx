import React from 'react';

const Terms = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif', color: '#333' }}>
      {/* Terms and Conditions */}
      <section id="terms-conditions">
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '15px' }}>Terms and Conditions</h2>
        <p>
          By accessing and using the services provided by <strong>Ashter Hospital</strong>, you agree to the following terms and conditions. Please read them carefully.
        </p>
        
        <h3 style={{ fontSize: '1.2rem', marginTop: '20px', marginBottom: '10px' }}>Use of Services</h3>
        <ul>
          <li>You agree to use Ashter Hospital's services responsibly and in compliance with all applicable laws and regulations.</li>
          <li>You must not misuse or attempt to gain unauthorized access to any part of our systems or services.</li>
          <li>All information provided during registration, appointment booking, or service use must be accurate and complete.</li>
        </ul>
        
        <h3 style={{ fontSize: '1.2rem', marginTop: '20px', marginBottom: '10px' }}>Disclaimer</h3>
        <p>
          The services and information provided by Ashter Hospital are intended for general healthcare purposes and are offered "as is" without any warranties, express or implied. We do not guarantee the accuracy, completeness, or suitability of the information for any particular purpose. Ashter Hospital shall not be held liable for any direct or indirect damages arising from the use of our services.
        </p>
        
        <h3 style={{ fontSize: '1.2rem', marginTop: '20px', marginBottom: '10px' }}>Modifications</h3>
        <p>
          Ashter Hospital reserves the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on this page. Continued use of our services constitutes acceptance of the updated terms.
        </p>
        
        <p>
          For any questions or clarifications regarding these Terms and Conditions, please contact us at <a href="mailto:support@ashterhospital.com" style={{ color: '#007BFF', textDecoration: 'underline' }}>support@ashterhospital.com</a>.
        </p>
      </section>
    </div>
  );
};

export default Terms;
