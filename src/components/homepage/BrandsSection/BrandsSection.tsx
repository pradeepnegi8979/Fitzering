import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './BrandsSection.css';

export const BrandsSection: React.FC = () => {
  return (
    <section className="brands-section py-4 bg-white border-bottom border-top">
      <Container>
        <Row className="align-items-center">
          <Col lg={3} md={12} className="mb-3 mb-lg-0 text-center text-lg-start">
            <h5 className="brands-headline">Awards & <br />Partnerships</h5>
          </Col>
          
          <Col lg={9} md={12}>
            <div className="brands-carousel d-flex align-items-center justify-content-between flex-wrap gap-4 px-3">
              {/* Partner 1 */}
              <div className="partner-node">
                <span className="award-year text-coral">Nominated 2024</span>
                <span className="partner-logo-text">e&amp; smb awards</span>
              </div>
              
              {/* Partner 2 - Rakez */}
              <div className="partner-node">
                <span className="partner-logo-text text-dark fs-5 font-weight-bold">rakez</span>
              </div>
              
              {/* Partner 3 - GB Tech */}
              <div className="partner-node">
                <span className="partner-logo-text text-dark fs-5 font-weight-bold">gb tech</span>
              </div>
              
              {/* Partner 4 - Huawei */}
              <div className="partner-node">
                <span className="partner-logo-text text-danger fs-5 font-weight-bold">huawei</span>
              </div>
              
              {/* Partner 5 - Careem */}
              <div className="partner-node">
                <span className="partner-logo-text text-success fs-5 font-weight-bold">careem</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BrandsSection;
