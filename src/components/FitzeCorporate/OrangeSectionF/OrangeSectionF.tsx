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
              <div className="provenlevel text-center">
                <span className="lebeltext">Proven across the UAE</span>
              </div>
              
              <h2>Ready to Energize Your Team?</h2>
              <p>From one-day activations to long-term workforce engagement programs, fitze helps organisations create participation at scale.</p>
          </Col>

          
        </Row>
      </Container>
    </section>
  );
};

export default OrangeSectionF;
