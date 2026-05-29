import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './WellnessRingSection.css';
// @ts-ignore

import threeRingsImage from '../../../assets/threeringframe.png';
import CorporateLeadModal from '../../corporateModal/CorporateLeadModal';

export const WellnessRingSection: React.FC = () => {
  return (
    <section className="wellness-ring-section-wrapper" id="wellness-ring-employees">
      <Container className="wellness-ring-inner-container">
        <Row className="align-items-center gy-5 gx-lg-5">
          {/* LEFT COLUMN: Texts and custom diagnostic indicator capsules */}
          <Col lg={7} md={12} className="text-start">
            {/* Outlined Pill Tag */}
            <div className="ring-eyebrow-container mb-3 mb-md-4">
              <span className="ring-eyebrow-pill">FITZE RING FOR EMPLOYEES</span>
            </div>

            {/* Structured Headline split exactly as design */}
            <h2 className="ring-headline-title mb-3">
              Wellness beyond <span className="highlight-color">the</span>
              <span className="d-block highlight-color">workplace</span>
            </h2>

            {/* Muted support copy */}
            <p className="ring-description-text mb-4 mb-md-5">
              Help employees understand their body signals and build healthier everyday habits.
            </p>

            {/* Dynamic diagnostic badges matching the screenshot */}
            <div className="ring-capsules-grid-layout">
              {/* Row 1 Group */}
              <div className="ring-capsule-row">
                <div className="ring-capsule-element" id="ring-badge-sleep">
                  <span className="capsule-icon-box">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                      <path d="M20 3v4M22 5h-4" />
                    </svg>
                  </span>
                  <span className="capsule-label">Sleep</span>
                </div>

                <div className="ring-capsule-element" id="ring-badge-activity">
                  <span className="capsule-icon-box">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 16v-2.38C4 11.5 5.88 9.85 6 7.07l.08-1.57A1.63 1.63 0 0 1 7.72 4h.56a1.63 1.63 0 0 1 1.64 1.5l.08 1.57c.12 2.78 2 4.43 2 6.55V16c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1Z" />
                      <path d="M12.5 13.5h.5c.55 0 1-.45 1-1v-1.19c0-1.72 1.25-2.78 1.33-4.63l.05-1.05A1.08 1.08 0 0 1 16.48 4.5h.37a1.08 1.08 0 0 1 1.1 1.03l.05 1.05c.08 1.85 1.33 2.91 1.33 4.63v1.19c0 .55-.45 1-1 1h-.5" />
                    </svg>
                  </span>
                  <span className="capsule-label">Activity</span>
                </div>

                <div className="ring-capsule-element" id="ring-badge-oxygen">
                  <span className="capsule-icon-box">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7Z" />
                    </svg>
                    <span className="droplet-label-overlay">O₂</span>
                  </span>
                  <span className="capsule-label">Blood oxygen</span>
                </div>

                <div className="ring-capsule-element" id="ring-badge-stress">
                  <span className="capsule-icon-box">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                      <path d="M12 5v13" />
                    </svg>
                  </span>
                  <span className="capsule-label">Stress</span>
                </div>
              </div>

              {/* Row 2 Group */}
              <div className="ring-capsule-row">
                <div className="ring-capsule-element" id="ring-badge-temp">
                  <span className="capsule-icon-box">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
                    </svg>
                  </span>
                  <span className="capsule-label">Skin Temperature</span>
                </div>

                <div className="ring-capsule-element" id="ring-badge-hrv">
                  <span className="capsule-icon-box">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      <path d="M3.5 12h3l2.5-6.5 3 13 2.5-10.5 2.5 4h3.5" viewBox="0 0 24 24" />
                    </svg>
                  </span>
                  <span className="capsule-label">Heart rate &amp; HRV</span>
                </div>
              </div>
            </div>
          </Col>

          {/* RIGHT COLUMN: Studio gradient card of three rings */}
          <Col lg={5} md={12} className="text-center d-flex justify-content-center">
            <div className="ring-showcase-mega-card">
              <img 
                src={threeRingsImage} 
                alt="Fitze Ring Premium Trio (Silver, Black, Gold) featuring integrated fitness sensors" 
                className="ring-photo-fluid-render"
                referrerPolicy="no-referrer"
              />
            </div>
          </Col>
        </Row>

        {/* Center aligned call to action button at the bottom */}
        <div className="ring-button-action-container text-center">
          <button className="ring-cta-filled-button" id="streak-cta-banner">
            Start your first Streak FREE
          </button>
        </div>
      </Container>
    </section>
  );
};

export default WellnessRingSection;
