import React, { useState, useEffect, useRef } from 'react';
import './HeroSection.css';
import banner1 from '../../../assets/banner-1.png';
import banner2 from '../../../assets/banner-2.png';
import banner3 from '../../../assets/banner-3.png';
import appleStore from '../../../assets/apple-app-store.svg';
import googleStore from '../../../assets/Google-play-store.svg';
import huaweiStore from '../../../assets/huawei-app-gallery.svg';
interface SlideData {
  image: string;
  title: string;
  titleAccent?: string;
  subtitles: string[];
  buttonText: string;
  buttonLink: string;
}

export const HeroSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slides: SlideData[] = [
    {
      image: banner1,
      title: "Movement",
      titleAccent: "Rewarded",
      subtitles: ["Turn your everyday movement into rewards, experiences and real payouts."],
      buttonText: "Start for FREE",
      buttonLink: "#download"
    },
    {
      image: banner2,
      title: "Get Paid to Walk",
      subtitles: [
        "Turn consistency into guaranteed payouts.",
        "No luck. Just commitment."
      ],
      buttonText: "Join Your First Streak Free",
      buttonLink: "#streaks"
    },
    {
      image: banner3,
      title: "The easiest way to stay consistent",
      subtitles: [
        "Not just a tracker.",
        "A smarter way to move, recover and earn more."
      ],
      buttonText: "Discover fitze Ring",
      buttonLink: "#fitze-ring"
    }
  ];

  const startAutoSlide = () => {
    stopAutoSlide();
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    if (!isPaused) {
      startAutoSlide();
    } else {
      stopAutoSlide();
    }
    return () => stopAutoSlide();
  }, [isPaused, activeIndex]);

  const handleCircleClick = (index: number) => {
    setActiveIndex(index);
    // Restart/reset timer automatically on click
    startAutoSlide();
  };

  return (
    <section className="hero-slider-section" id="home">
      <div className="hero-slider-outer-container">
        <div 
          className="hero-slider-main-card"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {slides.map((slide, idx) => (
            <div 
              key={idx} 
              className={`hero-slide-frame ${idx === activeIndex ? 'active' : ''}`}
            >
              {/* Slide Background Image */}
              <div className="hero-slide-bg-container">
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="hero-slide-bg-img"
                  referrerPolicy="no-referrer"
                />
                <div className="hero-slide-gradient-overlay"></div>
              </div>

              {/* Slide Core Content Wrapper */}
              <div className="hero-slide-body-content">
                <h1 className="hero-slide-big-heading">
                  {slide.title}
                  {slide.titleAccent && (
                    <>
                      <br />
                      <span className="hero-slide-title-accent">{slide.titleAccent}</span>
                    </>
                  )}
                </h1>

                {/* Iterate multi-line subtitles / slogans if applicable */}
                <div className="hero-slide-subtitles-stack">
                  {slide.subtitles.map((sub, sIdx) => (
                    <p key={sIdx} className="hero-slide-sub-line">{sub}</p>
                  ))}
                </div>

                <div className="hero-slide-actions-row">
                  {/* Premium customized visual pill buttons */}
                  <a href={slide.buttonLink} className="hero-slide-primary-button">
                    {slide.buttonText}
                  </a>

                  {/* Inline Vector-Perfect Badges for App Store, Google Play, AppGallery */}
                  <div className="hero-stores-badges-container">
                    
                    {/* App Store */}
                    <a href="#appstore" className="store-badge-anchor" aria-label="Download on App Store">
                      <img src={appleStore} alt="Download on App Store" className="store-badge-svg" />
                    </a>

                    {/* Google Play */}
                    <a href="#googleplay" className="store-badge-anchor" aria-label="Get it on Google Play">
                       <img src={googleStore} alt="Get it on Google Play" className="store-badge-svg" />
                    </a>

                    {/* Huawei AppGallery */}
                    <a href="#appgallery" className="store-badge-anchor" aria-label="Explore it on AppGallery">
                      <img src={huaweiStore} alt="Explore it on AppGallery" className="store-badge-svg" />
                    </a>

                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* RIGHT SIDE CIRCLE NAVIGATION */}
          <div className="hero-right-navigation">
            {slides.map((_, dotIdx) => (
              <button 
                key={dotIdx}
                className={`hero-right-circle ${dotIdx === activeIndex ? 'active' : ''}`}
                onClick={() => handleCircleClick(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                type="button"
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
