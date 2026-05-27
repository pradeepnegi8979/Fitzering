import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './EffortlessSection.css';

interface ServiceCardProps {
  num: string;
  title: string;
  desc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ num, title, desc }) => (
  <div className="effortless-service-card" id={`service-${num.replace('.', '')}`}>
    <span className="service-number">{num}</span>
    <h4 className="service-title">{title}</h4>
    <p className="service-desc">{desc}</p>
  </div>
);

export const EffortlessSection: React.FC = () => {
  return (
    <section className="corp-effortless-outer-container" id="why-choose-us">
      <Container className="effortless-container py-5">
        <div className="effortless-eyebrow-container text-center mb-2">
          <span className="effortless-eyebrow">WHY CHOOSE FITZE</span>
        </div>

        <h2 className="effortless-headline text-center mb-4">
          Built to make engagement <span className="highlight-color">effortless</span>
        </h2>

        <p className="effortless-sub-desc text-center mb-5">
          We handle the execution so you can focus on the results. One integrated platform to drive consistency.
        </p>

        {/* 3x2 Grid */}
        <Row className="g-20">
          <Col lg={4} md={6} xs={12}>
            <ServiceCard 
              num="01." 
              title="End-to-End Execution" 
              desc="We plan, manage and deliver your wellness events seamlessly."
            />
          </Col>
          <Col lg={4} md={6} xs={12}>
            <ServiceCard 
              num="02." 
              title="One Integrated Platform" 
              desc="Interactive challenges, health rewards, events and live tracking."
            />
          </Col>
          <Col lg={4} md={6} xs={12}>
            <ServiceCard 
              num="03." 
              title="Built to Scale" 
              desc="Engage from 20 core employees up to 20,000+ custom users."
            />
          </Col>
          <Col lg={4} md={6} xs={12}>
            <ServiceCard 
              num="04." 
              title="CSR & Purpose Programs" 
              desc="Empower philanthropic causes with step-anchored donation matches."
            />
          </Col>
          <Col lg={4} md={6} xs={12}>
            <ServiceCard 
              num="05." 
              title="In-House Team" 
              desc="Design, logistics, and tech assets running together under one roof."
            />
          </Col>
          <Col lg={4} md={6} xs={12}>
            <ServiceCard 
              num="06." 
              title="10+ Years Experience" 
              desc="Trusted workforce fitness expertise across corporate UAE."
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EffortlessSection;
