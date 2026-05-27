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
               <p className="promise-desc-text text-white">
                Show up. Move. Earn. No spins. No hidden tricks.
              </p>
             
              
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
