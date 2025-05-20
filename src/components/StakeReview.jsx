import React, { useState, useEffect } from 'react';
import './StakeReview.css';

const StakeholderReviews = () => {
  const [visibleReviews, setVisibleReviews] = useState(3);
  const [filter, setFilter] = useState('all');
  const [animateCards, setAnimateCards] = useState(false);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Community Leader",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 5,
      comment:  'Ashter Hospital has been an invaluable community partner, providing excellent healthcare services and supporting local health initiatives.',
      
      date: "May 10, 2025"
    },
    {
      id: 2,
      name: "Robert Chen",
      role: "Family Member",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 5,
      comment: "When my mother needed emergency care, the staff at Ashter responded quickly and professionally. I'm grateful for their dedication and expertise.",
      date: "May 5, 2025"
    },
    {
      id: 3,
      name: "Dr. Emily Parker",
      role: "Healthcare Partner",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 5,
      comment: "As a referring physician, I've consistently been impressed with Ashter Hospital's communication and quality of care. My patients always report positive experiences.",
      date: "April 28, 2025"
    },
    {
      id: 4,
      name: "Michael Thompson",
      role: "Patient",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      rating: 4,
      comment: "The care I received at Ashter Hospital was exceptional. Dr. Williams and his team made me feel comfortable throughout my treatment.",
      date: "April 22, 2025"
    },
    {
      id: 5,
      name: "Lisa Rodriguez",
      role: "Patient",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      rating: 5,
      comment: "The nursing staff at Ashter Hospital went above and beyond to ensure my recovery was smooth and comfortable. Couldn't have asked for better care.",
      date: "April 15, 2025"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Insurance Provider",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      rating: 5,
      comment: "Our partnership with Ashter Hospital has been exemplary. Their transparent billing and patient-focused approach aligns perfectly with our values.",
      date: "April 10, 2025"
    },
    {
      id: 7,
      name: "Aisha Patel",
      role: "Patient",
      avatar: "https://randomuser.me/api/portraits/women/6.jpg",
      rating: 5,
      comment: "From admission to discharge, my experience at Ashter was seamless. The staff's attention to detail and compassion made all the difference.",
      date: "April 5, 2025"
    },
    {
      id: 8,
      name: "David Kim",
      role: "Medical Equipment Supplier",
      avatar: "https://randomuser.me/api/portraits/men/6.jpg",
      rating: 4,
      comment: "Working with Ashter Hospital has been a pleasure. Their procurement team is professional, and they prioritize quality equipment for patient care.",
      date: "March 30, 2025"
    },
    {
      id: 9,
      name: "Jennifer Lewis",
      role: "Patient",
      avatar: "https://randomuser.me/api/portraits/women/7.jpg",
      rating: 5,
      comment: "The rehabilitation team at Ashter helped me regain my independence after surgery. I'm forever thankful for their expertise and encouragement.",
      date: "March 25, 2025"
    },
    {
      id: 10,
      name: "Dr. Marcus Owens",
      role: "Medical Consultant",
      avatar: "https://randomuser.me/api/portraits/men/7.jpg",
      rating: 5,
      comment: "Ashter Hospital's commitment to medical excellence and continuous improvement makes them a standout healthcare provider in the region.",
      date: "March 20, 2025"
    },
    {
      id: 11,
      name: "Karen Martinez",
      role: "Community Health Partner",
      avatar: "https://randomuser.me/api/portraits/women/8.jpg",
      rating: 5,
      comment: "The outreach programs run by Ashter Hospital have significantly improved health outcomes in underserved communities. Their dedication is commendable.",
      date: "March 15, 2025"
    },
    {
      id: 12,
      name: "Thomas Nguyen",
      role: "Patient Family Member",
      avatar: "https://randomuser.me/api/portraits/men/8.jpg",
      rating: 5,
      comment: "When my father needed complex cardiac care, Ashter Hospital provided both medical expertise and emotional support for our entire family.",
      date: "March 10, 2025"
    },
    {
      id: 13,
      name: "Sandra Miller",
      role: "Local Business Owner",
      avatar: "https://randomuser.me/api/portraits/women/9.jpg",
      rating: 4,
      comment: "Ashter Hospital's employee wellness programs have helped reduce healthcare costs for our company while improving our staff's overall wellbeing.",
      date: "March 5, 2025"
    },
    {
      id: 14,
      name: "Hassan Ahmed",
      role: "Patient",
      avatar: "https://randomuser.me/api/portraits/men/9.jpg",
      rating: 5,
      comment: "The cultural sensitivity and personalized care I received at Ashter made a significant difference in my healing process. Truly exceptional service.",
      date: "February 28, 2025"
    },
    {
      id: 15,
      name: "Rebecca Taylor",
      role: "Healthcare Educator",
      avatar: "https://randomuser.me/api/portraits/women/10.jpg",
      rating: 5,
      comment: "Ashter Hospital has been an excellent partner for our nursing students' clinical rotations. Their staff's mentorship is invaluable to new healthcare professionals.",
      date: "February 25, 2025"
    },
    {
      id: 16,
      name: "George Washington",
      role: "Patient",
      avatar: "https://randomuser.me/api/portraits/men/10.jpg",
      rating: 5,
      comment: "The emergency department at Ashter Hospital saved my life. Their quick response and expert care were nothing short of miraculous.",
      date: "February 20, 2025"
    },
    {
      id: 17,
      name: "Maria Gomez",
      role: "Community Health Worker",
      avatar: "https://randomuser.me/api/portraits/women/11.jpg",
      rating: 5,
      comment: "Ashter Hospital's preventive care initiatives have made healthcare more accessible to many in our community who previously went without regular check-ups.",
      date: "February 15, 2025"
    },
    {
      id: 18,
      name: "Paul Johnson",
      role: "Pharmaceutical Partner",
      avatar: "https://randomuser.me/api/portraits/men/11.jpg",
      rating: 4,
      comment: "Our collaboration with Ashter Hospital on medication management programs has improved patient outcomes and reduced readmission rates.",
      date: "February 10, 2025"
    },
    {
      id: 19,
      name: "Olivia Wilson",
      role: "Patient",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      rating: 5,
      comment: "As someone with chronic health issues, I appreciate the coordinated care approach at Ashter Hospital. They treat the whole person, not just the symptoms.",
      date: "February 5, 2025"
    },
    {
      id: 20,
      name: "Dr. Richard Lee",
      role: "Medical Researcher",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
      rating: 5,
      comment: "Ashter Hospital's participation in clinical trials has contributed significantly to medical advancements. Their research ethics and protocols are exemplary.",
      date: "February 1, 2025"
    },
  ];

  // Get unique roles for filter
  const roles = ['all', ...new Set(reviews.map(review => review.role))];

  // Filter reviews based on selected role
  const filteredReviews = filter === 'all' 
    ? reviews 
    : reviews.filter(review => review.role === filter);

  const displayedReviews = filteredReviews.slice(0, visibleReviews);

  const handleLoadMore = () => {
    setAnimateCards(false);
    setTimeout(() => {
      setVisibleReviews(prev => Math.min(prev + 6, filteredReviews.length));
      setAnimateCards(true);
    }, 300);
  };

  const handleFilterChange = (newFilter) => {
    setAnimateCards(false);
    setTimeout(() => {
      setFilter(newFilter);
      setVisibleReviews(6);
      setAnimateCards(true);
    }, 300);
  };

  // Calculate average rating
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  // Animation effect
  useEffect(() => {
    setAnimateCards(true);
  }, []);

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
          ★
        </span>
      );
    }
    return stars; 
  };

  return (
    <div className="stakeholder-reviews">
      <div className="reviews-header">
        <h2 className="reviews-title">What Our Stakeholders Say</h2>
        <div className="title-underline"></div>
        <p className="reviews-description">
          Discover how Ashter Hospital is making a difference for patients, healthcare partners, and our community.
        </p>
        
       {/*  <div className="ratings-overview">
          <div className="stars-display">
            {renderStars(Math.round(averageRating))}
          </div>
          <span className="rating-number">{averageRating.toFixed(1)}/5</span>
          <span className="rating-count">({reviews.length} reviews)</span>
        </div> */}
      </div>

    {/*   <div className="filter-tabs">
        {roles.map(role => (
          <button
            key={role}
            onClick={() => handleFilterChange(role)}
            className={`filter-tab ${filter === role ? 'active' : ''}`}
          >
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        ))}
      </div> */}

      {/* Reviews Grid */}
      <div className="reviews-grid">
        {displayedReviews.map((review, index) => (
          <div 
            key={review.id}
            className={`review-card ${animateCards ? 'fade-in' : 'fade-out'}`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="review-content">
              <div className="reviewer-header">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="reviewer-avatar"
                  loading='lazy'
                />
                <div className="reviewer-info">
                  <h3>{review.name}</h3>
                  <div className="reviewer-meta">
                    <span className="reviewer-role">
                      {review.role}
                    </span>
                    <span className="review-date">{review.date}</span>
                  </div>
                  <div className="review-stars">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>
              <p className="review-text">"{review.comment}"</p>
            </div>
            <div className={`review-indicator ${review.rating === 5 ? 'five-star' : 'four-star'}`}></div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleReviews < filteredReviews.length && (
        <div className="load-more-container">
          <button
            onClick={handleLoadMore}
            className="load-more-button"
          >
             More Reviews
          </button>
        </div>
      )}

      {/* Summary Stats */}
      <div className="stats-section">
        <div className="stat-card">
          <div className="stat-number">{reviews.length}</div>
          <div className="stat-label">Total Reviews</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">
            {((reviews.filter(r => r.rating === 5).length / reviews.length) * 100).toFixed(0)}%
          </div>
          <div className="stat-label">5-Star Ratings</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">
            {reviews.filter(r => r.role === "Patient").length}
          </div>
          <div className="stat-label">Patient Reviews</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">
            {new Set(reviews.map(r => r.role)).size}
          </div>
          <div className="stat-label">Stakeholder Types</div>
        </div>
      </div>
    </div>
  );
};

export default StakeholderReviews;