import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ProcessSection.css';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      action: '— START',
      title: 'Start with a goal',
      desc: 'Brand awareness, community acquisition, product engagement — we build the challenge around your objective.'
    },
    {
      num: '02',
      action: '— BUILD',
      title: 'Build the experience',
      desc: 'Shape it with rewards, shakeouts, challenges and streaks — digital and physical working as one.'
    },
    {
      num: '03',
      action: '— LAUNCH',
      title: 'Launch with energy',
      desc: 'Go live across the fitze app, community partners, OOH and real-world activation points.'
    }
  ];

  return (
    <section className="fitze-process-section" id="fitze-process">
      <Container>
        {/* Section Title Block */}
        <div className="process-header-container text-center">
          <p className="process-subtitle">SIMPLE TO SHAPE</p>
          <h2 className="process-heading" id="process-title">
            Simple to shape. Built to scale.
          </h2>
          <p className="process-desc">Three steps from brief to brand moment.</p>
        </div>

        {/* 3-Column Stepper layout */}
        <div className="process-grid-container" id="process-grid">
          <Row className="g-0 justify-content-center">
            {steps.map((step, idx) => (
              <Col lg={4} md={12} key={idx} className="process-col-block">
                <div className="process-step-card" id={`process-step-${idx}`}>
                  <div className="step-badge-row">
                    <span className="step-number">{step.num}</span>
                    <span className="step-action">{step.action}</span>
                  </div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.desc}</p>
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
