import React from 'react';
import { Container } from 'react-bootstrap';
import './MallandBrandPartner.css';

export const MallandBrandPartner: React.FC = () => {
  // list of premium mall & brand partners
  const partners = [
    { name: 'Dubai Mall' },
    { name: 'Mall of the Emirates' },
    { name: 'Marina Mall' },
    { name: 'Yas Mall' },
    { name: 'City Centre Deira' },
    { name: 'Nakheel Mall' },
    { name: 'Ibn Battuta Mall' },
    { name: 'Festival City Mall' },
    { name: 'Galleria Mall' },
    { name: 'Al Wahda Mall' }
  ];

  // Tripling for seamless visual looping coverage
  const scrolledPartners = [...partners, ...partners, ...partners];

  return (
    <section className="mall-brand-partner-section" id="mall-brand-partner">
      <Container>
        <div className="mall-partners-boxed-container">
          <h3 className="mall-partners-heading">Mall and brand Partners</h3>
          
          <div className="mall-partners-slider-wrapper">
            <div className="mall-partners-track">
              {scrolledPartners.map((partner, index) => (
                <div key={index} className="mall-partner-card">
                  <span className="mall-partner-logo">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MallandBrandPartner;
