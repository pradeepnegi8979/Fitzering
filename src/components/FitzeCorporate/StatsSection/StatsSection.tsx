import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './StatsSection.css';

interface StatCardProps {
  value: string;
  label: string;
  theme: 'dark' | 'light' | 'peach';
  iconSvg?: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, theme, iconSvg }) => {
  return (
    <div className={`corp-stat-card corp-stat-card-${theme}`} id={`stat-card-${label.replace(/\s+/g, '-').toLowerCase()}`}>
      <div className="corp-stat-content">
        <h3 className="corp-stat-value">{value}</h3>
        <p className="corp-stat-label">{label}</p>
      </div>
      <div className="corp-stat-icon-wrapper">
        {iconSvg || (
          <div className="corp-stat-placeholder-icon"></div>
        )}
      </div>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  return (
    <section className="corp-stats-outer-section" id="corp-stats">
      <Container>
        {/* Stats Row containing the 3 structured card themes */}
        <Row className="corp-stats-row gx-4 gy-4">
          <Col lg={4} md={12} className="corp-stat-col">
            <StatCard 
              value="30k +" 
              label="Employees Engaged" 
              theme="dark" 
              iconSvg={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff5226" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              }
            />
          </Col>
          <Col lg={4} md={12} className="corp-stat-col">
            <StatCard 
              value="500+" 
              label="Corporate Activations" 
              theme="light" 
              iconSvg={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff5226" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              }
            />
          </Col>
          <Col lg={4} md={12} className="corp-stat-col">
            <StatCard 
              value="10 +" 
              label="Years of Experience" 
              theme="peach" 
              iconSvg={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff5226" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              }
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default StatsSection;
