import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './CampaignsSection.css';

export const CampaignsSection: React.FC = () => {
  const cards = [
    {
      id: '01',
      bgType: 'peach',
      tag: 'JUMEIRAH BEACH WALK',
      title: 'Hamdan Walkathon',
      desc: 'A city-scale movement event powered by community participation, streaks and shared rewards across 40,000+ participants.'
    },
    {
      id: '02',
      bgType: 'blue',
      tag: 'MALL PROMENADE DUBAI',
      title: 'Run for Unity',
      desc: 'A run built to bring communities together with step-tracking, brand jerseys and city-wide streaks driving 12K daily check-ins.'
    },
    {
      id: '03',
      bgType: 'green',
      tag: 'DUBAI CENTRAL MALL',
      title: 'Walk to Win',
      desc: 'A grocery-linked activation using step-counting to drive footfall, reward loyalty and turn daily habits into brand recall.'
    }
  ];
  const label = "SOCIAL MEDIA HIGHLIGHTS";

  return (
    <section className="fitze-campaigns-section" id="fitze-campaigns">
      <Container>
        {/* Header row with a clean responsive layout and plain "View all campaigns" link on the right */}
        <div className="campaigns-header-row" id="campaigns-header">
          <Row className="align-items-end g-4 justify-content-between">
            <Col lg={9} md={9} xs={12}>
              <div className="campaigns-badge-container">
                <span className="campaigns-tag">
                  {label}
                </span>
              </div>
              <h2 className="campaigns-heading">
                Campaigns that <span className="title-highlight-orange">moved communities.</span>
              </h2>
              <p className="campaigns-para">
                High-energy moments powered by movement, community participation and real-world experiences.
              </p>
            </Col>
            <Col lg={3} md={3} xs={12} className="text-md-end text-start">
              <span className="link-view-all-campaigns" id="btn-view-all-campaigns">
                View all campaigns
              </span>
            </Col>
          </Row>
        </div>

        {/* Dynamic 3-Card list */}
        <div className="campaigns-grid-wrapper" id="campaigns-grid">
          <Row className="g-4">
            {cards.map((card, idx) => (
              <Col lg={4} md={6} xs={12} key={idx}>
                <div className="campaign-pastel-card" id={`campaign-card-${idx}`}>
                  {/* Top pastel part with steps index identifier precisely aligned to the top-left */}
                  <div className={`card-pastel-top bg-${card.bgType}`}>
                    <span className="card-step-badge">{card.id}</span>
                  </div>
                  {/* Bottom solid white text compartment */}
                  <div className="card-white-bottom">
                    <span className="card-location-tag">{card.tag}</span>
                    <h3 className="card-inner-title">{card.title}</h3>
                    <p className="card-inner-desc">{card.desc}</p>
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

export default CampaignsSection;

