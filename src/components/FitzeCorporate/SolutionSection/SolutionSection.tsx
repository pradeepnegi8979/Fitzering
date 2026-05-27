import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './SolutionSection.css';
import TeamBuilding from '../../../assets/TeamBuilding1.png';
interface TabItem {
  id: string;
  pillLabel: string;
  title: string;
  description: string;
  imageUrl: string;
}


const tabData: TabItem[] = [
  {
    id: 'Reward-Led-Experiences',
    pillLabel: 'Reward-Led Experiences',
    title: 'Reward-Led Experiences',
    description: 'Turn rewards into real engagement. Offer exclusive discounts, vouchers and experiences that users unlock through movement and participation on fitze.',
    imageUrl: TeamBuilding
  },
  {
    id: 'Movement-Challenges',
    pillLabel: 'Movement Challenges',
    title: 'Movement Challenges',
    description: "Launch step challenges people actually commit to. Create branded activations on the app designed around consistency, motivation and community participation.",
    imageUrl:TeamBuilding
  },
  {
    id: 'Integrated-Campaigns',
    pillLabel: 'Integrated Campaigns',
    title: 'Integrated Campaigns',
    description: 'Extend your campaign beyond a single touchpoint. Bring your brand across the fitze ecosystem through the app, on-ground activations, mall runs and real-world experiences.',
    imageUrl: TeamBuilding
  },
  {
    id: 'Community-Experiences',
    pillLabel: 'Community Experiences',
    title: 'Community Experiences',
    description: 'Build moments people show up for together. From mall runs to wellness activations, create high-energy community experiences powered by movement.',
    imageUrl:TeamBuilding
  }
];

export const SolutionSection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('team-building');

  const activeTab = tabData.find(tab => tab.id === activeTabId) || tabData[1];

  return (
    <section className="corp-solution-section" id="corp-solution">
      <Container className="tab-section-container">
        
        {/* Eyebrow Label Pill */}
        <div className="solution-eyebrow-box text-center">
          <span className="solution-eyebrow">YOUR ONE-STOP SOLUTION</span>
        </div>
        
        {/* Main Header Display Typography */}
        <h2 className="solution-headline text-center">
          Movement that <span className="highlight-color">brings teams together</span>
        </h2>

        {/* Categories Tab Switches - Grouped beautifully on multiple rows on smaller/medium screens */}
        <div className="tab-pills-horizontal-grid">
          <div className="tab-pills-row">
            {tabData.slice(0, 4).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`tab-switch-pill ${activeTabId === tab.id ? 'active-pill' : ''}`}
                id={`tab-switch-${tab.id}`}
              >
                {tab.pillLabel}
              </button>
            ))}
          </div>
          {/* <div className="tab-pills-row tab-row-2">
            {tabData.slice(3).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`tab-switch-pill ${activeTabId === tab.id ? 'active-pill' : ''}`}
                id={`tab-switch-${tab.id}`}
              >
                {tab.pillLabel}
              </button>
            ))}
          </div> */}
        </div>

        {/* Tab Showcase Premium Display Card with warm ivory background and responsive island layout */}
        <div className="tab-showcase-container-card" id="solution-showcase-card">
          <Row className="align-items-center g-0">
            {/* Descriptive Content Column */}
            <Col lg={6} md={12} className="text-start showcase-content-col order-2 order-lg-1">
              <h3 className="tab-showcase-title">{activeTab.title}</h3>
              <p className="tab-showcase-desc">{activeTab.description}</p>
              <div>
                <button className="tab-showcase-explore-btn" id="explore-activation-btn">
                  Explore this activation
                </button>
              </div>
            </Col>
            
            {/* Display Visual Presentation Column (Island Layout) */}
            <Col lg={6} md={12} className="showcase-image-col order-1 order-lg-2">
              <div className="tab-showcase-image-wrapper">
                <img 
                  key={activeTab.id} /* Refreshes transition effects accurately */
                  src={activeTab.imageUrl} 
                  alt={activeTab.title} 
                  className="tab-showcase-image animate-fade-in"
                  referrerPolicy="no-referrer"
                />
              </div>
            </Col>
          </Row>
        </div>

      </Container>
    </section>
  );
};

export default SolutionSection;
