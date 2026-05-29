import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './HowItWorksSection.module.css';

import pickaStreak from '../../../assets/pickastreak.png';
import getCustomGoals from '../../../assets/get-custom-goals.png';
import walkDaily from '../../../assets/walk-daily.png';
import EarnYourPayout from '../../../assets/earnyour-payout.png';
import bgImg from '../../../assets/bg-img.png';
export const HowItWorksSection: React.FC = () => {
  return (
    <section
      className={styles['fitze-how-it-works-section']}
      id="how-it-works"
    >
      <div className={styles['greadingImg']}>
               <img src={bgImg} alt="background-image" style={{maxWidth:'100%'}}/>
              </div>
      {/* Ambient Background */}
      <div className={styles['fitze-ambient-glow-topLeft']}></div>
      <div className={styles['fitze-ambient-glow-center']}></div>
      <div className={styles['fitze-ambient-glow-bottomRight']}></div>

      <Container className={styles['bento-content-container']}>

        {/* Header */}
        <div className={styles['section-header-wrap']}>
          <div className={styles['eyebrow-badge-container']}>
            <span className={styles['eyebrow-badge']}>
              HOW IT WORKS
            </span>
          </div>

          <h2 className={styles['how-it-works-title']}>
            Consistency that{' '}
            <span className={styles['highlight-coral-grad']}>
              pays you back.
            </span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className={styles['bento-master-quad']}>

          {/* Divider */}
          <div
            className={`${styles['bento-divider-lines']} d-none d-lg-block`}
          >
            <div className={styles['divider-h']}></div>
            <div className={styles['divider-v']}></div>
          </div>

          <Row className="g-0" style={{ zIndex: '9' }}>
              
            {/* STEP 01 */}
            <Col lg={6} md={12} className={styles['bento-quad-cell']}>
              <div className={styles['quad-cell-inner']}>

                <div className={styles['step-bar-heading']}>
                  <div
                    className={`${styles['bento-step-num-circle']} ${styles['grey-num-border']}`}
                  >
                    01.
                  </div>

                  <div className={styles['bento-heading-content']}>
                    <h3 className={styles['bento-step-title']}>
                      Pick a Streak
                    </h3>

                    <p className={styles['bento-step-subdesc']}>
                      Choose a Streak that matches your pace.
                    </p>
                  </div>
                </div>

                <div
                  className={`${styles['quad-visual-canvas']} ${styles['picker-canvas-wrap']}`}
                >
                  <img
                    src={pickaStreak}
                    alt="Pick a Streak"
                    className="img-fluid"
                  />
                </div>
              </div>
            </Col>

            {/* STEP 02 */}
            <Col lg={6} md={12} className={styles['bento-quad-cell']}>
              <div
                className={`${styles['quad-cell-inner']} ${styles['flex-align-right']}`}
              >

                <div
                  className={`${styles['step-bar-heading']} ${styles['reverse-layout']}`}
                >
                  <div
                    className={`${styles['bento-step-num-circle']} ${styles['grey-num-border']}`}
                  >
                    02.
                  </div>

                  <div className={styles['bento-heading-content']}>
                    <h3
                      className={`${styles['bento-step-title']} ${styles['text-desktop-end']}`}
                    >
                      Get custom goals
                    </h3>

                    <p
                      className={`${styles['bento-step-subdesc']} ${styles['text-desktop-end']}`}
                    >
                      Step targets curated to your fitness level.
                    </p>
                  </div>
                </div>

                <div
                  className={`${styles['quad-visual-canvas']} ${styles['schedule-canvas-wrap']}`}
                >
                  <img
                    src={getCustomGoals}
                    alt="Get custom goals"
                    className="img-fluid"
                  />
                </div>
              </div>
            </Col>

            {/* STEP 03 */}
            <Col lg={6} md={12} className={styles['bento-quad-cell']}>
              <div className={styles['quad-cell-inner']}>

                <div className={styles['step-bar-heading']}>
                  <div
                    className={`${styles['bento-step-num-circle']} ${styles['grey-num-border']}`}
                  >
                    03.
                  </div>

                  <div className={styles['bento-heading-content']}>
                    <h3 className={styles['bento-step-title']}>
                      Walk daily
                    </h3>

                    <p className={styles['bento-step-subdesc']}>
                      Hit your goal. Use rest days wisely.
                    </p>
                  </div>
                </div>

                <div
                  className={`${styles['quad-visual-canvas']} ${styles['daily-canvas-wrap']}`}
                >
                  <img
                    src={walkDaily}
                    alt="Walk daily"
                    className="img-fluid"
                  />
                </div>
              </div>
            </Col>

            {/* STEP 04 */}
            <Col lg={6} md={12} className={styles['bento-quad-cell']}>
              <div
                className={`${styles['quad-cell-inner']} ${styles['flex-align-right']}`}
              >

                <div
                  className={`${styles['step-bar-heading']} ${styles['reverse-layout']}`}
                >
                  <div
                    className={`${styles['bento-step-num-circle']} ${styles['grey-num-border']}`}
                  >
                    04.
                  </div>

                  <div className={styles['bento-heading-content']}>
                    <h3
                      className={`${styles['bento-step-title']} ${styles['text-desktop-end']}`}
                    >
                      Earn your payout
                    </h3>

                    <p
                      className={`${styles['bento-step-subdesc']} ${styles['text-desktop-end']}`}
                    >
                      Finish strong and earn in your Careem wallet.
                    </p>
                  </div>
                </div>

                <div
                  className={`${styles['quad-visual-canvas']} ${styles['payout-canvas-wrap']}`}
                >
                  <img
                    src={EarnYourPayout}
                    alt="Earn Your Payment"
                    className="img-fluid"
                  />
                </div>
              </div>
            </Col>

          </Row>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;