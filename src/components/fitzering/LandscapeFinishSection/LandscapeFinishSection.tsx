import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Check } from 'lucide-react';
import './LandscapeFinishSection.css';
import img1 from '../../../assets/inspired1.png';
import img2 from '../../../assets/inspired2.png';
import img3 from '../../../assets/inspired3.png';

interface FinishOption {
  id: 'rose' | 'midnight' | 'silver';
  name: string;
  subTitle: string;
  dotColor: string;
  label: string;
  image: string;
  price: string;
  currency: string;
}

export const LandscapeFinishSection: React.FC = () => {
  const finishes: FinishOption[] = [
    {
      id: 'rose',
      name: 'Desert Rose',
      subTitle: 'Desert Rose · fitze Ring',
      dotColor: '#D3A377', // Rose Gold Tint
      label: 'DESERT ROSE',
      image: img1,
      price: '699',
      currency: 'AED',
    },
    {
      id: 'midnight',
      name: 'Midnight Dune',
      subTitle: 'Midnight Dune · fitze Ring',
      dotColor: '#3A3F44', // Slate Dark Dune
      label: 'MIDNIGHT DUNE',
      image: img2,
      price: '699',
      currency: 'AED',
    },
    {
      id: 'silver',
      name: 'Arabian Silver',
      subTitle: 'Arabian Silver · fitze Ring',
      dotColor: '#9FA5AA', // Soft Chrome Silver
      label: 'ARABIAN SILVER',
      image: img3,
      price: '699',
      currency: 'AED',
    },
  ];

  const [selectedId, setSelectedId] = useState<'rose' | 'midnight' | 'silver'>('midnight');
  const currentFinish = finishes.find((f) => f.id === selectedId) || finishes[1];

  return (
    <section className="landscape-finish-section" id="choose-your-finish">
      <Container>
        {/* Section Over-title Pillar & Title */}
        <div className="finish-header text-center">
          <span className="finish-category-tag">CHOOSE YOUR FINISH</span>
          <h2 className="finish-title">
            Inspired by the landscape <span className="highlight-coral">we call home</span>
          </h2>
        </div>

        {/* Triple Interactive Finish Columns */}
        <div className="finish-grid-wrapper">
          <Row className="align-items-center justify-content-center">
            
            {finishes.map((finish) => {
              const isActive = finish.id === selectedId;
              return (
                <Col 
                  key={finish.id} 
                  lg={4} 
                  md={6} 
                  xs={12} 
                  className={`finish-card-column d-flex justify-content-center ${isActive ? 'active-col' : 'inactive-col'}`}
                >
                  <div 
                    onClick={() => setSelectedId(finish.id)}
                    className={`finish-premium-card ${isActive ? 'active' : ''}`}
                    aria-label={`Select ${finish.name} finish`}
                  >
                    {/* Ring Product Shot Area */}
                    <div className="finish-image-container">
                      <img 
                        src={finish.image} 
                        alt={`${finish.name} Finish Fitze Smart Ring`} 
                        className="ring-finish-photo"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Subdued Gradient Shadow */}
                      <div className="finish-overlay-vignette"></div>

                      {/* Translucent Checkmark Indicator Bubble */}
                      <div className={`finish-check-bubble ${isActive ? 'checked' : ''}`}>
                        <Check size={16} className="checkmark-icon" />
                      </div>

                      {/* Floating Bottom-Left Finish Name Pill Badge */}
                      <div className="ring-badge-pill">
                        <span 
                          className="ring-color-dot" 
                          style={{ backgroundColor: finish.dotColor }}
                        ></span>
                        <span className="ring-badge-label">{finish.label}</span>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}

          </Row>
        </div>

        {/* Matte-Black Capsule Booking Bar (Matches Mockup Perfectly) */}
        <div className="booking-capsule-bar">
          <div className="booking-inner-info">
            <span className="booking-finish-title">
              {currentFinish.subTitle}
            </span>
            <div className="booking-price-display">
              <span className="currency-label">{currentFinish.currency}</span> {currentFinish.price}
            </div>
          </div>
          
          <div className="booking-action-btn-cell">
            <a 
              href="#order-ring" 
              className="booking-buy-now-btn"
              onClick={(e) => {
                // Smooth scroll to existing sizing configuration/order elements if available
                const el = document.getElementById('sizing-section');
                if (el) {
                  e.preventDefault();
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Buy now <span className="arrow-accent">➔</span> {currentFinish.price}
            </a>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default LandscapeFinishSection;
