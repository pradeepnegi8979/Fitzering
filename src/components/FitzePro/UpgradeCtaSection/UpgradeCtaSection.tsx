import React from 'react';
import { Container } from 'react-bootstrap';
import './UpgradeCtaSection.css';

export const UpgradeCtaSection: React.FC = () => {
  return (
    <section className="fitzepro-final-cta-wrapper" id="fitzepro-upgrade-cta-section">
      <Container className="text-center" id="upgrade-cta-container">
        
        {/* Title with Gradient Text Styling */}
        <h2 className="final-cta-title" id="final-cta-title">
          Move through life with more.
        </h2>

        {/* Subtitle list */}
        <p className="final-cta-subtitle" id="final-cta-subtitle">
          More movement. More rewards. More from every day.
        </p>

        {/* Bottom solid orange upgrading pill with outlined badge inside */}
        <div className="final-cta-btn-wrapper" id="final-cta-btn-wrapper">
          <button className="final-orange-btn-huge" id="final-cta-upgrade">
            Upgrade to <span className="pro-pill-outline">pro</span>
          </button>
        </div>

      </Container>
    </section>
  );
};

export default UpgradeCtaSection;
