import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  Moon,
  Footprints,
  Brain,
  Droplets,
  Thermometer,
  Heart,
} from 'lucide-react';

import styles from './FitzeRingPromoSection.module.css';

import unlockFree from '../../../assets/unlockfree.png';

export const FitzeRingPromoSection: React.FC = () => {
  return (
    <section
      className={styles['ring-promo-section']}
      id="ring-promo-banner"
    >
      <Container className={styles['ring-section-container']}>

        <div className={styles['ring-promo-box']}>

          {/* Background */}
          <div className={styles['ring-background-media']}>

            <img
              src={unlockFree}
              alt="Fitze Ring smart wearable trio showcase"
              className={styles['ring-bg-raw-img']}
              referrerPolicy="no-referrer"
            />

            <div
              className={styles['ring-bg-gradient-overlay']}
            ></div>
          </div>

          {/* Content */}
          <div className={styles['ring-interactive-content']}>

            <Row
              className={`g-0 align-items-stretch ${styles['ring-grid-row']}`}
            >
              <Col
                xs={12}
                className={styles['ring-main-payload-col']}
              >

                {/* Header */}
                <div
                  className={`${styles['ring-header-block']} text-start`}
                >
                  <h3 className={styles['ring-pre-title']}>
                    Unlock FREE Streaks with
                  </h3>

                  <h2 className={styles['ring-brand-logo']}>
                    <span className={styles['brand-word-fitze']}>
                      fitze
                    </span>

                    <span className={styles['brand-word-ring']}>
                      ring
                    </span>
                  </h2>

                  <p className={styles['ring-subtitle-tag']}>
                    The easiest way to stay consistent
                  </p>
                </div>

                {/* Footer */}
                <div className={styles['ring-footer-row']}>

                  {/* Metrics */}
                  <div className={styles['ring-metrics-col']}>

                    <div
                      className={styles['ring-metrics-wrapper']}
                    >

                      <div
                        className={styles['premium-metric-badge']}
                        id="metric-sleep"
                      >
                        <Moon
                          className={styles['metric-lucide-icon']}
                          strokeWidth={2.2}
                        />

                        <span
                          className={styles['metric-label-text']}
                        >
                          Sleep
                        </span>
                      </div>

                      <div
                        className={styles['premium-metric-badge']}
                        id="metric-activity"
                      >
                        <Footprints
                          className={styles['metric-lucide-icon']}
                          strokeWidth={2.2}
                        />

                        <span
                          className={styles['metric-label-text']}
                        >
                          Activity
                        </span>
                      </div>

                      <div
                        className={styles['premium-metric-badge']}
                        id="metric-stress"
                      >
                        <Brain
                          className={styles['metric-lucide-icon']}
                          strokeWidth={2.2}
                        />

                        <span
                          className={styles['metric-label-text']}
                        >
                          Stress
                        </span>
                      </div>

                      <div
                        className={styles['premium-metric-badge']}
                        id="metric-blood-oxygen"
                      >
                        <Droplets
                          className={styles['metric-lucide-icon']}
                          strokeWidth={2.2}
                        />

                        <span
                          className={styles['metric-label-text']}
                        >
                          Blood oxygen
                        </span>
                      </div>

                      <div
                        className={styles['premium-metric-badge']}
                        id="metric-skin-temp"
                      >
                        <Thermometer
                          className={styles['metric-lucide-icon']}
                          strokeWidth={2.2}
                        />

                        <span
                          className={styles['metric-label-text']}
                        >
                          Skin Temperature
                        </span>
                      </div>

                      <div
                        className={styles['premium-metric-badge']}
                        id="metric-heartrate"
                      >
                        <Heart
                          className={styles['metric-lucide-icon']}
                          strokeWidth={2.2}
                        />

                        <span
                          className={styles['metric-label-text']}
                        >
                          Heart rate & HRV
                        </span>
                      </div>

                    </div>
                  </div>

                  {/* CTA */}
                  <div className={styles['ring-action-col']}>

                    <button
                      className={styles['explore-fitzering-btn']}
                      id="btn-explore-fitzering"
                    >
                      Explore fitze Ring
                    </button>
                  </div>
                </div>

              </Col>
            </Row>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default FitzeRingPromoSection;