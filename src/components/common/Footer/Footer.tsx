import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import appleStore from '../../../assets/apple-app-store.svg';
import googleStore from '../../../assets/Google-play-store.svg';
import huaweiStore from '../../../assets/huawei-app-gallery.svg';
import paymentIcon from '../../../assets/payment-gateway.svg';
import Instagram from '../../../assets/instagramicon.svg';  
import LinkedIn from '../../../assets/linkedicon.svg';  
export const Footer: React.FC = () => {
  return (
    <footer className="footer-fitze" id="footer">
      <Container>
        <Row className="footer-main-row align-items-start">
          {/* Left Block - Massive Brand Logo */}
          <Col lg={7} md={12} className="footer-logo-col">
            <h1 className="brand-logo-huge">fitze</h1>
          </Col>

          {/* Right Block - Navigation Columns and App Downloads */}
          <Col lg={5} md={12} className="footer-links-col">
            <Row className="links-subgrid mb-5">
              {/* Column 1: About Us */}
              <Col xs={6} className="links-subcol">
                <h5 className="footer-link-title">About us</h5>
                <ul className="footer-link-list">
                  <li><a href="#how-it-works">How it works</a></li>
                  <li><a href="#terms">T&Cs</a></li>
                  <li><a href="#privacy">Privacy Policy</a></li>
                  <li><a href="#faqs">FAQs</a></li>
                </ul>
              </Col>

              {/* Column 2: Partner with Fitze */}
              <Col xs={6} className="links-subcol">
                <h5 className="footer-link-title">Partner with fitze</h5>
                <ul className="footer-link-list">
                  <li><a href="#wellness">Employee Wellness & Corporate Engagement</a></li>
                  <li><a href="#marketing">Market your Brand on Fitze</a></li>
                  <li><a href="#ambassador">Become an Ambassador</a></li>
                  <li><a href="#community">Fitze Community</a></li>
                </ul>
              </Col>
            </Row>

            <div className="footer-download-section">
              <h5 className="footer-download-title">Download the fitze app now</h5>
              <div className="footer-badges-container d-flex flex-wrap gap-2">
                {/* App Store Badge */}
                <a href="#appstore" className="custom-app-badge-btn" aria-label="Download on the App Store">
                  {/* <div className="badge-icon-left">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,22C14.32,22.05 13.89,21.24 12.37,21.24C10.84,21.24 10.37,21.97 9.1,22.03C7.79,22.08 6.8,20.73 5.96,19.5C4.26,17 2.97,12.4 4.72,9.37C5.59,7.87 7.13,6.92 8.8,6.9C10.06,6.87 11.26,7.74 12.03,7.74C12.8,7.74 14.24,6.7 15.75,6.85C16.38,6.88 18.15,7.11 19.32,8.82C19.23,8.88 17.15,10.1 17.18,12.57C17.21,15.53 19.82,16.5 19.85,16.53C19.83,16.59 19.42,18 18.71,19.5M15.97,4.17C16.63,3.37 17.07,2.28 16.95,1C16,1.04 14.9,1.6 14.24,2.38C13.68,3.04 13.19,4.14 13.34,5.39C14.39,5.47 15.4,4.88 15.97,4.17Z" />
                    </svg>
                  </div>
                  <div className="badge-text-right">
                    <span className="badge-sub-text">Download on the</span>
                    <span className="badge-main-text">App Store</span>
                  </div> */}
                  <img src={appleStore} alt="Download on the App Store" />
                </a>

                {/* Google Play Badge */}
                <a href="#playstore" className="custom-app-badge-btn" aria-label="Get it on Google Play">
                  {/* <div className="badge-icon-left">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M3,5.27V18.73L16.55,12L3,5.27M17.87,11.33L19.5,12.16L17.87,13L16.55,12L17.87,11.33M3,3.15L17.87,10.5L16.55,12L3,3.15M3,20.85L16.55,12L17.87,13.5L3,20.85Z" />
                    </svg>
                  </div>
                  <div className="badge-text-right">
                    <span className="badge-sub-text">GET IT ON</span>
                    <span className="badge-main-text">Google Play</span>
                  </div> */}
                  <img src={googleStore} alt="Get it on Google Play" />

                </a>

                {/* AppGallery Badge */}
                <a href="#appgallery" className="custom-app-badge-btn" aria-label="Explore it on AppGallery">
                  {/* <div className="badge-icon-left">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <circle cx="12" cy="12" r="10" fill="#E53935"/>
                      <circle cx="12" cy="12" r="6" fill="#FFFFFF"/>
                      <circle cx="12" cy="12" r="3" fill="#E53935"/>
                    </svg>
                  </div>
                  <div className="badge-text-right">
                    <span className="badge-sub-text">EXPLORE IT ON</span>
                    <span className="badge-main-text">AppGallery</span>
                  </div> */}
                  <img src={huaweiStore} alt="Explore it on AppGallery" />
                </a>
              </div>
            </div>
          </Col>
        </Row>

        {/* Separator / clear space mimicking visual proportions */}
        <div className="footer-spacing-breaker"></div>

        {/* Bottom Section containing Copyright, Payment Pill, and Social Icons */}
        <Row className="footer-bottom-row align-items-center">
          {/* Left: Copyright text */}
          <Col lg={5} md={12} className="text-lg-start text-center mb-4 mb-lg-0">
            <span className="copyright-text-fitze">
              © Copyright 2026. All Rights Reserved.&nbsp;&nbsp;&nbsp;&nbsp;Hub71 Member.
            </span>
          </Col>

          {/* Center-Right: White Card Payment Pill */}
          <Col lg={4} md={12} className="text-center d-flex justify-content-center mb-4 mb-lg-0">
            <div className="payment-providers-pill">
              

              

              {/* UnionPay styled placeholder */}
              <div className="payment-logo unionpay-badge">
                <img src={paymentIcon} alt="Payment Gateway" className="unionpay-svg" />
              </div>
            </div>
          </Col>

          {/* Right: Solid cutout icons */}
          <Col lg={3} md={12} className="text-lg-end text-center d-flex justify-content-center justify-content-lg-end">
            <div className="footer-cutout-social-links d-flex gap-2">
              {/* LinkedIn Cutout Icon */}
              <a href="#linkedin" className="social-cutout-btn" aria-label="LinkedIn">
                <img src={LinkedIn} alt="LinkedIn" className="social-cutout-svg" />
              </a>

              {/* Instagram Cutout Icon */}
              <a href="#instagram" className="social-cutout-btn" aria-label="Instagram">
               <img src={Instagram} alt="Instagram" className="social-cutout-svg" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
