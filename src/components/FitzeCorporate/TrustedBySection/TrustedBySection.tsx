import React from 'react';
import { Container } from 'react-bootstrap';
import './TrustedBySection.css';
import logo1 from '../../../assets/logo1.svg';
import logo2 from '../../../assets/logo2.svg';
import logo3 from '../../../assets/logo3.svg';
import logo4 from '../../../assets/logo4.svg';
import logo5 from '../../../assets/logo5.svg';
export const TrustedBySection: React.FC = () => {
  return (
    <div className="trusted-by-block text-center py-4 my-3" id="trusted-by">
      <span className="trusted-by-text d-block mb-4">Trusted by</span>
      <Container>
        <div className="trusted-logo-bar d-flex flex-wrap justify-content-center align-items-center gap-3 gap-md-4">
          <div className="trusted-logo-pill"><img src={logo1} alt="logo1"></img></div>
          <div className="trusted-logo-pill"><img src={logo2} alt="logo2"></img></div>
          <div className="trusted-logo-pill"><img src={logo3} alt="logo3" style={{maxWidth:'150px'}}></img></div>
          <div className="trusted-logo-pill"><img src={logo4} alt="logo4" style={{maxWidth:'150px'}}></img></div>
          <div className="trusted-logo-pill"><img src={logo5} alt="logo5"></img></div>
          
        </div>
      </Container>
    </div>
  );
};

export default TrustedBySection;
