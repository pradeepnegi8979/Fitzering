import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './CollaborationsSection.css';
import collab1 from '../../../assets/collab1.png';
export const CollaborationsSection: React.FC = () => {
  // Use a gorgeous, specific outdoor physical wellness community park image for all cards to match the design screenshot exactly
  const sharedAssetImage = collab1;

  const rowOne = [
    {
      badge: 'GEMS EDUCATION',
      desc: 'A community-first wellness experience designed for families, schools and shared participation.',
      img: sharedAssetImage,
    },
    {
      badge: 'AW ROSTAMANI',
      desc: 'A high-excitement campaign connecting people with movement, rewards and brand recall.',
      img: sharedAssetImage,
    },
    {
      badge: 'DUBAI ISLAMIC BANK',
      desc: 'Workforce engagement through large-scale movement and reward-led participation.',
      img: sharedAssetImage,
    }
  ];

  const rowTwo = [
    {
      badge: "ATHLETE'S CO.",
      desc: "A lifestyle-led brand experience integrated into the fitze rewards and movement ecosystem.",
      img: sharedAssetImage,
    },
    {
      badge: 'GARMIN',
      desc: 'A movement-first community activation designed to bring fitness enthusiasts together through participation, challenges and shared experiences.',
      img: sharedAssetImage,
    }
  ];

  return (
    <section className="fitze-collaborations-section" id="fitze-collaborations">
      <Container>
        {/* Section Header: Aligned Left, not centered as in the design screenshot */}
        <div className="collaborations-header">
          <div className="collab-badge-container">
            <span className="collab-subtitle-badge">
              FEATURED COLLABORATIONS
            </span>
          </div>
          <h2 className="collab-heading" id="collaborations-title">
            Campaigns built around <span className="collab-highlight-orange">action.</span>
          </h2>
        </div>

        {/* Row 1 Grid: 3 equal-width cards */}
        <div className="collab-row-wrapper mb-4" id="collab-row-1">
          <Row className="g-4">
            {rowOne.map((card, idx) => (
              <Col lg={4} md={6} xs={12} key={idx}>
                <div className="collab-image-card" id={`collab-row1-${idx}`}>
                  <img 
                    src={card.img} 
                    alt={card.badge} 
                    className="collab-bg-img" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="collab-card-overlay-shade"></div>
                  
                  {/* Top-aligned badge capsule */}
                  <div className="collab-top-badge">
                    <span className="collab-capsule">{card.badge}</span>
                  </div>

                  {/* Bottom-aligned text brief description */}
                  <div className="collab-bottom-text">
                    <p className="collab-brief">{card.desc}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* Row 2 Grid: 2 double-wide/wider cards */}
        <div className="collab-row-wrapper" id="collab-row-2">
          <Row className="g-4">
            {rowTwo.map((card, idx) => (
              <Col lg={6} md={6} xs={12} key={idx}>
                <div className="collab-image-card card-double-wide" id={`collab-row2-${idx}`}>
                  <img 
                    src={card.img} 
                    alt={card.badge} 
                    className="collab-bg-img" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="collab-card-overlay-shade"></div>

                  {/* Top-aligned badge capsule */}
                  <div className="collab-top-badge">
                    <span className="collab-capsule">{card.badge}</span>
                  </div>

                  {/* Bottom-aligned text brief description */}
                  <div className="collab-bottom-text">
                    <p className="collab-brief">{card.desc}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default CollaborationsSection;
