import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './StatsSection.css';

export const StatsSection: React.FC = () => {
  return (
    <section className="contact-stats-section" id="contact-stats">
      <Container fluid className="px-0">
        <div className="contact-stats-inner-wrapper">
          <Row className="g-0 justify-content-center text-center">
            
            <Col xs={12} sm={6} md={3} className="stat-col">
              <div className="stat-item-box">
                <div className="stat-number">425K</div>
                <div className="stat-label">APP USERS</div>
              </div>
            </Col>
            
            <Col xs={12} sm={6} md={3} className="stat-col border-col">
              <div className="stat-item-box">
                <div className="stat-number">AED 5.12M</div>
                <div className="stat-label">IN REWARDS</div>
              </div>
            </Col>
            
            <Col xs={12} sm={6} md={3} className="stat-col border-col">
              <div className="stat-item-box">
                <div className="stat-number">1.56T</div>
                <div className="stat-label">STEPS WALKED</div>
              </div>
            </Col>
            
            <Col xs={12} sm={6} md={3} className="stat-col border-col">
              <div className="stat-item-box">
                <div className="stat-number">500+</div>
                <div className="stat-label">CORPORATE EVENTS</div>
              </div>
            </Col>

          </Row>
        </div>
      </Container>
    </section>
  );
};

export default StatsSection;
