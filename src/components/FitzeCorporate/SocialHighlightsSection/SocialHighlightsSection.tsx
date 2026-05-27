import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import './SocialHighlightsSection.css';

interface SocialPostItem {
  id: string;
  userHandle: string;
  location: string;
  imgUrl: string;
}

const originalPosts: SocialPostItem[] = [
  {
    id: "post-1",
    userHandle: "Fitze",
    location: "Dubai, UAE",
    // Two people jogging/outdoor run giving high five
    imgUrl: "https://images.unsplash.com/photo-1502224562085-639556652f33?auto=format&fit=crop&q=80&w=800&h=800"
  },
  {
    id: "post-2",
    userHandle: "Fitze",
    location: "Dubai, UAE",
    // Group stretching/wellness outdoor stretch
    imgUrl: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=800&h=800"
  },
  {
    id: "post-3",
    userHandle: "Fitze",
    location: "Dubai, UAE",
    // Fitness enthusiasts / cheering group on obstacle
    imgUrl: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&q=80&w=800&h=800"
  },
  {
    id: "post-4",
    userHandle: "Fitze",
    location: "Dubai, UAE",
    // Running outdoor
    imgUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=800&h=800"
  },
  {
    id: "post-5",
    userHandle: "Fitze",
    location: "Dubai, UAE",
    // Wellness teamwork
    imgUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800&h=800"
  }
];

// Triplicate for infinite smooth scrolling boundary limits
const displayPosts = [...originalPosts, ...originalPosts, ...originalPosts];
const midOffset = originalPosts.length; // 5

export const SocialHighlightsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(midOffset);
  const [transitionEnabled, setTransitionEnabled] = useState<boolean>(true);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, transitionEnabled]);

  const handleTransitionEnd = () => {
    if (activeIndex >= midOffset * 2) {
      setTransitionEnabled(false);
      setActiveIndex(activeIndex - midOffset);
    } else if (activeIndex < midOffset) {
      setTransitionEnabled(false);
      setActiveIndex(activeIndex + midOffset);
    }
  };

  useEffect(() => {
    if (!transitionEnabled) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [transitionEnabled]);

  return (
    <section className="corp-social-highlights-section" id="corporate-social-moments">
      <Container className="social-highlights-header-container">
        <Row className="align-items-start gy-3">
          <Col lg={8} md={12} className="text-start">
            {/* Custom Outline Capsule Eyebrow Label */}
            <div className="social-eyebrow-wrapper">
              <span className="social-eyebrow-pill">SOCIAL HIGHLIGHTS</span>
            </div>
            {/* Main Section Headline with Orange & Black accents */}
            <h2 className="social-highlights-headline-text">
              <span className="highlight-color">Corporate Energy,</span> Captured.
            </h2>
          </Col>
          <Col lg={4} md={12} className="text-start text-lg-end d-flex align-items-center justify-content-start justify-content-lg-end social-side-desc-col">
            <p className="social-side-description-text">
              What workforce engagement looks like at fitze.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Smooth Auto-sliding viewport */}
      <div 
        className="social-carousel-viewport"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          ref={trackRef}
          className="social-carousel-track"
          style={{
            transform: `translate3d(calc(50vw - (${activeIndex} * (var(--card-width) + var(--card-gap)) + var(--card-width) / 2)), 0, 0)`,
            transition: transitionEnabled ? 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {displayPosts.map((post, idx) => {
            const isCenter = idx === activeIndex;
            return (
              <div 
                className={`instagram-styled-post-card ${isCenter ? 'active-center-card' : 'side-inactive-card'}`}
                key={`post-${idx}`} 
                id={`insta-post-${idx}`}
                onClick={() => {
                  if (idx !== activeIndex) {
                    setTransitionEnabled(true);
                    setActiveIndex(idx);
                  }
                }}
              >
                {/* Header profile of Instagram Card */}
                <div className="insta-header d-flex align-items-center gap-2">
                  <div className="insta-avatar-icon">
                    <span className="avatar-brand-word">fitze</span>
                  </div>
                  <div className="insta-user-meta text-start">
                    <span className="insta-username">{post.userHandle}</span>
                    <span className="insta-location d-block">{post.location}</span>
                  </div>
                </div>
                
                {/* Image layout frame */}
                <div className="insta-body-img-frame">
                  <img 
                    src={post.imgUrl} 
                    alt="Fitze active lifestyle community" 
                    className="insta-img" 
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Footer Interaction bar with genuine Lucide Icons */}
                <div className="insta-footer-action-row d-flex justify-content-between align-items-center">
                  <div className="actions-left-group d-flex gap-3">
                    <button className="insta-icon-btn" aria-label="Like post">
                      <Heart size={21} className="insta-lucide-icon" />
                    </button>
                    <button className="insta-icon-btn" aria-label="Comment on post">
                      <MessageCircle size={20} className="insta-lucide-icon" />
                    </button>
                    <button className="insta-icon-btn" aria-label="Share post">
                      <Send size={19} className="insta-lucide-icon" />
                    </button>
                  </div>
                  <button className="insta-icon-btn" aria-label="Bookmark post">
                    <Bookmark size={20} className="insta-lucide-icon" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialHighlightsSection;
