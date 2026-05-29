import React from 'react';
import { Container } from 'react-bootstrap';
import './HeroSection.css';

export const HeroSection: React.FC = () => {
  return (
    <section className="contact-hero-section" id="contact-hero">
      <div className="contact-hero-grid-overlay"></div>
      <Container className="text-center contact-hero-container">
        <div className="contact-badge-wrapper mb-3">
          <span className="contact-badge-pill">Get in touch</span>
        </div>
        <h1 className="contact-hero-title">
          Get paid to <span className="highlight-walk">walk.</span>
        </h1>
      </Container>
    </section>
  );
};

export default HeroSection;
