import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './HeroSection.css';

export const HeroSection: React.FC = () => {
  return (
    <section className="fitze-brand-hero-section" id="fitze-brand-hero">
      {/* Dynamic clean grid background lining overlay */}
      <div className="hero-grid-background"></div>
      
      <Container className="position-relative hero-inner-container">
        <Row className="align-items-center justify-content-between row-hero-gap">
          {/* Left Column Text & Action wrapper */}
          <Col lg={6} md={12} className="hero-text-col">
            <h1 className="hero-main-title" id="hero-heading">
              Turn movement <br />
              into <span className="hero-title-italic-orange">real &nbsp;</span> <span className="hero-title-bold-orange">brand <br />engagement.</span>
            </h1>
            <p className="hero-description" id="hero-subheading">
              Create high-impact brand experiences powered by rewards, movement and real-world participation.
            </p>
            <div className="hero-cta-wrapper">
              <button className="btn-build-fitze" id="hero-btn-cta">
                Build with fitze
              </button>
            </div>
          </Col>

          {/* Right Column Bento Solid statistic deck */}
          <Col lg={6} md={12} className="hero-stats-col d-flex justify-content-lg-end justify-content-center">
            <div className="bento-box-showcase" id="hero-bento-stats">
              {/* Row 1 Stats Cells */}
              <div className="bento-quad-row">
                {/* 1. App Users (Top Left - Dark Cell) */}
                <div className="bento-quad-cell cell-black" id="hero-bento-card-1">
                  <div className="bento-cell-content">
                    <span className="bento-stat-num text-orange">450k+</span>
                    <span className="bento-stat-sub text-white-muted">App users</span>
                  </div>
                </div>

                {/* 2. Steps Tracker (Top Right - Muted Light Gray Cell) */}
                <div className="bento-quad-cell cell-warm-light" id="hero-bento-card-2">
                  <div className="bento-cell-content">
                    <span className="bento-stat-num text-orange">1.5T+</span>
                    <span className="bento-stat-sub text-black-muted">Steps Trackerd</span>
                  </div>
                </div>
              </div>

              {/* Row 2 Stats Cells */}
              <div className="bento-quad-row">
                {/* 3. Brand Partners (Bottom Left - Muted Light Gray Cell) */}
                <div className="bento-quad-cell cell-warm-light" id="hero-bento-card-3">
                  <div className="bento-cell-content">
                    <span className="bento-stat-num text-black">150+</span>
                    <span className="bento-stat-sub text-black-muted">Brand partners</span>
                  </div>
                </div>

                {/* 4. Corporates Engaged (Bottom Right - Orange Cell) */}
                <div className="bento-quad-cell cell-orange" id="hero-bento-card-4">
                  <div className="bento-cell-content">
                    <span className="bento-stat-num text-white">120+</span>
                    <span className="bento-stat-sub text-black-muted">Corporates Engaged</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
  