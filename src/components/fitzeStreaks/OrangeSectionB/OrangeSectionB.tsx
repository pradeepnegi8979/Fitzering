import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './OrangeSectionB.module.css';

export const OrangeSectionB: React.FC = () => {
  return (
    <section
      className={styles['orange-section']}
      id="orange-section"
    >
      <Container
        className={styles['find-perfect-fit-container']}
      >
        <Row className="align-items-center gy-5 gx-lg-5">

          {/* Content */}
          <Col
            lg={12}
            md={12}
            className={`${styles['oragene-greadient-text']} text-center`}
          >
            <h2>You already show up.</h2>

            <h3>Now make it count.</h3>

            <div className={styles['ring-action-col']}>

              <button
                className={styles['explore-fitzering-btn']}
                id="btn-explore-fitzering"
                style={{
                  backgroundColor: '#ff5226',
                  marginTop: '20px',
                }}
              >
                Explore fitze Ring
              </button>

            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default OrangeSectionB;