import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './MallRunsSection.css';

export const MallRunsSection: React.FC = () => {
  return (
    <section className="fitze-mall-runs-section" id="fitze-mall-runs">
      <Container>
        {/* Upper Segment: Left copywriting contents, Right mockup visual */}
        <Row className="align-items-center justify-content-between row-mall-gap">
          {/* Left Column Text details */}
          <Col lg={5} md={12} className="mall-runs-info-col">
            <span className="mall-runs-orange-tag">MALL RUNS</span>
            <h2 className="mall-runs-heading" id="mall-runs-title">
              Movement that shows up in real life.
            </h2>
            <p className="mall-runs-description">
              High-energy community runs designed to bring brands into culture, movement and shared experiences.
            </p>
            <div className="mall-runs-badge-pills">
              <span className="mall-pill-badge">Community-first experiences</span>
              <span className="mall-pill-badge">Family-friendly participation</span>
            </div>
          </Col>

          {/* Right Column Gradient Device visual */}
          <Col lg={7} md={12} className="mall-runs-visual-col d-flex justify-content-lg-end justify-content-center">
            <div className="mall-gradient-frame-mockup" id="mall-visual-mockup">
              <div className="mall-mockup-inset-content">
                <div className="mall-mockup-badge-container">
                  <span className="mall-mockup-orange-badge">WIDE EVENT VISUAL</span>
                </div>
                <h3 className="mall-mockup-title">
                  Crowds. Jerseys. Brand energy. Big community moments.
                </h3>
              </div>
            </div>
          </Col>
        </Row>

        {/* Lower Segment: Three rounded statistics boxes */}
        <div className="mall-stats-row-grid" id="mall-stats-counters">
          <Row className="g-4">
            <Col lg={3} md={3} sm={12}>
              <div className="mall-stat-card" id="mall-stat-card-1">
                <span className="mall-stat-number">20+</span>
                <span className="mall-stat-label">MALL & COMMUNITY RUNS</span>
              </div>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <div className="mall-stat-card" id="mall-stat-card-2">
                <span className="mall-stat-number text-smaller-uae">UAE-wide</span>
                <span className="mall-stat-label">PARTICIPATION</span>
              </div>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <div className="mall-stat-card" id="mall-stat-card-3">
                <span className="mall-stat-number">360°</span>
                <span className="mall-stat-label">DIGITAL + ON-GROUND ENGAGEMENT</span>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default MallRunsSection;
