import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './FindYourPerfectFitSection.css';
import RingImg from '../../../assets/ring-detail-img.png';
export const FindYourPerfectFitSection: React.FC = () => {
  return (
    <section className="find-perfect-fit-section" id="find-perfect-fit">
      <Container className="find-perfect-fit-container">
        <Row className="align-items-center gy-5 gx-lg-5">
          {/* Left Column: Sizing Instructions & Button */}
          <Col lg={6} md={12} className="find-perfect-fit-left">
            <div className="find-fit-meta-wrap">
              <span className="no-guesswork-badge">NO GUESSWORK. NO STRESS</span>
            </div>
            
            <h2 className="find-fit-title">
              Find your <span className="highlight-coral">perfect fit</span>
            </h2>

            <div className="sizing-steps-list">
              {/* Step 1 */}
              <div className="sizing-step-item">
                <span className="step-label">Step 1</span>
                <p className="step-content">Place your fitze Ring order</p>
              </div>

              {/* Step 2 */}
              <div className="sizing-step-item">
                <span className="step-label">Step 2</span>
                <p className="step-content">Receive your complimentary Ring sizing kit.</p>
              </div>

              {/* Step 3 */}
              <div className="sizing-step-item">
                <span className="step-label">Step 3</span>
                <p className="step-content">Confirm your size and receive your Ring.</p>
              </div>
            </div>

            <div className="find-fit-action-wrap">
              <a href="#fitze-booking" className="btn-find-fit-action">
                Find your perfect fit
              </a>
            </div>
          </Col>

          {/* Right Column: High-Fidelity 3-Ring Visual Card */}
          <Col lg={6} md={12} className="find-perfect-fit-right">
            <div className="sizing-tray-card">
             <img src={RingImg} alt="3D Ring Sizing Kit" className="sizing-tray-image" style={{width: '100%', maxWidth:'85%'}}/>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FindYourPerfectFitSection;
