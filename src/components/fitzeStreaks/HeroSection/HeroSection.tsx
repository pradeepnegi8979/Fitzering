import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './HeroSection.module.css';

import BannerImage from '../../../assets/hero-banner-img.png';

export const HeroSection: React.FC = () => {
  return (
    <section
      className={styles['fitze-hero-section']}
      id="hero-section"
    >
      {/* Background Grid */}
      <div className={styles['decor-grid-lines']}>
        <div className={styles['grid-line']}></div>
        <div className={styles['grid-line']}></div>
        <div className={styles['grid-line']}></div>
        <div className={styles['grid-line']}></div>
        <div className={styles['grid-line']}></div>
      </div>

      {/* Hero Content */}
      <Container className={styles['fitze-hero-content-container']}>
        <Row className="align-items-center g-5 w-100">

          {/* Left Content */}
          <Col
            lg={6}
            md={12}
            className={styles['hero-text-col']}
          >
            <h1 className={styles['hero-headline']}>
              Consistency
              <br />
              finally pays off!
              <br />

              <span className={styles['orange-solid-text']}>
                Get Paid to Walk.
              </span>
            </h1>

            <p className={styles['hero-subtitle-desc']}>
              Show up daily. Hit your step goal. Earn your payout,
              guaranteed.
            </p>

            <div className={styles['hero-actions-container']}>

              <button className={styles['primary-streak-btn']}>
                Start your first Streak{' '}

                <span className={styles['free-badge']}>
                  FREE
                </span>
              </button>

              <div className={styles['hero-caption-note']}>
                No luck. Just consistency, rewarded.
              </div>
            </div>
          </Col>

          {/* Right Visual */}
          <Col
            lg={6}
            md={12}
            className={styles['hero-visuals-col']}
          >
            <div className={styles['hero-image-wrapper']}>

              {/* Main Image */}
              <img
                src={BannerImage}
                alt="Active couple running outdoors"
                className={styles['hero-main-banner-img']}
                referrerPolicy="no-referrer"
              />

              {/* Glare */}
              <div className={styles['hero-image-glare']}></div>

              {/* Notification Card */}
              {/* <div className={styles['live-notification-card']}>

                <div className={styles['notif-header']}>

                  <div className={styles['notif-app-info']}>

                    <div className={styles['careem-notif-circle']}>

                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="12"
                          fill="#00E676"
                        />

                        <path
                          d="M8 12C8 14.2 9.8 16 12 16C14.2 16 16 14.2 16 12"
                          stroke="#FFFFFF"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />

                        <circle
                          cx="9.5"
                          cy="9.5"
                          r="1.5"
                          fill="#FFFFFF"
                        />

                        <circle
                          cx="14.5"
                          cy="9.5"
                          r="1.5"
                          fill="#FFFFFF"
                        />
                      </svg>
                    </div>

                    <span className={styles['notif-app-name']}>
                      Careem
                    </span>
                  </div>

                  <span className={styles['notif-time']}>
                    now
                  </span>
                </div>

                <div className={styles['notif-body']}>
                  <span className={styles['notif-bold']}>
                    AED 48
                  </span>{' '}
                  has been successfully credited into your Careem
                  account!
                </div> 
              </div> */}

            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;