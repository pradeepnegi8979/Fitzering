import React from 'react';
import { Container } from 'react-bootstrap';
import { ArrowRight } from 'lucide-react';
import './WhyProSection.css';

export const WhyProSection: React.FC = () => {
  return (
    <section className="fitzepro-why-section-wrapper" id="fitzepro-why-pro">
      <Container className="fitzepro-why-content-container text-center">
        
        {/* Outline Badge */}
        <div className="why-top-badge-wrapper">
          <span className="why-get-started-badge">GET STARTED</span>
        </div>

        {/* Central Display Title */}
        <h2 className="why-display-headline">
          Why Thousands Choose <span className="logo-brand-white">fitze</span><span className="badge-pro-inside-title">pro</span>
        </h2>

        {/* Horizontal Flows System */}
        <div className="why-pills-row-flow">
          
          {/* Pill 1 */}
          <div className="why-flow-pill-card">
            <span className="flow-pill-text">More Streaks</span>
          </div>

          {/* Separation Arrow 1 */}
          <div className="why-flow-arrow-separator">
            <ArrowRight size={22} className="flow-arrow-icon" strokeWidth={2.5} />
          </div>

          {/* Pill 2 */}
          <div className="why-flow-pill-card">
            <span className="flow-pill-text">Better Rewards</span>
          </div>

          {/* Separation Arrow 2 */}
          <div className="why-flow-arrow-separator">
            <ArrowRight size={22} className="flow-arrow-icon" strokeWidth={2.5} />
          </div>

          {/* Pill 3 */}
          <div className="why-flow-pill-card">
            <span className="flow-pill-text">Exclusive Benefits</span>
          </div>

        </div>

      </Container>
    </section>
  );
};

export default WhyProSection;
