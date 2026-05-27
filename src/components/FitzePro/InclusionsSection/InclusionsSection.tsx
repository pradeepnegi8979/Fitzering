import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './InclusionsSection.css';

// @ts-ignore
import inclusionsImg from '../../../assets/fitzepro-inclusion.png';

export const InclusionsSection: React.FC = () => {
  return (
    <section className="fitzepro-inclusions-wrapper" id="fitzepro-inclusions">
      <Container className="fitzepro-inclusions-container">
        
        {/* Centered Brand Heading Block */}
        <div className="inclusions-heading-block text-center">
          <span className="logo-brand-fitze-main">fitze</span>
          <span className="badge-pro-main">pro</span>
          <span className="inclusions-addon-text">Inclusions</span>
        </div>

        <Row className="g-4 align-items-stretch justify-content-center inclusions-content-row">
          
          {/* Left Column: Stack of 4 high-contrast white cards with custom elements */}
          <Col lg={6} md={12} className="d-flex flex-column justify-content-between">
            <div className="inclusions-list d-flex flex-column gap-3 justify-content-between h-100">
              
              {/* Item 1 */}
              <div className="inclusion-item-card d-flex align-items-center gap-4">
                <div className="inclusion-3d-icon-frame flex-shrink-0">
                  <svg width="52" height="52" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="shoeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#ff7b5a" />
                        <stop offset="100%" stop-color="#ff451d" />
                      </linearGradient>
                      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#ffe259" />
                        <stop offset="100%" stop-color="#ffa751" />
                      </linearGradient>
                    </defs>
                    <circle cx="32" cy="32" r="28" fill="#ffece7" opacity="0.3"/>
                    
                    {/* Gold coins stack 1 */}
                    <ellipse cx="46" cy="42" rx="7" ry="3.5" fill="url(#goldGrad)" stroke="#d98000" stroke-width="0.5" />
                    <ellipse cx="46" cy="39" rx="7" ry="3.5" fill="url(#goldGrad)" stroke="#d98000" stroke-width="0.5" />
                    <ellipse cx="46" cy="36" rx="7" ry="3.5" fill="url(#goldGrad)" stroke="#e49100" stroke-width="0.5" />
                    
                    {/* Gold coins stack 2 */}
                    <ellipse cx="40" cy="45" rx="6" ry="3" fill="url(#goldGrad)" stroke="#d98000" stroke-width="0.5" />
                    <ellipse cx="40" cy="42" rx="6" ry="3" fill="url(#goldGrad)" stroke="#e49100" stroke-width="0.5" />
                    
                    {/* Running Shoe */}
                    <path d="M12 36C12 36 16 28 22 26C28 24 38 28 42 24C44 22 42 16 46 16C50 16 52 24 50 32C48 38 40 42 34 42C26 42 12 40 12 36Z" fill="url(#shoeGrad)" />
                    <path d="M11 36C11 36 22 41 34 41C42 41 49 39 51 36C51 37.5 45 42.5 34 42.5C22 42.5 11 38.5 11 36Z" fill="#ffffff" />
                    <path d="M14 37C22 41 34 41 45 39" stroke="#ff451d" stroke-width="1.2" stroke-linecap="round" />
                    <path d="M28 26L32 29" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" />
                    <path d="M31 24L35 27" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" />
                  </svg>
                </div>
                <div className="inclusion-card-content text-start">
                  <h4 className="inclusion-card-title">Get paid to walk</h4>
                  <p className="inclusion-card-copy">
                    Join Streaks and earn guaranteed payouts for your consistency.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="inclusion-item-card d-flex align-items-center gap-4">
                <div className="inclusion-3d-icon-frame flex-shrink-0">
                  <svg width="52" height="52" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="trophyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#ffe259" />
                        <stop offset="100%" stop-color="#ffa751" />
                      </linearGradient>
                      <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#ff7b5a" />
                        <stop offset="100%" stop-color="#ff451d" />
                      </linearGradient>
                    </defs>
                    <circle cx="32" cy="32" r="28" fill="#fff5ec" opacity="0.3"/>
                    
                    {/* Momentum rising bars and arrow */}
                    <path d="M14 36L24 28L30 32L44 18" stroke="url(#arrowGrad)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M38 18H44V24" stroke="url(#arrowGrad)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    
                    {/* Trophy cup */}
                    <path d="M20 22V28C20 34.6 25.4 40 32 40C38.6 40 44 34.6 44 28V22H20Z" fill="url(#trophyGrad)" stroke="#e49100" stroke-width="0.5" />
                    <rect x="25" y="44" width="14" height="3" rx="1" fill="#7d7d7d" />
                    <path d="M30 40H34V44H30V40Z" fill="url(#trophyGrad)" />
                    <path d="M20 25H16V31C16 33 18 35 20 35" stroke="url(#trophyGrad)" stroke-width="2" stroke-linecap="round" />
                    <path d="M44 25H48V31C48 33 46 35 44 35" stroke="url(#trophyGrad)" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </div>
                <div className="inclusion-card-content text-start">
                  <h4 className="inclusion-card-title">Increase winning chances</h4>
                  <p className="inclusion-card-copy">
                    Join unlimited challenges. Get double entries in every draw.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="inclusion-item-card d-flex align-items-center gap-4">
                <div className="inclusion-3d-icon-frame flex-shrink-0">
                  <svg width="52" height="52" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="tagGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#ff7b5a" />
                        <stop offset="100%" stop-color="#ff451d" />
                      </linearGradient>
                    </defs>
                    <circle cx="32" cy="32" r="28" fill="#ffece7" opacity="0.3"/>
                    <g transform="rotate(-15 32 32)">
                      <rect x="18" y="22" width="28" height="20" rx="4" fill="url(#tagGrad)" />
                      <path d="M18 22L12 32L18 42H18.5V22H18Z" fill="url(#tagGrad)" />
                      <circle cx="16" cy="32" r="2.5" fill="#ffffff" />
                      <text x="31" y="36.5" fill="#ffffff" font-family="'Poppins', sans-serif" font-weight="800" font-size="12px" text-anchor="middle" alignment-baseline="middle">%</text>
                    </g>
                  </svg>
                </div>
                <div className="inclusion-card-content text-start">
                  <h4 className="inclusion-card-title">Unlock better rewards</h4>
                  <p className="inclusion-card-copy">
                    Earn more daily points. Redeem offers across 150+ brands.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="inclusion-item-card d-flex align-items-center gap-4">
                <div className="inclusion-3d-icon-frame flex-shrink-0">
                  <svg width="52" height="52" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="headGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#ff7b5a" />
                        <stop offset="100%" stop-color="#ff451d" />
                      </linearGradient>
                      <linearGradient id="goldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#ffe259" />
                        <stop offset="100%" stop-color="#ffa751" />
                      </linearGradient>
                    </defs>
                    <circle cx="32" cy="32" r="28" fill="#ffece7" opacity="0.3"/>
                    <path d="M20 34C20 22 24 16 32 16C40 16 44 22 44 34" stroke="url(#goldGrad2)" stroke-width="3" stroke-linecap="round" />
                    <rect x="16" y="28" width="8" height="12" rx="3" fill="url(#headGrad)" />
                    <rect x="40" y="28" width="8" height="12" rx="3" fill="url(#headGrad)" />
                    <path d="M20 36C20 41 25 45 29 45" stroke="#ffa751" stroke-width="2" stroke-linecap="round" />
                    <circle cx="30" cy="45" r="1.5" fill="#ff451d" />
                  </svg>
                </div>
                <div className="inclusion-card-content text-start">
                  <h4 className="inclusion-card-title">Get help when you need it</h4>
                  <p className="inclusion-card-copy">
                    Priority support with faster, dedicated assistance.
                  </p>
                </div>
              </div>

            </div>
          </Col>

          {/* Right Column: Premium Shopping Mall Photo matching layout perfectly */}
          <Col lg={6} md={12} className="d-flex align-items-center">
            <div className="inclusions-photo-frame w-100">
              <img 
                src={inclusionsImg} 
                alt="Active shopping mall scenario with family" 
                className="inclusions-fluid-image img-fit-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </Col>

        </Row>

        {/* Bottom Centered Pills CTA */}
        <div className="inclusions-bottom-cta text-center">
          <button className="inclusions-orange-cta-btn" id="inclusions-upgrade-cta">
            Upgrade to <span className="badge-pro-cta-white">pro</span>
          </button>
        </div>

      </Container>
    </section>
  );
};

export default InclusionsSection;
