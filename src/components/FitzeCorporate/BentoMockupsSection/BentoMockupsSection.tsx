import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './BentoMockupsSection.css';

// @ts-ignore
import mobileMockupsImg from '../../../assets/understandyoureffort.png';
// @ts-ignore
import adminDashboardImg from '../../../assets/workforcewellness-insight.png';

export const BentoMockupsSection: React.FC = () => {
  return (
    <section className="bento-mockups-section-wrapper" id="bento-mockups-insights">
      <Container className="bento-mockups-inner-container">
        
        <Row className="g-4 gy-5 justify-content-center">
          
          {/* LEFT COLUMN: BUILD HABITS (ZINC/DARK CARD WITH MOBILE MOCKUPS) */}
          <Col lg={6} md={12} className="d-flex">
            <div className="bento-showcase-card habits-card-theme flex-fill">
              
              <div className="bento-card-header text-start">
                <span className="bento-eyebrow-text">BUILD HABITS</span>
                <h3 className="bento-main-title">Understand Your Effort.</h3>
                <p className="bento-support-desc">
                  Gain deep insights into how movement impacts your daily life with detailed activity, heart rate, and HRV metrics.
                </p>
              </div>

              <div className="bento-visual-frame mobile-orange-frame">
                <img 
                  src={mobileMockupsImg} 
                  alt="Fitze active lifestyle tracking on iPhone mobile screens" 
                  className="bento-mockup-fluid-image"
                  referrerPolicy="no-referrer"
                />
              </div>

            </div>
          </Col>

          {/* RIGHT COLUMN: ENTERPRISE SCALE (COCOA/BROWN CARD WITH WEB DASHBOARD) */}
          <Col lg={6} md={12} className="d-flex">
            <div className="bento-showcase-card enterprise-card-theme flex-fill">
              
              <div className="bento-card-header text-start">
                <span className="bento-eyebrow-text">ENTERPRISE SCALE</span>
                <h3 className="bento-main-title">Workforce wellness insights.</h3>
                <p className="bento-support-desc">
                  Anonymised and consolidated insights across your entire organization to measure the real impact of your wellness programs.
                </p>
              </div>

              <div className="bento-visual-frame dashboard-cocoa-frame">
                <img 
                  src={adminDashboardImg} 
                  alt="Corporate central analytics wellness monitoring web dashboard panel on iPad screen" 
                  className="bento-mockup-fluid-image borderless-ipad-screen"
                  referrerPolicy="no-referrer"
                />
              </div>

            </div>
          </Col>

        </Row>

        {/* BOTTOM MASTER CTA: Request a Callback */}
        <div className="bento-section-cta-row text-center">
          <button className="bento-callback-pill-button" id="bento-callback-cta">
            Request a Callback
          </button>
        </div>

      </Container>
    </section>
  );
};

export default BentoMockupsSection;
