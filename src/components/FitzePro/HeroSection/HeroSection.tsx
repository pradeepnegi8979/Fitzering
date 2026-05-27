import React from 'react';
import { Container } from 'react-bootstrap';
import './HeroSection.css';

export const HeroSection: React.FC = () => {
  return (
    <section className="fitzepro-hero-wrapper" id="fitzepro-hero">
      {/* 16-Column precision visual architectural grid lines */}
      <div className="fitzepro-hero-bg-grid">
        <div className="grid-column-line"></div>
        <div className="grid-column-line"></div>
        <div className="grid-column-line"></div>
        <div className="grid-column-line"></div>
        <div className="grid-column-line"></div>
        <div className="grid-column-line"></div>
        <div className="grid-column-line"></div>
        <div className="grid-column-line"></div>
        <div className="grid-column-line"></div>
        <div className="grid-column-line"></div>
        <div className="grid-column-line"></div>
        <div className="grid-column-line"></div>
        <div className="grid-column-line"></div>
        <div className="grid-column-line"></div>
        <div className="grid-column-line"></div>
        <div className="grid-column-line"></div>
      </div>

      <Container className="fitzepro-hero-container text-center">
        {/* Exact display typography match */}
        <h1 className="fitzepro-hero-title">
          The <span className="highlight-orange">most rewarding way</span> <br className="d-none d-md-block" /> to move.
        </h1>

        {/* Beautiful white-bordered mini pill badge below title */}
        <div className="why-pro-pill-wrapper">
          <span className="why-pro-badge">WHY PRO</span>
        </div>

        {/* Lightweight centered description copy */}
        <p className="fitzepro-hero-desc">
          Unlock more rewards, more Streaks and higher earning potential.
        </p>

        {/* Pill button at bottom with italic pro badge */}
        <div className="fitzepro-hero-cta-btn-frame">
          <button className="fitzepro-btn-upgrade-pill" id="fitzepro-hero-upgrade">
            Upgrade to <span className="badge-pro-inline">pro</span>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
