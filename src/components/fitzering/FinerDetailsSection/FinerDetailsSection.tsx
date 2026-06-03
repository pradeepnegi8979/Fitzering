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
                  <Col md={4} xs={12}>
                    <div className="comparative-bento-card card-fitze">
                      <div className="card-badge-top fitze-accent">&nbsp; </div>
                      <ul className="comparison-perks">
                        <li>
                          <div className="perk-info">
                            <strong>Health tracking</strong>
                          </div>
                        </li>
                        <li>
                          <div className="perk-info">
                            <strong>Rewards & cashbacks</strong>
                          </div>
                        </li>
                        <li>
                          <div className="perk-info">
                            <strong>Built for UAE</strong>
                          </div>
                        </li>
                        <li>
                          <div className="perk-info">
                            <strong>Motivation system</strong>
                          </div>
                        </li>
                        <li>
                          <div className="perk-info">
                            <strong>Price</strong>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Col>

                  <Col md={4} xs={12}>
                    <div className="comparative-bento-card card-others">
                      <div className="card-badge-top other-accent">Fitze Ring</div>
                      <ul className="comparison-perks">
                        <li>
                            <div className="bullet-circle check"><Check size={16} /></div>
                          <div className="perk-info">
                            <strong>6 Signals + daily Score</strong>
                            
                          </div>
                        </li>
                        <li>
                          <div className="bullet-circle check"><Check size={16} /></div>
                          <div className="perk-info">
                            <strong>Real. Every. Day.</strong>
                          </div>
                        </li>
                        <li>
                          <div className="bullet-circle check"><Check size={16} /></div>
                          <div className="perk-info">
                            <strong>UAE-first experience</strong>
                          </div>
                        </li>
                        <li>
                          <div className="bullet-circle check"><Check size={16} /></div>
                          <div className="perk-info">
                            <strong>Challenges + Streaks + Rewards</strong>
                          </div>
                        </li>
                        <li>
                          <div className="bullet-circle check"><Check size={16} /></div>
                          <div className="perk-info">
                            <strong>AED 699</strong>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col md={4} xs={12}>
                    <div className="comparative-bento-card card-others">
                      <div className="card-badge-top other-accent">Other Smart  Ring</div>
                      <ul className="comparison-perks">
                        <li>
                          <div className="bullet-circle cross"><X size={16} /></div>
                          <div className="perk-info">
                            <strong>Similar sensors</strong>
                          </div>
                        </li>
                        <li>
                          <div className="bullet-circle cross"><X size={16} /></div>
                          <div className="perk-info">
                            <strong>Doesn't exist</strong>
                          </div>
                        </li>
                        <li>
                          <div className="bullet-circle cross"><X size={16} /></div>
                          <div className="perk-info">
                            <strong>Global. Generic.</strong>
                          </div>
                        </li>
                        <li>
                          <div className="bullet-circle cross"><X size={16} /></div>  
                          <div className="perk-info">
                            <strong> Data. Nothing more.</strong>
                          </div>
                        </li>
                        <li>
                          <div className="bullet-circle cross"><X size={16} /></div>
                          <div className="perk-info">
                            <strong> AED 1,200 – 1,800</strong>
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
                    <span className="spec-metric-value  ">Weight & Dimensions:</span>
                      <p className="spec-metric-desc mb-2`">Thickness: <span style={{fontWeight:'600'}}>2.2mm</span></p>
                      <p className="spec-metric-desc mb-2">Width: <span style={{fontWeight:'600'}}>8mm</span></p>
                      <p className="spec-metric-desc ">Weight:  <span style={{fontWeight:'600'}}>3g</span></p>
                  </div>
                </Col>

                <Col lg={3} md={6} xs={12}>
                  <div className="spec-feature-box">
                    <div className="spec-icon-wrap"><Battery size={24} /></div>
                    <span className="spec-metric-value ">Battery Life</span>
                    <p className="spec-metric-desc mb-2">Lasts 4 to 6 days on a full charge - depending on size</p>
                    <p className="spec-metric-desc">120 mins for a full charge</p>

                  </div>
                </Col>

                <Col lg={3} md={6} xs={12}>
                  <div className="spec-feature-box">
                    <div className="spec-icon-wrap"><Droplet size={24} /></div>
                    <span className="spec-metric-value ">Connectivity</span>
                    <p className="spec-metric-desc mb-2">Bluetooth Low Energy (BLE5)</p>
                    <p className="spec-metric-desc mb-2">Compatible with iPhones running iOS 15 or later and Android devices running Android 6 or later.</p>
                    <p className="spec-metric-desc mb-2">EMF radiation safe</p>
                    <p className="spec-metric-desc">Transmission Frequency: 2.4 GHz</p>
                  </div>
                </Col>

                <Col lg={3} md={6} xs={12}>
                  <div className="spec-feature-box">
                    <div className="spec-icon-wrap"><Cpu size={24} /></div>
                    <span className="spec-metric-value ">Quality Materials</span>
                    <p className="spec-metric-desc mb-2 ">Outer material: <span style={{fontWeight:'600'}}>Titanium</span></p>
                    <p className="spec-metric-desc">Internal material: <span style={{fontWeight:'600'}}>Resin</span></p>
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
