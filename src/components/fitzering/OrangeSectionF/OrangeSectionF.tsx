import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './OrangeSectionF.css';

export const OrangeSectionF: React.FC = () => {
  return (
    <section className="orange-section" id="orange-section" style={{background:'#FE572A'}}>
      <Container className="find-perfect-fit-container">
        <Row className="align-items-center gy-5 gx-lg-5">
          {/* Left Column: Sizing Instructions & Button */}
          <Col lg={12} md={12} className="oragene-greadient-text text-center">
              <h2>Know when to push.</h2>
              <h3>Know when to slow down.</h3>
          </Col>

          
        </Row>
      </Container>
    </section>
  );
};

export default OrangeSectionF;
