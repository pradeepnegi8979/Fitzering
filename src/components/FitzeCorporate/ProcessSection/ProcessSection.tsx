import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ProcessSection.css';

interface ProcessStep {
  number: string;
  badge: string;
  title: string;
  desc: string;
  progressPercent: number;
}

const stepsData: ProcessStep[] = [
  {
    number: '01',
    badge: 'START',
    title: 'Increase participation',
    desc: 'Brand awareness, community acquisition, product engagement — we build the challenge around your objective.',
    progressPercent: 33,
  },
  {
    number: '02',
    badge: 'BUILD',
    title: 'Improve employee engagement',
    desc: 'Shape it with rewards, shakeouts, challenges and streaks — digital and physical working as one.',
    progressPercent: 66,
  },
  {
    number: '03',
    badge: 'LAUNCH',
    title: '* Encourage healthier lifestyles',
    desc: 'Go live across the fitze app, community partners, OOH and real-world activation points.',
    progressPercent: 100,
  },
  {
    number: '04',
    badge: 'LAUNCH',
    title: 'Strengthen team culture',
    desc: 'Go live across the fitze app, community partners, OOH and real-world activation points.',
    progressPercent: 100,
  },
  {
    number: '05',
    badge: 'LAUNCH',
    title: 'Deliver measurable wellness initiatives',
    desc: 'Go live across the fitze app, community partners, OOH and real-world activation points.',
    progressPercent: 100,
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="corp-process-section" id="brand-process-section">
      <Container className="process-header-container">
        {/* Clean centered orange eyebrow */}
        <div className="section-eyebrow-container text-center">
          <span className="section-eyebrow-text">SIMPLE TO SHAPE</span>
        </div>

        {/* Master Heading */}
        <h2 className="section-headline-text text-center">
          Simple to shape. Built to scale.
        </h2>

        {/* Subtitle text */}
        <p className="section-subtitle-text text-center">
          Three steps from brief to brand moment.
        </p>
      </Container>

      {/* Large Custom Rounded Flow Card Grid */}
      <Container className="process-flow-container">
        <div className="process-flow-mega-card" id="process-flow-mega-card">
          <Row className="g-0">
            {stepsData.map((step, idx) => (
              <Col lg={4} md={12} key={step.number} className="process-flow-col" id={`process-col-step-${step.number}`}>
                <div className="process-card-content">
                  {/* Staged top-border progress line matching step percentage */}
                  <div className="process-top-line-container">
                    <div 
                      className="process-top-line-active" 
                      style={{ width: `${step.progressPercent}%` }}
                    />
                  </div>

                  {/* Header/Badge indicator */}
                  <div className="step-badge-indicator" id={`step-badge-${idx + 1}`}>
                    <span className="step-number">{step.number}</span>
                    <span className="step-badge-separator">—</span>
                    <span className="step-badge-label">{step.badge}</span>
                  </div>

                  {/* Step Action Title */}
                  <h3 className="step-headline-title">{step.title}</h3>

                  {/* Description text */}
                  {/* <p className="step-description-paragraph">{step.desc}</p> */}
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default ProcessSection;
