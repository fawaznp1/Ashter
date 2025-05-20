import React, { useState } from 'react';
import './DoctorReview.css';
import dr10 from '../images/dr26 (10).webp'
import dr11 from '../images/dr26 (11).webp'
import dr12 from '../images/dr26 (12).webp'
import dr18 from '../images/dr26 (4).webp'
import dr19 from '../images/dr26 (5).webp'
import dr20 from '../images/dr26 (6).webp'

const DoctorReviews = () => {
  const [expanded, setExpanded] = useState(false);
  
  const doctorReviews = [
    {
      id: 1,
      name: "Dr. Elizabeth Parker",
      specialty: "Cardiology",
      years: 15,
      review: "Ashter Hospital provides an exceptional environment for patient care. The state-of-the-art equipment and collaborative atmosphere allow me to deliver the highest standard of cardiology services.",
      image: dr12
    },
    {
      id: 2,
      name: "Dr. James Wilson",
      specialty: "Neurology",
      years: 12,
      review: "The administrative support at Ashter Hospital is unmatched. They handle the logistics seamlessly, allowing me to focus entirely on patient care and complex neurological cases.",
      image: dr11
    },
    {
      id: 3,
      name: "Dr. Sophia Chang",
      specialty: "Pediatrics",
      years: 8,
      review: "Working in pediatrics at Ashter Hospital has been incredibly rewarding. The child-friendly facilities and specialized support staff create an ideal environment for our young patients.",
      image: dr10
    },
    {
      id: 4,
      name: "Dr. Marcus Johnson",
      specialty: "Orthopedic Surgery",
      years: 20,
      review: "The operating rooms at Ashter are equipped with cutting-edge technology that enhances surgical precision. The post-operative care team is equally impressive in ensuring patient recovery.",
      image: dr20
    },
    {
      id: 5,
      name: "Dr. Priya Patel",
      specialty: "Obstetrics & Gynecology",
      years: 14,
      review: "The maternity ward at Ashter Hospital is designed with both mother and baby in mind. As an OB/GYN, I appreciate the thoughtful layout and excellent nursing staff.",
      image: dr19
    },
    {
      id: 6,
      name: "Dr. Robert Martinez",
      specialty: "Emergency Medicine",
      years: 10,
      review: "The emergency department's workflow at Ashter is incredibly efficient. We have the resources and support needed to handle critical situations promptly and effectively.",
      image: dr20
    },
    {
      id: 7,
      name: "Dr. Grace Thompson",
      specialty: "Oncology",
      years: 18,
      review: "Ashter Hospital's approach to cancer care is holistic and patient-centered. The multidisciplinary team collaborations enhance our ability to provide comprehensive treatment plans.",
      image: "/api/placeholder/50/50"
    },
    {
      id: 8,
      name: "Dr. David Kim",
      specialty: "Dermatology",
      years: 9,
      review: "The dermatology facilities at Ashter are excellent. Having access to the latest diagnostic tools allows for precise skin condition assessments and treatment planning.",
      image: "/api/placeholder/50/50"
    },
    {
      id: 9,
      name: "Dr. Olivia Rodriguez",
      specialty: "Psychiatry",
      years: 11,
      review: "Mental health care at Ashter Hospital is given the priority it deserves. The supportive environment and resources available make it an ideal setting for psychiatric practice.",
      image: "/api/placeholder/50/50"
    },
    {
      id: 10,
      name: "Dr. William Chen",
      specialty: "Pulmonology",
      years: 16,
      review: "The respiratory care unit at Ashter is exceptionally well-managed. The collaboration between physicians, respiratory therapists, and nurses creates optimal outcomes for patients.",
      image: "/api/placeholder/50/50"
    },
    {
      id: 11,
      name: "Dr. Sarah Adams",
      specialty: "Endocrinology",
      years: 13,
      review: "Managing complex endocrine disorders requires a team approach, and Ashter Hospital excels in this regard. The dedicated diabetes education center is particularly valuable.",
      image: "/api/placeholder/50/50"
    },
    {
      id: 12,
      name: "Dr. Michael Taylor",
      specialty: "Gastroenterology",
      years: 15,
      review: "The endoscopy suite at Ashter is top-notch. Having reliable equipment and skilled support staff makes procedures safer and more efficient for our patients.",
      image: "/api/placeholder/50/50"
    },
    {
      id: 13,
      name: "Dr. Rebecca White",
      specialty: "Rheumatology",
      years: 12,
      review: "Ashter Hospital's commitment to chronic disease management is evident in their support for rheumatology services. The integrated approach with physical therapy is especially beneficial.",
      image: "/api/placeholder/50/50"
    },
    {
      id: 14,
      name: "Dr. Thomas Brown",
      specialty: "Urology",
      years: 17,
      review: "As a urologist, I value the hospital's investment in minimally invasive surgical equipment. It allows me to provide patients with procedures that result in faster recovery times.",
      image: "/api/placeholder/50/50"
    },
    {
      id: 15,
      name: "Dr. Jennifer Garcia",
      specialty: "Nephrology",
      years: 14,
      review: "The dialysis center at Ashter Hospital is exemplary. The attention to patient comfort during long treatments and the quality of care provided by the specialized nursing staff is impressive.",
      image: "/api/placeholder/50/50"
    },
    {
      id: 16,
      name: "Dr. Andrew Lee",
      specialty: "Ophthalmology",
      years: 19,
      review: "The eye care center at Ashter is equipped with precision diagnostic tools that enhance our ability to detect and treat vision issues early and effectively.",
      image: "/api/placeholder/50/50"
    },
    {
      id: 17,
      name: "Dr. Rachel Scott",
      specialty: "Hematology",
      years: 11,
      review: "The laboratory facilities at Ashter Hospital provide quick and accurate results, which is crucial for hematology diagnoses and treatment monitoring.",
      image: "/api/placeholder/50/50"
    },
    {
      id: 18,
      name: "Dr. Daniel Murphy",
      specialty: "Infectious Disease",
      years: 13,
      review: "Ashter Hospital's protocols for infection control are rigorous and effective. The hospital's commitment to antimicrobial stewardship is commendable.",
      image: "/api/placeholder/50/50"
    },
    {
      id: 19,
      name: "Dr. Michelle Watson",
      specialty: "Physical Medicine",
      years: 10,
      review: "The rehabilitation facilities at Ashter provide comprehensive resources for patients recovering from injuries or surgeries. The team approach enhances patient outcomes significantly.",
      image: "/api/placeholder/50/50"
    },
    {
      id: 20,
      name: "Dr. Jonathan Lopez",
      specialty: "Anesthesiology",
      years: 15,
      review: "As an anesthesiologist, patient safety is my priority. Ashter Hospital's commitment to surgical safety measures and quality improvement initiatives aligns perfectly with this goal.",
      image: "/api/placeholder/50/50"
    }
  ];

  const displayedReviews = expanded ? doctorReviews : doctorReviews.slice(0, 4);

  return (
    <div className="doctor-reviews-container">
      <h2 className="doctors-title">What Our Doctors Say</h2>
      <div className="doctors-grid">
        {displayedReviews.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <div className="doctor-profile">
              <div className="doctor-image-container">
                <img src={doctor.image} alt={doctor.name} className="doctor-image" />
              </div>
              <div className="doctor-details">
                <h3 className="doctor-name">{doctor.name}</h3>
                <p className="doctor-specialty">{doctor.specialty}</p>
                <p className="doctor-years">{doctor.years} years of experience</p>
              </div>
            </div>
            <div className="doctor-review">
              <p>"{doctor.review}"</p>
            </div>
          </div>
        ))}
      </div>
      {!expanded && doctorReviews.length > 4 && (
        <button className="view-more-btn" onClick={() => setExpanded(true)}>
          View More Doctor Testimonials
        </button>
      )}
      {expanded && (
        <button className="view-more-btn" onClick={() => setExpanded(false)}>
          Show Less
        </button>
      )}
    </div>
  );
};

export default DoctorReviews;