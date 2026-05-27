import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Moon, Activity, Droplets, Smile, Thermometer, Heart } from 'lucide-react';
import './ProPromoSection.css';
import RingImg from '../../../assets/brandRingImg.png';
export const ProPromoSection: React.FC = () => {
  const pills = [
    { label: 'Sleep Insights', icon: <Moon size={18} className="promo-pill-icon-svg" /> },
    { label: 'Activity Tracking', icon: <Activity size={18} className="promo-pill-icon-svg" /> },
    { label: 'Blood oxygen', icon: <Droplets size={18} className="promo-pill-icon-svg" /> },
    { label: 'Stress Balance', icon: <Smile size={18} className="promo-pill-icon-svg" /> },
    { label: 'Skin Temperature Trends', icon: <Thermometer size={18} className="promo-pill-icon-svg" /> },
    { label: 'Heart Rate & HRV', icon: <Heart size={18} className="promo-pill-icon-svg" /> }
  ];

  return (
    <section className="fitze-propromo-section" id="fitze-propromo">
      <Container>
        <Row className="align-items-center g-5">
          {/* Left Column: Information, mixed heading, description, and pill list */}
          <Col lg={6} md={12} className="promo-info-col">
            <div className="promo-context-wrapper">
              <div className="promo-badge-container">
                <span className="promo-badge-tag">BETTER TOGETHER</span>
              </div>
              
              <h2 className="promo-title">
                Get FREE PRO <span className="promo-title-dark">with</span><br />
                <span className="promo-logo-fitze">fitze</span><span className="promo-logo-ring">ring</span>
              </h2>

              <p className="promo-description">
                Track your body, stay more aware and unlock the complete fitze experience.
              </p>

              {/* Flex block wrapping the 6 status pills smoothly */}
              <div className="promo-pills-grid-wrap">
                {pills.map((pill, idx) => (
                  <div key={idx} className="promo-capsule-item" id={`promo-pill-item-${idx}`}>
                    <span className="promo-pill-icon">{pill.icon}</span>
                    <span className="promo-pill-text">{pill.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          {/* Right Column: Rounded scenic dessert/ring photo mockup container */}
          <Col lg={6} md={12} className="promo-image-col">
            <div className="ring-promo-visual-frame" id="ring-photo-frame">
              <img
                src={RingImg}
                alt="Fitze Smart Ring Desert dunes sunset mockup"
                className="ring-photo-visual"
                referrerPolicy="no-referrer"
              />
            </div>
          </Col>
        </Row>

        {/* Bottom Centered Main CTA Action Trigger button */}
        <div className="promo-cta-footer-band" id="promo-footer-band">
          <button className="btn-start-streak-pill" id="action-start-streak">
            Start your first Streak FREE
          </button>
        </div>
      </Container>
    </section>
  );
};

export default ProPromoSection;

