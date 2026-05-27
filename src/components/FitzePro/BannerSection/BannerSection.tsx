import React from 'react';
import { Container } from 'react-bootstrap';
import './BannerSection.css';

export const BannerSection: React.FC = () => {
  return (
    <section className="fitzepro-banner-wrapper" id="fitzepro-value-banner">
      <Container className="text-center" id="banner-section-container">
        
        {/* Top pill shape outline badge */}
        <div className="banner-eyebrow-capsule-wrapper" id="banner-eyebrow-capsule-wrapper">
          <span className="banner-eyebrow-capsule" id="banner-eyebrow-badge">
            WIN MORE. EARN MORE.
          </span>
        </div>
        
        {/* Main display headline with custom fitze pro logo elements */}
        <h2 className="fitzepro-banner-text" id="fitzepro-banner-heading">
          Users unlock more value with <span className="banner-brand-fitze">fitze</span><span className="banner-pro-badge">pro</span>
        </h2>

      </Container>
    </section>
  );
};

export default BannerSection;
