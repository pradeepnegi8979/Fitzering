import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Flame, Star, Sprout } from 'lucide-react';
import './PlanSection.css';

export const PlanSection: React.FC = () => {
  return (
    <section className="fitzepro-plan-wrapper" id="fitzepro-plans">
      {/* Visual elegance grid lines pattern in background to match hero system design */}
      <div className="fitzepro-plan-bg-grid">
        <div className="plan-grid-column-line"></div>
        <div className="plan-grid-column-line"></div>
        <div className="plan-grid-column-line"></div>
        <div className="plan-grid-column-line"></div>
        <div className="plan-grid-column-line"></div>
        <div className="plan-grid-column-line"></div>
        <div className="plan-grid-column-line"></div>
        <div className="plan-grid-column-line"></div>
        <div className="plan-grid-column-line"></div>
        <div className="plan-grid-column-line"></div>
        <div className="plan-grid-column-line"></div>
        <div className="plan-grid-column-line"></div>
      </div>

      <Container className="fitzepro-plan-container">
        
        {/* CHOOSE YOUR PLAN badge top eyebrow pill */}
        <div className="fitzepro-plan-header text-center">
          <div className="choose-plan-pill-wrapper">
            <span className="choose-plan-badge">CHOOSE YOUR PLAN</span>
          </div>
          <h2 className="fitzepro-plan-title">
            Consistency, <span className="highlight-orange">Upgraded.</span>
          </h2>
          <p className="fitzepro-plan-support">
            Unlock more Streaks, better Rewards, unlimited Challenges and higher earning potential across the app, from just AED 12/month.
          </p>
        </div>

        {/* Plan Cards Grid: 100% accurate match of structural columns */}
        <Row className="g-4 align-items-stretch justify-content-center plan-cards-row">
          
          {/* PEAK PLAN CARD */}
          <Col lg={4} md={12} className="d-flex card-col">
            <div className="plan-showcase-card is-white-theme flex-fill" id="plan-peak-card">
              <div className="plan-card-top-header">
                <div className="plan-badge-pill is-primary-badge">
                  <span>BEST VALUE</span>
                </div>
                
                <div className="plan-icon-container">
                  <Flame size={36} className="plan-react-icon is-black" strokeWidth={1.5} />
                </div>
                
                <h3 className="plan-card-name">Peak</h3>
              </div>
              
              <div className="plan-card-bottom-pricing">
                <div className="plan-pricing-amount">
                  <span className="coin-symbol">₯</span> 129
                </div>
                <div className="plan-billing-interval">Billed annually</div>
              </div>
            </div>
          </Col>

          {/* MOMENTUM PLAN CARD (Vibrant Orange Highlight Card) */}
          <Col lg={4} md={12} className="d-flex card-col">
            <div className="plan-showcase-card is-orange-theme flex-fill" id="plan-momentum-card">
              <div className="plan-card-top-header">
                <div className="plan-badge-pill is-white-badge">
                  <span>MOST POPULAR</span>
                </div>
                
                <div className="plan-icon-container">
                  <Star size={36} className="plan-react-icon is-white" strokeWidth={1.5} />
                </div>
                
                <h3 className="plan-card-name">Momentum</h3>
              </div>
              
              <div className="plan-card-bottom-pricing">
                <div className="plan-pricing-amount">
                  <span className="coin-symbol">₯</span> 79
                </div>
                <div className="plan-billing-interval">Billed half yearly</div>
              </div>
            </div>
          </Col>

          {/* STARTER PLAN CARD */}
          <Col lg={4} md={12} className="d-flex card-col">
            <div className="plan-showcase-card is-white-theme flex-fill" id="plan-starter-card">
              <div className="plan-card-top-header">
                <div className="plan-badge-pill is-primary-badge">
                  <span>GET STARTED</span>
                </div>
                
                <div className="plan-icon-container">
                  <Sprout size={36} className="plan-react-icon is-black" strokeWidth={1.5} />
                </div>
                
                <h3 className="plan-card-name">Starter</h3>
              </div>
              
              <div className="plan-card-bottom-pricing">
                <div className="plan-pricing-amount">
                  <span className="coin-symbol">₯</span> 49
                </div>
                <div className="plan-billing-interval">Billed quarterly</div>
              </div>
            </div>
          </Col>

        </Row>

      </Container>
    </section>
  );
};

export default PlanSection;
