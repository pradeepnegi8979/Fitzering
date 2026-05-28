import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRight } from 'lucide-react';
import './MovementFlowSection.css';
import moment1 from '../../../assets/moment1.png';
import moment2 from '../../../assets/moment2.png';
import moment3 from '../../../assets/moment3.png';
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
                  <div className="stage-connector-arrow">
                    <ArrowRight size={22} className="connector-icon" />
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
                    <ArrowRight size={22} className="connector-icon" />
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
