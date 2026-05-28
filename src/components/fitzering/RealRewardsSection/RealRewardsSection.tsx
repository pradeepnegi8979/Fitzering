import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import effort1 from '../../../assets/effort1.png';
import effort2 from '../../../assets/effort2.png';
import effort3 from '../../../assets/effort3.png';  
import './RealRewardsSection.css';

export const RealRewardsSection: React.FC = () => {
  return (
    <section className="real-rewards-section" id="rewards-section">
      <Container>
        {/* Section Headline */}
        <div className="rewards-header text-center">
          <h2 className="rewards-title">
            Your effort. <span className="highlight-coral">real rewards</span>
          </h2>
        </div>

        {/* Highlight Stats Bar */}
        <div className="stats-outline-bar">
          <Row className="g-0 align-items-center">
            
            {/* Stat 1 */}
            <Col md={4} xs={12} className="stat-column border-right-md text-center">
              <div className="stat-card-inner">
                <div className="stat-main-number">
                  <span className="coral-prefix">AED</span> 960
                </div>
                <p className="stat-caption">Average annual earnings per user</p>
              </div>
            </Col>

            {/* Stat 2 */}
            <Col md={4} xs={12} className="stat-column border-right-md text-center">
              <div className="stat-card-inner">
                <div className="stat-main-number">
                  200<span className="coral-suffix">+</span>
                </div>
                <p className="stat-caption">Partner brands in the UAE</p>
              </div>
            </Col>

            {/* Stat 3 */}
            <Col md={4} xs={12} className="stat-column text-center">
              <div className="stat-card-inner">
                <div className="stat-main-number">
                  Mega rewards<span className="coral-suffix">.</span>
                </div>
                <p className="stat-caption">Win every week</p>
              </div>
            </Col>

          </Row>
        </div>

        {/* Three Pillars Navigation/Cards Container */}
        <div className="premium-cards-wrapper">
          <Row className="g-4">
            
            {/* Card 1: Streaks */}
            <Col lg={4} md={12} className="d-flex">
              <div className="pill-premium-card flex-fill">
                {/* Visual Area */}
                <div className="card-visual-header">
                  <img 
                    src={effort1}
                    alt="Jogging partners outdoor" 
                    className="visual-bg"
                  />
                  <div className="visual-gradient-dim"></div>
                  
                  {/* Styled Phone Mockup overlay */}
                  
                </div>

                {/* Content Area */}
                <div className="card-verbal-footer">
                  <span className="pillar-badge">WALK TO EARN</span>
                  <h3 className="pillar-headline">Streaks</h3>
                  <p className="pillar-description">
                    Get Paid to Walk. Join a Streak, hit your goals, and earn guaranteed payouts in your Careem wallet.
                  </p>
                </div>
              </div>
            </Col>

            {/* Card 2: Rewards */}
            <Col lg={4} md={12} className="d-flex">
              <div className="pill-premium-card flex-fill">
                {/* Visual Area */}
                <div className="card-visual-header">
                  <img 
                    src={effort2}
                    alt="Shopping and lifestyle in the city" 
                    className="visual-bg"
                  />
                  <div className="visual-gradient-dim"></div>

                  {/* Styled Phone Mockup overlay */}
                </div>

                {/* Content Area */}
                <div className="card-verbal-footer">
                  <span className="pillar-badge">WALK TO SAVE</span>
                  <h3 className="pillar-headline">Rewards</h3>
                  <p className="pillar-description">
                    Turn your everyday movement into exclusive savings and offers from top UAE brands.
                  </p>
                </div>
              </div>
            </Col>

            {/* Card 3: Challenges */}
            <Col lg={4} md={12} className="d-flex">
              <div className="pill-premium-card flex-fill">
                {/* Visual Area */}
                <div className="card-visual-header">
                  <img 
                    src={effort3}
                    alt="Active sports outdoors" 
                    className="visual-bg"
                  />
                  <div className="visual-gradient-dim"></div>
                </div>
                {/* Content Area */}
                <div className="card-verbal-footer">
                  <span className="pillar-badge">WALK TO WIN</span>
                  <h3 className="pillar-headline">Challenges</h3>
                  <p className="pillar-description">
                    Join step Challenges, stay active, and win exciting prizes.
                  </p>
                </div>
              </div>
            </Col>

          </Row>
        </div>

        {/* Bottom Call to Action Footer */}
        <div className="rewards-bottom-cta text-center">
          <p className="cta-disclaimer-text"><span className="highlight-coral-bold"> consistency, rewarded.</span>
          </p>
          <div className="cta-btn-wrapper">
            <a href="javascript:void(0);" className="premium-dark-btn">
              Explore on the fitze app
 
            </a>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default RealRewardsSection;
