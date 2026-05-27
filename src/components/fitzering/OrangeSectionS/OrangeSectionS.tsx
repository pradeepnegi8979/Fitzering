import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './OrangeSectionS.css';

export const OrangeSectionS: React.FC = () => {
  return (
    <section className="orange-section" id="orange-section">
      <Container className="find-perfect-fit-container">
        <Row className="align-items-center gy-5 gx-lg-5">
          {/* Left Column: Sizing Instructions & Button */}
          <Col lg={12} md={12} className="oragene-greadient-text text-center">
              <h2>You already show up.</h2>
              <h3>Now make it count.</h3>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OrangeSectionS;
