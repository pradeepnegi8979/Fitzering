import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './HeroSection.css';
import BannerCorporate from '../../../assets/corporate-banner.png';
export const HeroSection: React.FC = () => {
  return (
    <section className="corp-hero-outer-section" id="corp-hero">
      <Container>
        {/* Hero Banner Box */}
        <div className="corp-hero-banner-card" id="corp-hero-card">
          {/* Background image & gradient overlay */}
          <div className="corp-hero-bg-media">
            <img 
              src={BannerCorporate}
              alt="Corporate teammates walking in modern glass corridor representing workforce motion" 
              className="corp-hero-bg-img"
              referrerPolicy="no-referrer"
            />
            <div className="corp-hero-bg-overlay"></div>
          </div>

          {/* Bound to the parent card, ensuring 100% height intersection without gaps */}
          <div className="concentric-circles-container">
            <div className="concentric-circle concentric-circle-1"></div>
            <div className="concentric-circle concentric-circle-2"></div>
            <div className="concentric-circle concentric-circle-3"></div>
            <div className="concentric-circle concentric-circle-4"></div>
          </div>

          <Row className="corp-hero-content-row g-0 align-items-center">
            {/* Left Column Text Content */}
            <Col lg={6} md={12} className="corp-hero-text-col text-start">
              <h1 className="corp-hero-title">
                Building Healthier <br /> Teams Through <br />
                <span className="corp-title-highlight">Movement.</span>
              </h1>
              
              <p className="corp-hero-description">
                Wellness programs, corporate sports, and team experiences that energize your workforce.
              </p>

              <div>
                <button className="corp-hero-cta-btn">
                  Activate employee engagement
                </button>
              </div>
            </Col>

            {/* Right Column Diagram Points */}
            <Col lg={6} md={12} className="corp-hero-visual-col">
              <div className="corp-diagram-sandbox">
                {/* 5 Nodes representing specific wellness categories placed exactly relative to bounds */}
                <div className="diagram-node node-sports">
                  {/* <span className="node-square-bullet"></span> */}
                  <span className="node-text-label">Step Challenges</span>
                </div>

                <div className="diagram-node node-wellness">
                  <span className="node-text-label">Corporate Sports</span>
                </div>

                <div className="diagram-node node-funruns">
                  <span className="node-text-label">Mental Wellbeing</span>
                </div>

                <div className="diagram-node node-mental">
                  <span className="node-text-label">Team Building</span>
                </div>

                <div className="diagram-node node-challenges">
                  <span className="node-text-label">Curated Corporate Events</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
