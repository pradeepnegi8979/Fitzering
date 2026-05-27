import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Download, Footprints, Gift } from 'lucide-react';
import './HowItWorksSection.css';


export const HowItWorksSection: React.FC = () => {
  return (
    <section className="homepage-consistency-section" id="consistency-section">
      <div className="container">
        <div className="consistency-wrapper-card">
          {/* Section Heading */}
          <div className="text-center mb-5">
            <span className="consistency-badge-pill mb-3">
              HOW IT WORKS
            </span>
            <h2 className="consistency-main-title font-sans">
              Make consistency <span className="highlight-coral-gradient">worth more.</span>
            </h2>
            <p className="consistency-main-subtitle">
              Built to help you stay active, stay consistent and earn from every step.
            </p>
          </div>

          {/* 3 Step Columns Grid */}
          <div className="row g-0 justify-content-center step-grid-row">
            {/* Step 1: Download */}
            <div className="col-lg-4 col-md-12 step-col">
              <div className="step-content-box text-center">
                <div className="step-icon-wrapper mb-4">
                  <Download size={44} className="icon-coral" />
                </div>
                <h3 className="step-box-title font-sans">Download</h3>
                <p className="step-box-desc">
                  Free to join. Get started in just a few seconds.
                </p>
              </div>
            </div>

            {/* Step 2: Walk */}
            <div className="col-lg-4 col-md-12 step-col step-col-middle">
              <div className="step-content-box text-center">
                <div className="step-icon-wrapper mb-4">
                  <Footprints size={44} className="icon-coral animate-pulse-slow" />
                </div>
                <h3 className="step-box-title font-sans">Walk</h3>
                <p className="step-box-desc">
                  Track your movement and stay consistent every day.
                </p>
              </div>
            </div>

            {/* Step 3: Earn */}
            <div className="col-lg-4 col-md-12 step-col">
              <div className="step-content-box text-center">
                <div className="step-icon-wrapper mb-4">
                  <Gift size={44} className="icon-coral" />
                </div>
                <h3 className="step-box-title font-sans">Earn</h3>
                <p className="step-box-desc">
                  Unlock exclusive rewards, real payouts and experiences through movement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};




export default HowItWorksSection;
