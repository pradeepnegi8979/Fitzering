import React from 'react';
import { Container } from 'react-bootstrap';
import './ReadyBannerSection.css';

export const ReadyBannerSection: React.FC = () => {
  return (
    <div className="ready-orange-full-banner my-5" id="energize-banner">
      <Container className="text-center py-5">
        <h2 className="orange-banner-title">Ready to Energize Your Team?</h2>
        <p className="orange-banner-sub">
          From one-day activations to long-term workforce engagement programs, fitze helps organisations create participation at scale.
        </p>
      </Container>
    </div>
  );
};

export default ReadyBannerSection;
