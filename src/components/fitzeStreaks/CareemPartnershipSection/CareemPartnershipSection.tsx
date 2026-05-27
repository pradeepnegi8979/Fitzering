import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './CareemPartnershipSection.module.css';

import IconCareem from '../../../assets/careem-pay-white.svg';
import CareemWallet from '../../../assets/careemWallet.png';

export const CareemPartnershipSection: React.FC = () => {
  return (
    <section
      className={styles['fitze-payout-partner-section']}
      id="payout-partner"
    >
      <Container className={styles['payout-content-container']}>
        <Row className="align-items-center g-5">

          {/* Left Column */}
          <Col
            lg={6}
            md={12}
            className={`${styles['payout-text-block']} text-start`}
          >

            {/* Badge */}
            <div className={styles['payout-badge-wrapper']}>
              <span className={styles['payout-badge']}>
                OFFICIAL PAYOUT PARTNER
              </span>
            </div>

            {/* Heading */}
            <h2 className={styles['payout-main-title']}>
              Earnings credited directly{' '}
              <br className="d-none d-lg-block" />
              <span>
                to your{' '}
                <img
                  src={IconCareem}
                  alt="Careem Pay"
                  style={{
                    maxWidth: '170px',
                    transform: 'translate(0px, -4px)',
                  }}
                />{' '}
                wallet
              </span>
            </h2>

            {/* Description */}
            <p
              className={`${styles['payout-description']} ${styles['animate-fade-in']}`}
            >
              Withdraw it to your bank account or spend it across rides,
              food, groceries and more.
            </p>
          </Col>

          {/* Right Column */}
          <Col
            lg={6}
            md={12}
            className={`${styles['payout-image-block']} text-center text-lg-end`}
          >
            <div className={styles['payout-visual-container']}>

              <img
                src={CareemWallet}
                alt="Happy athletic couple jogging outdoors together"
                className={styles['payout-squircle-image']}
                referrerPolicy="no-referrer"
              />

              <div
                className={styles['payout-image-accent-glow']}
              ></div>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default CareemPartnershipSection;