import React from 'react';
import { Container } from 'react-bootstrap';
import './FitzeBrandPartner.css';

export const FitzeBrandPartner: React.FC = () => {
  // list of premium brand partners in fitness context
  const partners = [
    { name: 'Garmin' },
    { name: 'ASICS' },
    { name: 'Nike' },
    { name: 'Adidas' },
    { name: 'Puma' },
    { name: 'Fitbit' },
    { name: 'Apple' },
    { name: 'Under Armour' },
    { name: 'Reebok' },
    { name: 'Oakley' }
  ];

  // Tripling the list for guaranteed seamless visual marquee wrap
  const scrolledPartners = [...partners, ...partners, ...partners];

  return (
    <section className="fitze-brand-partner-section" id="fitze-brand-partner">
      <Container>
        <div className="fitze-partners-boxed-container">
          <h3 className="fitze-partners-heading">fitze's Brand Partners</h3>
          
          <div className="fitze-partners-slider-wrapper">
            <div className="fitze-partners-track">
              {scrolledPartners.map((partner, index) => (
                <div key={index} className="fitze-partner-card">
                  <span className="fitze-partner-logo">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FitzeBrandPartner;
