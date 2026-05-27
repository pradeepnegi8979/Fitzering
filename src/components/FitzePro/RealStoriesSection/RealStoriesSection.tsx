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
  title: string;
  achievementBadge: string;
}

export const RealStoriesSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      rating: 5,
      quote: "Upgrading to Pro completely changed my mindset. I walk every morning now, and having those guaranteed cash-out streaks keeps me highly accountable. I love the simple payouts!",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
      name: "Aisha Al-Mansoori",
      title: "Senior Product Manager",
      achievementBadge: "EARNED AED 340 IN PAYOUTS"
    },
    {
      id: 2,
      rating: 5,
      quote: "Fitze Pro momentum option is purely brilliant. The extra daily coins let me buy vouchers for my favourite coffee joints and apparel brands weekly. It paid for itself in month one.",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      name: "Tariq Mahmood",
      title: "Active Developer",
      achievementBadge: "REDEEMED 18 PREMIUM OFFERS"
    },
    {
      id: 3,
      rating: 5,
      quote: "The unlimited streaks feature is awesome. Under starter plan, I hit three consistency streak benchmarks back-to-back last quarter and lost 4kg in the process. Highly recommend!",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
      name: "Chloe Henderson",
      title: "Wellness Consultant",
      achievementBadge: "LOST 4KG WITH FITZE"
    },
    {
      id: 4,
      rating: 5,
      quote: "As a marathon runner, having double entries in luxury challenge draws has been wild. Already won a premium smartwatch! The fast support is also a massive pro.",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
      name: "Marcus Aurelius",
      title: "Fitness Coach & Writer",
      achievementBadge: "WON PREMIUM SMARTWATCH DRAW"
    }
  ];

  return (
    <section className="fitzepro-stories-wrapper" id="fitzepro-stories">
      <Container className="fitzepro-stories-container">
        
        {/* Section Header */}
        <div className="fitzepro-stories-header text-center">
          <span className="fitzepro-stories-eyebrow">REAL STORIES</span>
          <h2 className="fitzepro-stories-title">
            What users are getting from <span className="logo-text-fitze">fitze</span><span className="badge-pro-inline-orange">PRO</span>
          </h2>
        </div>

        {/* Horizontal Testimonials Slider (with custom styling for interactive desktop swipe) */}
        <div className="stories-scroll-track-container">
          <div className="stories-cards-track">
            {testimonials.map((t) => (
              <div className="story-card" key={t.id} id={`story-card-${t.id}`}>
                
                {/* 5 Star rating */}
                <div className="story-rating-row d-flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={15} className="story-star-fill" />
                  ))}
                </div>

                {/* Quote statement */}
                <p className="story-quote-text">
                  "{t.quote}"
                </p>

                {/* User Card footer with avatar and title */}
                <div className="story-user-meta d-flex align-items-center gap-3 mt-4">
                  <div className="story-avatar-frame flex-shrink-0">
                    <img 
                      src={t.avatarUrl} 
                      alt={t.name} 
                      className="story-avatar-img"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="story-user-details text-start">
                    <div className="story-user-name">{t.name}</div>
                    <div className="story-user-title">{t.title}</div>
                  </div>
                </div>

                {/* Custom Highlight Achievement badge */}
                <div className="story-achieve-badge-container mt-4">
                  <span className="story-achieve-badge-pill">
                    {t.achievementBadge}
                  </span>
                </div>

              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
};

export default RealStoriesSection;
