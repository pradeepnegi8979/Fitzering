import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Sparkles } from 'lucide-react';
import './FitzeRingSection.css';
// import fitzeRing from '../../../assets/upgrade-fitze-ring.png';
// import firzeRingMobile from '../../../assets/ring-for-mobile.png';
export const FitzeRingSection: React.FC = () => {
  //const [activeRing, setActiveRing] = useState<'midnight' | 'silver' | 'rose'>('silver');
  return (
    <section className="fitze-ring-section section py-5" id="fitze-ring">
      <Container>
        <div className="ring-container-card p-5 text-center">
          <div className="mb-4">
            {/* <span className="section-tag ring-tag">PREMIUM SMART WEARABLE</span> */}
            <h2 className="ring-title text-white">Upgrade your experience with <br/>
              <span className="" style={{color:'#FE572A', fontWeight:'600' }}>fitze</span>
              <span className="text-white">ring</span>
            </h2>
            <div className="ring-logo-wordmark">
              
            </div>
          </div>
          <div className="ring-action">
            <a href="#explore-ring" className="btn-fitze-dark px-5">
              Explore fitze Ring
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FitzeRingSection;
