import React from 'react';
import './TickerSection.css';

export const TickerSection: React.FC = () => {
  return (
    <div className="infinite-text-marquee-wrapper py-4 my-5" id="marquee-ribbon">
      <div className="marquee-content-scroller">
        {/* Duplicate contents to ensure seamless looping overflow cover */}
        <div className="marquee-slide-strip">
          <span>MULTI-SPORTS CARNIVAL</span><span className="marquee-dot">•</span>
          <span>GOLF TOURNAMENTS</span><span className="marquee-dot">•</span>
          <span>PREMIER LEAGUES</span><span className="marquee-dot">•</span>
          <span>WALKATHONS / STEPS CHALLENGES</span><span className="marquee-dot">•</span>
          <span>PHILANTHROPIC SPORTS DAYS</span><span className="marquee-dot">•</span>
        </div>
        <div className="marquee-slide-strip" aria-hidden="true">
          <span>MULTI-SPORTS CARNIVAL</span><span className="marquee-dot">•</span>
          <span>GOLF TOURNAMENTS</span><span className="marquee-dot">•</span>
          <span>PREMIER LEAGUES</span><span className="marquee-dot">•</span>
          <span>WALKATHONS / STEPS CHALLENGES</span><span className="marquee-dot">•</span>
          <span>PHILANTHROPIC SPORTS DAYS</span><span className="marquee-dot">•</span>
        </div>
        <div className="marquee-slide-strip" aria-hidden="true">
          <span>MULTI-SPORTS CARNIVAL</span><span className="marquee-dot">•</span>
          <span>GOLF TOURNAMENTS</span><span className="marquee-dot">•</span>
          <span>PREMIER LEAGUES</span><span className="marquee-dot">•</span>
          <span>WALKATHONS / STEPS CHALLENGES</span><span className="marquee-dot">•</span>
          <span>PHILANTHROPIC SPORTS DAYS</span><span className="marquee-dot">•</span>
        </div>
      </div>
    </div>
  );
};

export default TickerSection;
