import React, { useState } from 'react';
import './PatientReview.css';

const PatientReviews = () => {
  const [expanded, setExpanded] = useState(false);
  
  const patientReviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "May 10, 2025",
      review: "The care I received at Ashter Hospital was exceptional. The nurses checked on me regularly and the doctor took time to explain my treatment plan thoroughly. The facilities were clean and modern.",
      image: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
      id: 2,
      name: "Michael Thompson",
      rating: 5,
      date: "April 28, 2025",
      review: "After my surgery at Ashter, I couldn't be more grateful for the attentive care. The staff made a stressful situation much more comfortable, and my recovery has been smoother than expected.",
      image: "https://randomuser.me/api/portraits/men/34.jpg"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      rating: 4,
      date: "April 15, 2025",
      review: "I was nervous about my procedure, but the staff at Ashter Hospital put me at ease. Everyone from reception to the surgical team was professional and compassionate.",
      image: "https://randomuser.me/api/portraits/women/35.jpg"
    },
    {
      id: 4,
      name: "David Wilson",
      rating: 5,
      date: "March 30, 2025",
      review: "My emergency room visit was handled quickly and professionally. The doctors were knowledgeable and took my concerns seriously. Very impressed with Ashter's standard of care.",
      image: "https://randomuser.me/api/portraits/men/36.jpg"
    },
    {
      id: 5,
      name: "Jessica Patel",
      rating: 5,
      date: "March 22, 2025",
      review: "The maternity ward at Ashter Hospital is top-notch. The nurses were incredibly supportive during labor, and the postpartum care was fantastic. Couldn't have asked for a better birthing experience.",
      image: "https://randomuser.me/api/portraits/women/37.jpg"
    },
    {
      id: 6,
      name: "Robert Chen",
      rating: 4,
      date: "March 15, 2025",
      review: "My elderly father was treated with dignity and respect during his stay. The staff was patient and took time to address all our questions and concerns.",
      image: "https://randomuser.me/api/portraits/men/38.jpg"
    },
    {
      id: 7,
      name: "Amanda Brooks",
      rating: 5,
      date: "February 28, 2025",
      review: "The pediatric department is wonderful. The doctors made my child feel comfortable and were great at explaining everything in a way she could understand.",
      image: "https://randomuser.me/api/portraits/women/36.jpg"
    },
    {
      id: 8,
      name: "Thomas Garcia",
      rating: 4,
      date: "February 15, 2025",
      review: "From admission to discharge, my experience was smooth and well-organized. The physical therapy team was especially helpful in getting me back on my feet.",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      id: 9,
      name: "Olivia Washington",
      rating: 5,
      date: "January 30, 2025",
      review: "I've been to several hospitals in the area, and Ashter stands out for its patient-centered approach. I never felt like just another case number.",
      image: "https://randomuser.me/api/portraits/women/37.jpg"
    },
    {
      id: 10,
      name: "James Kim",
      rating: 5,
      date: "January 22, 2025",
      review: "The cardiac care unit saved my life. The quick response and expertise of the team was remarkable. I'm eternally grateful to everyone at Ashter Hospital.",
      image: "https://randomuser.me/api/portraits/men/26.jpg"
    },
    {
      id: 11,
      name: "Sofia Martinez",
      rating: 4,
      date: "January 10, 2025",
      review: "The outpatient services are efficient and well-run. I was in and out for my procedure with minimal waiting time.",
      image: "https://randomuser.me/api/portraits/women/38.jpg"
    },
    {
      id: 12,
      name: "William Taylor",
      rating: 5,
      date: "December 28, 2024",
      review: "Having chronic health issues means I visit hospitals frequently. Ashter has been by far the most accommodating and understanding of my needs.",
      image: "https://randomuser.me/api/portraits/men/27.jpg"
    },
    {
      id: 13,
      name: "Sophia Lee",
      rating: 4,
      date: "December 15, 2024",
      review: "The hospital's commitment to follow-up care impressed me. They called to check on me several times after discharge.",
      image: "https://randomuser.me/api/portraits/women/39.jpg"
    },
    {
      id: 14,
      name: "Daniel Brown",
      rating: 5,
      date: "December 5, 2024",
      review: "When my child needed emergency surgery, Ashter Hospital's pediatric surgical team was amazing. They explained everything and made us feel secure during a scary time.",
      image: "https://randomuser.me/api/portraits/men/39.jpg"
    },
    {
      id: 15,
      name: "Natalie Cooper",
      rating: 5,
      date: "November 22, 2024",
      review: "The oncology department provided not just medical care but emotional support through my cancer journey. I cannot praise them enough.",
      image: "https://randomuser.me/api/portraits/women/40.jpg"
    },
    {
      id: 16,
      name: "Christopher Adams",
      rating: 4,
      date: "November 10, 2024",
      review: "I appreciated the transparency regarding costs and insurance. The financial counselors at Ashter were helpful in navigating the complicated billing process.",
      image: "https://randomuser.me/api/portraits/men/40.jpg"
    },
    {
      id: 17,
      name: "Ava Robinson",
      rating: 5,
      date: "October 30, 2024",
      review: "The rehabilitation services helped me regain mobility after my accident. The therapists were encouraging and knowledgeable.",
      image: "https://randomuser.me/api/portraits/women/41.jpg"
    },
    {
      id: 18,
      name: "Ryan Murphy",
      rating: 5,
      date: "October 15, 2024",
      review: "The mental health services at Ashter Hospital are comprehensive and destigmatizing. I felt respected and heard throughout my treatment.",
      image: "https://randomuser.me/api/portraits/men/41.jpg"
    },
    {
      id: 19,
      name: "Isabella White",
      rating: 4,
      date: "October 5, 2024",
      review: "The labor and delivery nurses were my rocks during childbirth. They anticipated my needs and provided incredible support.",
      image: "https://randomuser.me/api/portraits/women/42.jpg"
    },
    {
      id: 20,
      name: "Ethan Phillips",
      rating: 5,
      date: "September 28, 2024",
      review: "After my heart attack, the cardiac rehab program at Ashter gave me the tools and confidence to make necessary lifestyle changes. I'm healthier now than I've been in years.",
      image: "https://randomuser.me/api/portraits/men/42.jpg"
    }
  ];

  const displayedReviews = expanded ? patientReviews : patientReviews.slice(0, 3);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? "star filled" : "star"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="patient-reviews-container">
      <h2 className="reviews-title">Patient Testimonials</h2>
      <div className="reviews-wrapper">
        {displayedReviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <img className="reviewer-image" src={review.image} alt={`${review.name}`} />
              <div className="reviewer-info">
                <h3 className="reviewer-name">{review.name}</h3>
                <div className="rating">
                  {renderStars(review.rating)}
                </div>
                <p className="review-date">{review.date}</p>
              </div>
            </div>
            <p className="review-text">{review.review}</p>
          </div>
        ))}
      </div>
      {!expanded && patientReviews.length > 3 && (
        <button className="more-button" onClick={() => setExpanded(true)}>
          Show More Reviews
        </button>
      )}
      {expanded && (
        <button className="more-button" onClick={() => setExpanded(false)}>
          Show Less
        </button>
      )}
    </div>
  );
};

export default PatientReviews;