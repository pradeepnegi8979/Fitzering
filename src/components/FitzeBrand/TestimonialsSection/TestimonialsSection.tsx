import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './TestimonialsSection.css';
import dibLogo from '../../../assets/DIB.svg';
import gemsEducation from '../../../assets/gems-education.svg';
import RostamaniGroup from '../../../assets/rostamani-group.svg';
export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: "A workplace wellness campaign became something employees actively joined, followed and celebrated together. The experience created real participation across teams, not just passive awareness.",
      name: "Employee Engagement Campaign",
      role: "Dubai Islamic Bank",
     avatar: dibLogo
    },
    {
      id: 2,
      quote: "fitze helped turn a community initiative into shared movement across parents, staff, students and families. The campaign felt inclusive, energetic and easy to join.",
      name: "Community Wellness Campaign",
      role: "GEMS Education",
      avatar:gemsEducation
    },
    {
      id: 3,
      quote: "The campaign blended digital participation with real-world excitement, giving the brand a memorable way to connect with people through movement and rewards.",
      name: "Brand Engagement Campaign",
      role: "AW Rostamani Group",
      avatar:RostamaniGroup
    }
  ];

  // Quadruple the set of testimonials to enable seamless looping on ultra-wide screens
  // const doubledTestimonials = [
  //   ...testimonials,
  //   ...testimonials,
  //   ...testimonials,
  //   ...testimonials
  // ];

  return (
    <section className="fitze-testimonials-section" id="fitze-testimonials">
      <Container>
        {/* Section Header Segment */}
        <div className="testimonials-header text-center">
          <div className="testi-subtitle-capsule-container">
            <span className="testi-subtitle-badge">
              BRAND IMPACT
            </span>
          </div>
          <h2 className="testi-heading" id="testimonials-title">
            Hear it from our Brand Partners.
          </h2>
        </div>
      

      {/* Full-width continuous auto-sliding marquee viewport */}
      <div className="testimonials-slider-viewport" id="testimonials-carousel-viewport">
        <Row className="">
          
          {testimonials.map((testi, idx) => (
            <Col lg={4} md={4} xs={12}>
            <div 
              className="testimonials-carousel-card" 
              key={`${testi.id}-${idx}`}
              id={`testi-card-${idx}`}
            >
              {/* Rectangular light gray logo placeholder */}
              
              <div className="testimonial-profile-photo-wrapper">
                  <img 
                    src={testi.avatar} 
                    alt={testi.name} 
                    className="testimonial-profile-photo"
                    referrerPolicy="no-referrer"
                    id={`testi-avatar-img-${idx}`}
                  />
                </div>
              
              {/* Italic testimonial body quote text */}
              <p className="testimonial-quote-body">
                "{testi.quote}"
              </p>
              
              {/* Thin crisp footer divider */}
              <div className="testimonial-divider-line"></div>
              
              {/* Profile details section */}
              <div className="testimonial-profile-block">
                
                <div className="testimonial-profile-details">
                  <h4 className="testimonial-profile-name">{testi.name}</h4>
                  <span className="testimonial-profile-role">{testi.role}</span>
                </div>
              </div>
            </div>
            </Col>
          ))}
        </Row>
      </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
