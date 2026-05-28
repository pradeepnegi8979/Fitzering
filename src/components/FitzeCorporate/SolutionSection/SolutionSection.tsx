import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './SolutionSection.css';
import TeamBuilding from '../../../assets/TeamBuilding1.png';
interface TabItem {
  id: string;
  pillLabel: string;
  title: string;
  btnText: string;
  description: string;
  imageUrl: string;
}


const tabData: TabItem[] = [
  {
    id: 'App-Based-Step-Challenges',
    pillLabel: 'App-Based Step Challenges',
    title: 'App-Based Step Challenges',
    btnText: 'Activate Your Teams',
    description: 'Bring teams together through gamified walking challenges across local, regional and global teams on the fitze app.',
    imageUrl: TeamBuilding
  },
  {
    id: 'Corporate-Sports-Tournaments',
    pillLabel: 'Corporate Sports Tournaments',
    title: 'Corporate Sports Tournaments',
    btnText: 'Explore Sports Experiences',
    description: "High-energy sports experiences designed to strengthen culture, connection and team morale.",
    imageUrl:TeamBuilding
  },
  {
    id: 'Wellness-Workshops',
    pillLabel: 'Wellness Workshops',
    title: 'Wellness Workshops',
    btnText: 'Launch Wellness at Your Workplace',
    description: 'Mental wellbeing sessions, first-aiders programs, EAP support and workplace wellness experiences.',
    imageUrl: TeamBuilding
  },
  {
    id: 'Team-Building-&-Off-sites',
    pillLabel: 'Team Building & Off-sites',
    title: 'Team Building & Off-sites',
    btnText: 'Explore Team Experiences',
    description: 'Outdoor activations, bootcamps, retreats, movement-led team bonding experiences and more.',
    imageUrl:TeamBuilding
  },
  {
    id: 'Curated-Corporate-Events',
    pillLabel: 'Curated Corporate Events',
    title: 'Curated Corporate Events',
    btnText: 'Bring Your Teams Together',
    description: 'Employee-first experiences including family fun days, carnivals and large-scale corporate activations.',
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
            {tabData.slice(0, 5).map((tab) => (
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
                  {activeTab.btnText}
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
