import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './PlatformSection.css';

export const PlatformSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    { id: 0, label: 'Reward-Led Experiences' },
    { id: 1, label: 'Movement Challenges' },
    { id: 2, label: 'Integrated Campaigns' },
    { id: 3, label: 'Community Experiences' },
  ];

  const tabContents = [
    {
      title: 'Reward-Led Experiences',
      desc: 'Turn rewards into real engagement. Offer exclusive discounts, vouchers and experiences that users unlock through movement and participation on fitze.',
      buttonText: 'Host your brand on fitze',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1200',
    },
    {
      title: 'Movement Challenges',
      desc: 'Drive daily habits by challenging users to hit step milestones, claim custom-branded streaks, and unlock physical rewards in a fun game-ready tracker.',
      buttonText: 'Initialize a movement challenge',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=1200',
    },
    {
      title: 'Integrated Campaigns',
      desc: 'Form high-value partnerships across both physical placements and digital assets. Push your messaging to thousands of active, health-conscious users daily.',
      buttonText: 'Launch an integrated campaign',
      image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=1200',
    },
    {
      title: 'Community Experiences',
      desc: 'Host mass outdoor walkathons, company-wide relays, mall exploration health rallies, and shared public fitness milestones that associate your brand with health.',
      buttonText: 'Engage your community',
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=1200',
    }
  ];

  const current = tabContents[activeTab];

  return (
    <section className="fitze-platform-section" id="fitze-platform">
      <Container>
        {/* Section Header */}
        <div className="platform-header-text text-center">
          <div className="platform-subtitle-container">
            <span className="platform-subtitle-badge">
              WHY PARTNER WITH FITZE
            </span>
          </div>
          <h2 className="platform-title" id="platform-heading">
            <span className="platform-title-orange">UAE’s movement-powered</span> marketing platform.
          </h2>
          <p className="platform-desc-para">
            A one-of-a-kind platform designed to actively engage users with your brand through experiences and real-world participation.
          </p>
        </div>

        {/* Tab Selection Filter Row */}
        <div className="platform-tabs-pills-row" id="platform-tabs-row">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-filter-btn ${activeTab === tab.id ? 'active' : ''}`}
              id={`tab-filter-${tab.id}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Highlight Content Display Frame */}
        <div className="active-tab-container-card" id="platform-active-container">
          <Row className="align-items-center g-0">
            {/* Left Info Column */}
            <Col lg={5} md={12} className="tab-details-col">
              <div className="tab-context-block">
                <h3 className="tab-inner-title">{current.title}</h3>
                <p className="tab-inner-desc">{current.desc}</p>
                <div className="tab-btn-frame">
                  <button className="btn-tab-cta" id={`tab-action-btn-${activeTab}`}>
                    {current.buttonText}
                  </button>
                </div>
              </div>
            </Col>

            {/* Right Image/Visual Column */}
            <Col lg={7} md={12} className="tab-visual-col">
              <div className="tab-image-frame" id="platform-tab-frame">
                <img
                  src={current.image}
                  alt={current.title}
                  className="tab-responsive-image"
                  referrerPolicy="no-referrer"
                  id={`tab-img-${activeTab}`}
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default PlatformSection;
