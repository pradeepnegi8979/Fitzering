import React from 'react';
import { Container } from 'react-bootstrap';
import './TestimonialsSection.css';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam",
      name: "Sameer Rai",
      role: "CHALLENGE USER",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
    },
    {
      id: 2,
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam",
      name: "Sameer Rai",
      role: "EARNED AED 340 IN PAYOUTS",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    },
    {
      id: 3,
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam",
      name: "Sameer Rai",
      role: "LOST 4KG WITH FITZE",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
    },
    {
      id: 4,
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam",
      name: "Sameer Rai",
      role: "Product Head",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200"
    }
  ];

  // Quadruple the set of testimonials to enable seamless looping on ultra-wide screens
  const doubledTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials
  ];

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
            Hear it from our brand partners.
          </h2>
        </div>
      </Container>

      {/* Full-width continuous auto-sliding marquee viewport */}
      <div className="testimonials-slider-viewport" id="testimonials-carousel-viewport">
        <div className="testimonials-infinite-track">
          {doubledTestimonials.map((testi, idx) => (
            <div 
              className="testimonials-carousel-card" 
              key={`${testi.id}-${idx}`}
              id={`testi-card-${idx}`}
            >
              {/* Rectangular light gray logo placeholder */}
              <div className="testimonial-logo-box"></div>
              
              {/* Italic testimonial body quote text */}
              <p className="testimonial-quote-body">
                "{testi.quote}"
              </p>
              
              {/* Thin crisp footer divider */}
              <div className="testimonial-divider-line"></div>
              
              {/* Profile details section */}
              <div className="testimonial-profile-block">
                <div className="testimonial-profile-photo-wrapper">
                  <img 
                    src={testi.avatar} 
                    alt={testi.name} 
                    className="testimonial-profile-photo"
                    referrerPolicy="no-referrer"
                    id={`testi-avatar-img-${idx}`}
                  />
                </div>
                <div className="testimonial-profile-details">
                  <h4 className="testimonial-profile-name">{testi.name}</h4>
                  <span className="testimonial-profile-role">{testi.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
