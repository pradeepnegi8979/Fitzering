import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './CallToActionSection.css';

export const CallToActionSection: React.FC = () => {
  return (
    <section className="cta-section py-5 bg-dark-custom">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={12} md={12}>
            <h2 className="cta-headline mb-4">Be the next success story.</h2>
            <a href="#download" className="btn-fitze btn-cta">
              Get the app now
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallToActionSection;
