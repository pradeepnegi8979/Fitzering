import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Check, X, Shield, Battery, Droplet, Cpu, Weight } from 'lucide-react';
import './FinerDetailsSection.css';
import ring1 from '../../../assets/ring1.png';
import ring2 from '../../../assets/ring2.png';
import chargingCable from '../../../assets/charging-cable.png'; 

export const FinerDetailsSection: React.FC<FinerDetailsSectionProps> = () => {
  const [activeTab, setActiveTab] = useState<'box' | 'compare' | 'specs'>('box');

  return (
    <section className="finer-details-section" id="finer-details">
      <Container className="finer-details-container">
        {/* Section Header */}
        <div className="text-center finer-details-header">
          <div className="text-center mb-3">
            <span className="finer-details-badge">THE FINER DETAILS</span>
          </div>
          <h2 className="finer-details-main-title">
            Built <span className="highlight-coral">different.</span>
          </h2>
          <p className="finer-details-lead-text">
            Most rings track. This one rewards.
          </p>
        </div>

        {/* Tab Buttons Capsule */}
        <div className="finer-details-tabs-outer">
          <div className="finer-details-tabs-capsule">
            <button
              onClick={() => setActiveTab('box')}
              className={`finer-tab-btn ${activeTab === 'box' ? 'active' : ''}`}
              id="tab-btn-box"
            >
              What's in the box?
            </button>
            <button
              onClick={() => setActiveTab('compare')}
              className={`finer-tab-btn ${activeTab === 'compare' ? 'active' : ''}`}
              id="tab-btn-compare"
            >
              fitze vs others
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`finer-tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
              id="tab-btn-specs"
            >
              Tech specifications
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="finer-details-content-viewport">
          
          {/* TAB 1: What's in the Box? */}
          {activeTab === 'box' && (
            <div className="finer-tab-pane pane-box animate-fade-in-up">
              <Row className="justify-content-center gy-4 gx-4">
                {/* Card 1: fitze Ring */}
                <Col lg={4} md={6} xs={12}>
                  <div className="package-item-card" id="ring-package-card">
                    <div className="package-image-container">
                      {/* High-fidelity ring visual using Unsplash and SVG mask */}
                      <img 
                        src={ring1} 
                        alt="fitze Ring" 
                        className="package-product-image"
                        referrerPolicy="no-referrer"
                      />
                      <div className="image-overlay-vignette"></div>
                    </div>
                    <div className="package-label-block">
                      <h4 className="package-item-title">fitze Ring</h4>
                    </div>
                  </div>
                </Col>

                {/* Card 2: Charging Dock */}
                <Col lg={4} md={6} xs={12}>
                  <div className="package-item-card" id="dock-package-card">
                    <div className="package-image-container">
                      <img 
                        src={ring2} 
                        alt="Charging Dock" 
                        className="package-product-image"
                        referrerPolicy="no-referrer"
                      />
                      <div className="image-overlay-vignette"></div>
                    </div>
                    <div className="package-label-block">
                      <h4 className="package-item-title">Charging Dock</h4>
                    </div>
                  </div>
                </Col>

                {/* Card 3: USB Charging Cable */}
                <Col lg={4} md={6} xs={12}>
                  <div className="package-item-card" id="cable-package-card">
                    <div className="package-image-container">
                      <img 
                        src={chargingCable} 
                        alt="USB Charging Cable" 
                        className="package-product-image"
                        referrerPolicy="no-referrer"
                      />
                      <div className="image-overlay-vignette"></div>
                    </div>
                    <div className="package-label-block">
                      <h4 className="package-item-title">USB Charging Cable</h4>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          )}

          {/* TAB 2: fitze vs others */}
          {activeTab === 'compare' && (
            <div className="finer-tab-pane pane-compare animate-fade-in-up">
              <div className="comparison-bento-grid">
                <Row className="g-4 align-items-stretch">
                  <Col md={6} xs={12}>
                    <div className="comparative-bento-card card-fitze">
                      <div className="card-badge-top fitze-accent">fitze Ring</div>
                      <ul className="comparison-perks">
                        <li>
                          <div className="bullet-circle check"><Check size={16} /></div>
                          <div className="perk-info">
                            <strong>Earn rewards daily</strong>
                            <p>Get actual cash, premium brand discounts, and fitness coins just by meeting consistency goals.</p>
                          </div>
                        </li>
                        <li>
                          <div className="bullet-circle check"><Check size={16} /></div>
                          <div className="perk-info">
                            <strong>One-time purchase, zero fees</strong>
                            <p>No paywalls, no monthly subscription charges to view your heart rate or sleep statistics.</p>
                          </div>
                        </li>
                        <li>
                          <div className="bullet-circle check"><Check size={16} /></div>
                          <div className="perk-info">
                            <strong>Complimentary Sizing Kit</strong>
                            <p>Free custom sizing ring set to ensure that your wearable fits perfectly day or night.</p>
                          </div>
                        </li>
                        <li>
                          <div className="bullet-circle check"><Check size={16} /></div>
                          <div className="perk-info">
                            <strong>Premium Aerospace Titanium</strong>
                            <p>Luxury outer shell protecting high-precision health monitoring sensors.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Col>

                  <Col md={6} xs={12}>
                    <div className="comparative-bento-card card-others">
                      <div className="card-badge-top other-accent">Generic Smart Rings</div>
                      <ul className="comparison-perks">
                        <li>
                          <div className="bullet-circle cross"><X size={16} /></div>
                          <div className="perk-info">
                            <strong>Static tracking with zero motivation</strong>
                            <p>Rings display stats on screens but never offer actual payouts or active tracking challenges.</p>
                          </div>
                        </li>
                        <li>
                          <div className="bullet-circle cross"><X size={16} /></div>
                          <div className="perk-info">
                            <strong>Monthly recurring paywalls</strong>
                            <p>Forced subscriptions ranging from $5.99 to $9.99/mo to access your own biometric details.</p>
                          </div>
                        </li>
                        <li>
                          <div className="bullet-circle cross"><X size={16} /></div>
                          <div className="perk-info">
                            <strong>Additional charge for sizing</strong>
                            <p>Sizing packages cost extra or require returning a template prior to shipping.</p>
                          </div>
                        </li>
                        <li>
                          <div className="bullet-circle cross"><X size={16} /></div>
                          <div className="perk-info">
                            <strong>Lower cost alloy configurations</strong>
                            <p>Thin coatings that can scratch or wear down quickly under daily activities.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          )}

          {/* TAB 3: Tech Specifications */}
          {activeTab === 'specs' && (
            <div className="finer-tab-pane pane-specs animate-fade-in-up">
              <Row className="g-4">
                <Col lg={3} md={6} xs={12}>
                  <div className="spec-feature-box">
                    <div className="spec-icon-wrap"><Weight size={24} /></div>
                    <span className="spec-metric-label">WEIGHT & SIZE</span>
                    <h5 className="spec-metric-value">3.2 Grams & 2.5mm Thin</h5>
                    <p className="spec-metric-desc">Lightweight aerospace composite titanium, comfortable enough for all-night sleep wear.</p>
                  </div>
                </Col>

                <Col lg={3} md={6} xs={12}>
                  <div className="spec-feature-box">
                    <div className="spec-icon-wrap"><Battery size={24} /></div>
                    <span className="spec-metric-label">BATTERY LIFE</span>
                    <h5 className="spec-metric-value">Up to 7 Days Autonomy</h5>
                    <p className="spec-metric-desc">Ultra-fast charging that fully replenishes the ring in under 55 minutes using the included dock.</p>
                  </div>
                </Col>

                <Col lg={3} md={6} xs={12}>
                  <div className="spec-feature-box">
                    <div className="spec-icon-wrap"><Droplet size={24} /></div>
                    <span className="spec-metric-label">WATER RESISTANCE</span>
                    <h5 className="spec-metric-value">100m / 10 ATM Waterproof</h5>
                    <p className="spec-metric-desc">Perfectly sealed non-allergenic inner casing. Swim, surf, shower, or wash hands with zero stress.</p>
                  </div>
                </Col>

                <Col lg={3} md={6} xs={12}>
                  <div className="spec-feature-box">
                    <div className="spec-icon-wrap"><Cpu size={24} /></div>
                    <span className="spec-metric-label">BIOMETRIC SENSORS</span>
                    <h5 className="spec-metric-value">PPG Optical + Infrared</h5>
                    <p className="spec-metric-desc">Dual HR, blood oxygen, skin temperature, and sleep movement patterns updated down to the minute.</p>
                  </div>
                </Col>
              </Row>
            </div>
          )}

        </div>
      </Container>
    </section>
  );
};

export default FinerDetailsSection;
