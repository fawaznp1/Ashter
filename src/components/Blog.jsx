import React from 'react';

const HospitalBlog = () => {
  return (
    <div style={{ 
      padding: '0', 
      backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      minHeight: '100vh'
    }}>
      {/* Header Section */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '60px 20px',
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{ 
          fontSize: '48px', 
          marginBottom: '20px', 
          fontWeight: '700',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          letterSpacing: '-1px'
        }}>
          🏥 Ashter Wellness Blog
        </h1>
        <p style={{
          fontSize: '20px',
          opacity: '0.9',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Your trusted source for health, wellness, and medical insights
        </p>
      </div>

      <div style={{ padding: '40px 20px', backgroundColor: '#f8fafc' }}>
        {/* Categories Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '30px', 
          maxWidth: '1200px',
          margin: '0 auto 60px auto'
        }}>
          {categories.map((cat, index) => (
            <div key={index} style={{ 
              backgroundColor: '#ffffff', 
              borderRadius: '16px', 
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)', 
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              ':hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.15)'
              }
            }}>
              <div style={{
                width: '100%',
                height: '200px',
                background: cat.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '60px',
                color: 'white'
              }}>
                {cat.icon}
              </div>
              <div style={{ padding: '25px' }}>
                <h3 style={{ 
                  fontSize: '22px', 
                  fontWeight: '700', 
                  marginBottom: '12px',
                  color: '#1e293b'
                }}>
                  {cat.title}
                </h3>
                <p style={{ 
                  fontSize: '15px', 
                  color: '#64748b',
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  {cat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Article */}
        <div style={{ 
          maxWidth: '900px', 
          margin: '0 auto', 
          backgroundColor: '#ffffff', 
          borderRadius: '20px', 
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          overflow: 'hidden'
        }}>
          {/* Article Header */}
          <div style={{
            background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
            padding: '40px',
            color: 'white',
            textAlign: 'center'
          }}>
            <h2 style={{ 
              fontSize: '32px', 
              fontWeight: '800', 
              margin: '0 0 15px 0',
              textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
            }}>
              The Road to Better Health: A Comprehensive Guide
            </h2>
            <p style={{
              fontSize: '18px',
              opacity: '0.9',
              margin: '0'
            }}>
              Your journey to wellness starts here
            </p>
          </div>

          {/* Article Content */}
          <div style={{ padding: '40px' }}>
            <div style={{
              fontSize: '18px',
              color: '#374151',
              lineHeight: '1.8',
              textAlign: 'justify'
            }}>
              <p style={{ marginBottom: '25px', fontSize: '17px' }}>
                Maintaining good health is a lifelong commitment, and it goes beyond just medical treatments. It requires a holistic approach that combines proper care, disciplined living, mental wellness, and physical fitness. In this comprehensive guide, we'll explore the key pillars of achieving and maintaining optimal health.
              </p>

              <div style={{ 
                backgroundColor: '#f0f9ff', 
                padding: '25px', 
                borderRadius: '12px', 
                marginBottom: '25px',
                borderLeft: '4px solid #0ea5e9'
              }}>
                <h4 style={{ 
                  fontSize: '20px', 
                  fontWeight: '700', 
                  marginBottom: '12px',
                  color: '#0c4a6e',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  🏥 Care & Cure
                </h4>
                <p style={{ margin: '0', fontSize: '16px' }}>
                  At the core of any hospital's mission is the commitment to care and cure. This includes diagnosing illnesses accurately, offering precise treatments, and ensuring patients are supported through their recovery journey. Modern hospitals serve as hubs of research, innovation, and compassionate care.
                </p>
              </div>

              <div style={{ 
                backgroundColor: '#fef3c7', 
                padding: '25px', 
                borderRadius: '12px', 
                marginBottom: '25px',
                borderLeft: '4px solid #f59e0b'
              }}>
                <h4 style={{ 
                  fontSize: '20px', 
                  fontWeight: '700', 
                  marginBottom: '12px',
                  color: '#92400e',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  ⏰ Disciplined Life
                </h4>
                <p style={{ margin: '0', fontSize: '16px' }}>
                  Discipline is the secret ingredient to a healthy life. Following regular schedules for meals, sleep, and exercise can significantly reduce the risk of chronic illnesses. Mental discipline—managing stress, maintaining positive relationships, and staying focused on health goals—is equally important.
                </p>
              </div>

              <div style={{ 
                backgroundColor: '#f0fdf4', 
                padding: '25px', 
                borderRadius: '12px', 
                marginBottom: '25px',
                borderLeft: '4px solid #22c55e'
              }}>
                <h4 style={{ 
                  fontSize: '20px', 
                  fontWeight: '700', 
                  marginBottom: '12px',
                  color: '#166534',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  💪 Importance of Fitness
                </h4>
                <p style={{ margin: '0', fontSize: '16px' }}>
                  Regular physical activity is vital for cardiovascular health, muscle strength, flexibility, and mental well-being. Exercise releases endorphins that elevate mood and reduce stress. Many hospitals now collaborate with fitness experts to design comprehensive wellness programs.
                </p>
              </div>

              <div style={{ 
                backgroundColor: '#fdf2f8', 
                padding: '25px', 
                borderRadius: '12px', 
                marginBottom: '25px',
                borderLeft: '4px solid #ec4899'
              }}>
                <h4 style={{ 
                  fontSize: '20px', 
                  fontWeight: '700', 
                  marginBottom: '12px',
                  color: '#9d174d',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  🧠 Mental Health Matters
                </h4>
                <p style={{ margin: '0', fontSize: '16px' }}>
                  Physical and mental health are deeply interconnected. Stress, anxiety, and depression can manifest in physical symptoms, while chronic illnesses can impact mental well-being. Modern healthcare prioritizes mental health through counseling, therapy, and mindfulness programs.
                </p>
              </div>

              <div style={{ 
                backgroundColor: '#ecfdf5', 
                padding: '25px', 
                borderRadius: '12px', 
                marginBottom: '25px',
                borderLeft: '4px solid #10b981'
              }}>
                <h4 style={{ 
                  fontSize: '20px', 
                  fontWeight: '700', 
                  marginBottom: '12px',
                  color: '#065f46',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  🥗 Nutrition & Diet
                </h4>
                <p style={{ margin: '0', fontSize: '16px' }}>
                  A balanced diet fuels the body and supports the immune system. Hospital dietitians play a crucial role in educating patients about proper nutrition, creating specialized diet plans for medical conditions, and promoting sustainable healthy eating habits.
                </p>
              </div>

              <div style={{ 
                backgroundColor: '#eff6ff', 
                padding: '25px', 
                borderRadius: '12px', 
                marginBottom: '30px',
                borderLeft: '4px solid #3b82f6'
              }}>
                <h4 style={{ 
                  fontSize: '20px', 
                  fontWeight: '700', 
                  marginBottom: '12px',
                  color: '#1e3a8a',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  🛡️ Preventive Care
                </h4>
                <p style={{ margin: '0', fontSize: '16px' }}>
                  Prevention is always better than cure. Modern hospitals emphasize regular screenings, vaccinations, and health check-ups to detect issues early and reduce the risk of severe complications. Community education about preventive measures is a cornerstone of contemporary healthcare.
                </p>
              </div>

              <div style={{
                backgroundColor: '#f8fafc',
                padding: '30px',
                borderRadius: '12px',
                textAlign: 'center',
                border: '2px dashed #cbd5e1'
              }}>
                <p style={{ 
                  fontSize: '18px', 
                  fontWeight: '600', 
                  color: '#1e293b',
                  marginBottom: '15px'
                }}>
                  🌟 Conclusion
                </p>
                <p style={{ 
                  fontSize: '16px', 
                  color: '#475569', 
                  lineHeight: '1.7',
                  margin: '0'
                }}>
                  Good health is a partnership between individuals, healthcare professionals, and the community. By embracing a holistic approach that values care, discipline, physical fitness, mental wellness, proper nutrition, and preventive care, we can build a healthier future together. Hospitals are not just places to heal; they are centers of learning, support, and inspiration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          marginTop: '50px',
          padding: '40px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '16px',
          maxWidth: '600px',
          margin: '50px auto 0 auto',
          color: 'white'
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '15px'
          }}>
            Stay Connected for More Health Insights
          </h3>
          <p style={{
            fontSize: '16px',
            opacity: '0.9',
            margin: '0'
          }}>
            Subscribe to our newsletter (blogs@ashter.com) for the latest medical breakthroughs, and wellness advice delivered straight to your inbox.
          </p>
        </div>
      </div>
    </div>
  );
};

// Enhanced Categories Data with icons and gradients
const categories = [
  {
    title: 'Care & Cure',
    icon: '🏥',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    description: 'Compassionate healthcare and effective treatments that save lives through advanced medical care.'
  },
  {
    title: 'Disciplined Life',
    icon: '⏰',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    description: 'Building sustainable routines and healthy habits for better health and balanced living.'
  },
  {
    title: 'Fitness & Exercise',
    icon: '💪',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    description: 'Why staying active and maintaining physical fitness is crucial for long-term health and vitality.'
  },
  {
    title: 'Mental Health',
    icon: '🧠',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    description: 'Supporting emotional and psychological well-being through comprehensive mental health care.'
  },
  {
    title: 'Nutrition & Diet',
    icon: '🥗',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    description: 'Healthy eating habits and balanced nutrition for a stronger immune system and better health.'
  },
  {
    title: 'Preventive Care',
    icon: '🛡️',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    description: 'Early detection and prevention strategies for maintaining optimal health throughout life.'
  }
];

export default HospitalBlog;