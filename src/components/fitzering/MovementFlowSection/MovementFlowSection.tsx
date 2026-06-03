import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRight } from 'lucide-react';
import './MovementFlowSection.css';
import moment1 from '../../../assets/moment1.png';
import moment2 from '../../../assets/moment2.png';
import moment3 from '../../../assets/moment3.png';
const arrowMoving = (
  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="28" viewBox="0 0 33 28" fill="none">
<path d="M32.0353 14.688C32.4834 14.2399 32.4834 13.5028 32.0353 13.0548L19.3166 0.336035C18.8686 -0.112012 18.1314 -0.112012 17.6834 0.336035C17.2353 0.784082 17.2353 1.52119 17.6834 1.96924L28.4293 12.7151H1.15625C0.520312 12.7151 0 13.2355 0 13.8714C0 14.5073 0.520312 15.0276 1.15625 15.0276H28.4293L17.6834 25.7735C17.2353 26.2216 17.2353 26.9587 17.6834 27.4067C18.1314 27.8548 18.8686 27.8548 19.3166 27.4067L32.0353 14.688Z" fill="#FE572A"/>
</svg>
);
export const MovementFlowSection: React.FC = () => {
  return (
    <section className="movement-flow-section" id="how-it-works-flow">
      <Container>
        {/* Top Header Block */}
        <div className="flow-header text-center">
          <span className="flow-category">HOW IT WORKS</span>
          <h2 className="flow-title">
            Turn movement into <span className="highlight-coral">more</span>
          </h2>
          <p className="flow-lead">
            Designed to help you stay aware, stay consistent and get rewarded for showing up.
          </p>
        </div>

        {/* Inner Card Container - Light Beige/Off-white background */}
        <div className="flow-stages-card">
          <Row className="g-4 align-items-stretch justify-content-center">
            
            {/* Stage 1: Wear */}
            <Col lg={4} md={12} className="stage-column">
              <div className="stage-item text-center">
                <div className="stage-heading-row">
                  <h3 className="stage-label-title">Wear</h3>
                  <div className="stage-connector-arrow d-none d-lg-block d-md-block">
                                        {arrowMoving}

                  </div>
                </div>
                
                {/* Stage Image with custom rounding */}
                <div className="stage-photo-wrapper zoom-hover">
                  <img 
                    src={moment1} 
                    alt="Wearing smart ring while active" 
                    className="stage-photo"
                  />
                </div>
                
                {/* Stage Caption */}
                <p className="stage-caption">
                  Slip it on and move through your day.
                </p>
              </div>
            </Col>

            {/* Stage 2: Track */}
            <Col lg={4} md={12} className="stage-column">
              <div className="stage-item text-center">
                <div className="stage-heading-row">
                  <h3 className="stage-label-title">Track</h3>
                  <div className="stage-connector-arrow">
                    {/* <ArrowRight size={22} className="connector-icon" /> */}
                    {arrowMoving}
                  </div>
                </div>
                
                {/* Stage Image with custom rounding */}
                <div className="stage-photo-wrapper zoom-hover">
                  <img 
                    src={moment2} 
                    alt="Man with phone tracking movement" 
                    className="stage-photo"
                  />
                </div>
                
                {/* Stage Caption */}
                <p className="stage-caption">
                  Stay connected to your wellbeing. 
                </p>
              </div>
            </Col>

            {/* Stage 3: Earn */}
            <Col lg={4} md={12} className="stage-column">
              <div className="stage-item text-center">
                <div className="stage-heading-row">
                  <h3 className="stage-label-title">Earn</h3>
                  <div className="stage-connector-arrow d-lg-none d-md-none">
                                        {arrowMoving}

                  </div>
                </div>
                
                {/* Stage Image with custom rounding */}
                <div className="stage-photo-wrapper zoom-hover">
                  <img 
                    src={moment3} 
                    alt="Cheering woman earning consistency rewards" 
                    className="stage-photo"
                  />
                </div>
                
                {/* Stage Caption */}
                <p className="stage-caption">
                  Turn consistency into rewards.
                </p>
              </div>
            </Col>

          </Row>
        </div>
      </Container>
    </section>
  );
};

export default MovementFlowSection;
