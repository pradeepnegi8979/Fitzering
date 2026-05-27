import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Flame, CheckCircle, TrendingUp } from 'lucide-react';
import './PromiseSection.css';
import fitzePromiseImg from '../../../assets/fitze-promise.png';
export const PromiseSection: React.FC = () => {
  return (
    <section className="promise-section py-4" id="download">
      <Container>
        <div className="promise-container-card px-5">
          <Row className="align-items-center g-5">
            <Col lg={7} md={12} className="text-center order-2 order-lg-1">
            <img src={fitzePromiseImg} alt="fitze Promise" className="fitze-promise-img" style={{maxWidth:'100%', transform:'translate(0px, 25px)'}}/>
              {/* <div className="dual-phone-visualizer position-relative mx-auto">
                <div className="promise-phone phone-primary">
                  <div className="promise-phone-screen">
                    <div className="promise-header d-flex justify-content-between">
                      <Flame size={12} className="text-coral" />
                      <span className="promise-headline-steps text-coral font-weight-bold">7,152</span>
                    </div>
                    <div className="promise-circular-progress my-3 mx-auto">
                      <div className="center-value">
                        <span className="val font-weight-bold" style={{ fontSize: '0.85rem' }}>7,152</span>
                        <span className="sub" style={{ fontSize: '0.35rem', color: '#888' }}>steps today</span>
                      </div>
                    </div>
                    <div className="streak-goal-info bg-dark-light rounded p-2 text-start">
                      <span className="d-block text-coral" style={{ fontSize: '0.45rem', fontWeight: 700 }}>STREAK PROGRESS</span>
                      <span className="text-white" style={{ fontSize: '0.52rem' }}>You are on a 12-day streak! Just 2,848 steps more to cash out today.</span>
                    </div>
                  </div>
                </div>
                
                <div className="promise-phone phone-secondary d-none d-sm-block">
                  <div className="promise-phone-screen">
                    <div className="text-start mb-2" style={{ fontSize: '0.55rem', fontWeight: 600 }}>TODAY'S ANALYSIS</div>
                    <div className="d-flex align-items-center gap-2 bg-dark-light p-2 rounded mb-2">
                      <TrendingUp size={12} className="text-success" />
                      <div className="text-start">
                        <div className="text-white" style={{ fontSize: '0.45rem', fontWeight: 600 }}>Active Calorie burn</div>
                        <div style={{ fontSize: '0.4rem', color: '#888' }}>+342 kcal than yesterday</div>
                      </div>
                    </div>
                    
                    <div className="text-start mb-1" style={{ fontSize: '0.480rem', color: '#ff5e3a' }}>COMPLETED SHIFT CHALLENGE</div>
                    <div className="d-flex justify-content-between p-1 bg-dark-light rounded text-white" style={{ fontSize: '0.4rem' }}>
                      <span>AED 15.00 Earned</span>
                      <span className="text-success">✓ Approved</span>
                    </div>
                  </div>
                </div>
              </div> */}
            </Col>
            
            <Col lg={5} md={12} className="order-1 order-lg-2 text-start p-lg-5">
              <div className="promise-title-group mb-4">
                {/* <span className="section-tag promise-glow-tag">THE CONTRACT</span> */}
                <div className="promise-brand-title">
                  <span className="brand-primary-coral">fitze</span>
                  <span className="brand-white-heading text-white">Promise</span>
                </div>
              </div>
              
              <h3 className="promise-headline text-white mb-3">
                Effort = Reward. Always.
              </h3>
              
              <ul className="promise-list list-unstyled mb-4 text-white">
                <li className="d-flex align-items-center gap-2 mb-3">
                  <CheckCircle size={18} className="text-coral" />
                  <span>Show up. Move. Earn.</span>
                </li>
                <li className="d-flex align-items-center gap-2 mb-3">
                  <CheckCircle size={18} className="text-coral" />
                  <span>No lottery-only spins. No weird payout criteria.</span>
                </li>
                <li className="d-flex align-items-center gap-2 mb-3">
                  <CheckCircle size={18} className="text-coral" />
                  <span>No hidden tricks or dynamic reward deductions.</span>
                </li>
              </ul>
              
              <div className="promise-cta-action">
                <a href="#download-link" className="btn-fitze btn-promise-download px-5">
                  Download The App
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default PromiseSection;
