import React from 'react';
import { Container } from 'react-bootstrap';
import './TrustedBySection.css';

export const TrustedBySection: React.FC = () => {
  return (
    <div className="trusted-by-block text-center py-4 my-3" id="trusted-by">
      <span className="trusted-by-text d-block mb-4">Trusted by</span>
      <Container>
        <div className="trusted-logo-bar d-flex flex-wrap justify-content-center align-items-center gap-3 gap-md-4">
          <div className="trusted-logo-pill">Aldar</div>
          <div className="trusted-logo-pill">Careem</div>
          <div className="trusted-logo-pill">Hub71</div>
          <div className="trusted-logo-pill">Cleveland Clinic</div>
          <div className="trusted-logo-pill">ADNOC</div>
          <div className="trusted-logo-pill">Emirates</div>
        </div>
      </Container>
    </div>
  );
};

export default TrustedBySection;
