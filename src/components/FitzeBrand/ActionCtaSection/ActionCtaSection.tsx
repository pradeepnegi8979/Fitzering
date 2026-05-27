import React from 'react';
import { Container } from 'react-bootstrap';
import './ActionCtaSection.css';

export const ActionCtaSection: React.FC = () => {
  return (
    <section className="fitze-action-cta-section" id="fitze-action-cta">
      <Container className="text-center">
        {/* Core CTA Block */}
        <div className="action-cta-content-wrapper" id="action-cta-card">
          <div className="action-badge-container">
            <span className="action-cta-badge"> FITZE FOR BRANDS </span>
          </div>
          <h2 className="action-cta-title" id="action-title-heading">
            Build your next movement-led<br />
            <span className="action-title-muted">campaign with fitze.</span>
          </h2>
          <p className="action-cta-desc" id="action-description-text">
            Create experiences people don't just see, they participate in.
          </p>
          <div className="action-btn-frame">
            <button className="btn-plan-activation-pill" id="action-btn-trigger">
              Plan Your Brand Activation
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default ActionCtaSection;