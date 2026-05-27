import React from 'react';
import { Container } from 'react-bootstrap';
import './RingPromoSection.css';
export const RingPromoSection: React.FC = () => {
  return (
    <section className="fitzepro-ring-wrapper" id="fitzepro-ring-promo-section">
      <Container className="fitzepro-ring-container-fluid">
        <div className="ring-promo-dune-card" id="ring-promo-main-card">
            <div className="ring-top-capsule-badge-wrapper" id="ring-badge-wrapper">
            <span className="ring-top-capsule-badge" id="ring-top-badge">
              GET STARTED
            </span>
          </div>
          <h2 className="ring-display-main-headline" id="ring-main-heading">
            Get FREE PRO with <span className="logo-brand-f">fitze</span> <span className="logo-brand-r">Ring</span>
          </h2>
          <p className="ring-display-subdescription" id="ring-subdescription">
            Track your body, build better habits and unlock the complete fitze experience.
          </p>
          <div className="ring-metrics-pills-row" id="ring-pills-row">
            <div className="metric-pill" id="metric-pill-sleep">
              <span className="metric-icon-box" id="metric-icon-sleep">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  <path d="M19 14c0-1.1-.9-2-2-2-.2 0-.4 0-.6.1C15.8 9.9 14.5 9 13 9c-2.2 0-4 1.8-4 4 0 .2 0 .4.1.6C7.9 14 7 15.4 7 17c0 2.2 1.8 4 4 4h6c1.7 0 3-1.3 3-3 0-1.4-1-2.6-2.4-2.9c0-.1.4-.4.4-.7Z" strokeWidth="1.2" opacity="0.8" />
                </svg>
              </span>
              <span className="metric-label" id="metric-label-sleep">Sleep Insights</span>
            </div>
            <div className="metric-pill" id="metric-pill-activity">
              <span className="metric-icon-box" id="metric-icon-activity">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21c1-2 1-4.5 1.5-6.5S4 10 5.5 8s2.5-1.5 3 .5-.5 4.5 0 6.5s.5 4 1 6.5" />
                  <path d="M14 21c1-2 1-4.5 1.5-6.5S15 10 16.5 8s2.5-1.5 3 .5-.5 4.5 0 6.5s.5 4 1 6.5" />
                </svg>
              </span>
              <span className="metric-label" id="metric-label-activity">Activity Tracking</span>
            </div>
            <div className="metric-pill" id="metric-pill-oxygen">
              <span className="metric-icon-box" id="metric-icon-oxygen">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7Z" />
                  <text x="12" y="16.5" fill="currentColor" stroke="none" fontSize="6px" fontFamily="'Poppins', sans-serif" fontWeight="900" textAnchor="middle">O₂</text>
                </svg>
              </span>
              <span className="metric-label" id="metric-label-oxygen">Blood oxygen</span>
            </div>
            <div className="metric-pill" id="metric-pill-stress">
              <span className="metric-icon-box" id="metric-icon-stress">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2Z" />
                  <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2Z" />
                </svg>
              </span>
              <span className="metric-label" id="metric-label-stress">Stress Balance</span>
            </div>
            <div className="metric-pill" id="metric-pill-temp">
              <span className="metric-icon-box" id="metric-icon-temp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
                  <path d="M12 9h.01" />
                  <path d="M12 12h.01" />
                </svg>
              </span>
              <span className="metric-label" id="metric-label-temp">Skin Temperature Trends</span>
            </div>
            <div className="metric-pill" id="metric-pill-hr">
              <span className="metric-icon-box" id="metric-icon-hr">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  <path d="M6 9h2.5l1.5-3 2 6 1.5-4 1.5 1H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="metric-label" id="metric-label-hr">Heart Rate & HRV</span>
            </div>
            </div>
          <div className="ring-explore-action-block" id="ring-explore-action-block">
            <button className="ring-explore-brand-btn" id="ring-explore-button">
              Explore <span className="explore-brand-fitze">fitze</span> <span className="explore-brand-ring">ring</span>
            </button>
          </div>
          </div>
          </Container>
    </section>
  );
};

export default RingPromoSection;
