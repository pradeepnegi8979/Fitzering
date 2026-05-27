import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRight } from 'lucide-react';
import './TrackProgressSection.css';
import trackProgressBgImg from '../../../assets/track-your-progress.png';
import CareemPAy from '../../../assets/icon-careem.svg';
export const TrackProgressSection: React.FC = () => {
  return (
    <section className="track-progress-banner py-5 bg-dark position-relative overflow-hidden" id="payouts" >
      {/* Background patterns representing grid photo overlays */}
      <div className="backdrop-grid-overlay" >
        <img src={trackProgressBgImg} alt="Track Progress Background" className="background-image"  style={{opacity:'0.2', width:'100%'}}/>
        {/* <div className="overlay-tint"></div> */}
      </div>
      
      <Container className="position-relative z-3 py-5 text-center">
        <Row className="justify-content-center">
          <Col lg={8} md={10} sm={12}>
            
            
            <h2 className="progress-headline text-white mb-2">
              Track your progress.
              Hit your goals.
                </h2>
                
                <h1 className="progress-payout-text mb-2  text-white">
              Earn real <span className="payout-colored">payouts.</span>
            </h1>
            
            <p className="progress-wallet-sub mb-4 text-white">
              in your connected <span className="wallet-brand font-weight-bold">
                  <img src={CareemPAy} alt="Careem pay" style={{maxWidth:'70px', transform:'translate(0px, -2px)'}}/>
                </span> wallet.
            </p>
            
            <div className="d-flex justify-content-center">
              <a href="#download" className="btn-fitze btn-progress-download">
                Download The App
                <ArrowRight size={18} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TrackProgressSection;
