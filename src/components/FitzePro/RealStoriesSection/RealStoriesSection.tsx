import React from 'react';
import { Container } from 'react-bootstrap';
import { Star } from 'lucide-react';
import './RealStoriesSection.css';

interface Testimonial {
  id: number;
  rating: number;
  quote: string;
  avatarUrl: string;
  name: string;
  subtext: string;
}

export const RealStoriesSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      rating: 5,
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      name: "Sameer Rai",
      subtext: "CHALLENGE USER",
    },
    {
      id: 2,
      rating: 5,
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      name: "Sameer Rai",
      subtext: "EARNED AED 340 IN PAYOUTS",
    },
    {
      id: 3,
      rating: 5,
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      name: "Sameer Rai",
      subtext: "LOST 4KG WITH FITZE",
    },
    {
      id: 4,
      rating: 5,
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      name: "Sameer Rai",
      subtext: "Product Head",
    }
  ];

  // Triplicate the testimonials list to create an infinite, uninterrupted marquee crawl
  const marqueeItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="fitzepro-real-stories-section-wrapper" id="real-stories-pro">
      <Container className="text-center py-5">
        {/* Rounded Badge */}
        <div className="real-stories-pill-container d-inline-block">
          <span className="real-stories-badge-pill">REAL STORIES</span>
        </div>

        {/* Dynamic Bold Catchphrase Header */}
        <h2 className="real-stories-main-title font-sans">
          What users are getting from <span className="real-stories-title-pro">PRO</span>
        </h2>
      </Container>

      {/* Overflow elements horizontal carousel track */}
      <div className="real-stories-slider-outer-container">
        <div className="real-stories-slider-inner-marquee">
          {marqueeItems.map((item, index) => (
            <div 
              className="real-stories-single-card" 
              key={`story-card-${item.id}-${index}`}
            >
              {/* Star Rating Panel (Matches original color exactly) */}
              <div className="real-stories-rating-stars-row d-flex gap-1">
                {[...Array(item.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="real-stories-custom-star-fill" 
                    size={16} 
                  />
                ))}
              </div>

              {/* Italicized Testimonial Quote Block */}
              <p className="real-stories-quote-paragraph italic font-sans">
                "{item.quote}"
              </p>

              {/* Horizontal elegant splitter row */}
              <hr className="real-stories-divider-line" />

              {/* Avatar and Info Frame Segment */}
              <div className="real-stories-person-footer-wrapper d-flex align-items-center gap-3">
                <div className="real-stories-avatar-circle-frame">
                  <img 
                    src={item.avatarUrl} 
                    alt={item.name} 
                    className="real-stories-avatar-img-element"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="real-stories-person-descriptions text-start">
                  <h4 className="real-stories-name-bold font-sans">{item.name}</h4>
                  <span className="real-stories-subtext-light font-sans">{item.subtext}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealStoriesSection;
