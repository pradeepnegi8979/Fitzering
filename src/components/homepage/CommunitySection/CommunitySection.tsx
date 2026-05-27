import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Play, Film, X } from 'lucide-react';
import './CommunitySection.css';

interface CommunityVlog {
  id: number;
  title: string;
  desc: string;
  label: string;
  gradient: string;
}

export const CommunitySection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const posts: CommunityVlog[] = [
    {
      id: 1,
      title: "Setting Up Your Wearable",
      desc: "An editorial, visually driven guide for configuring your fitness tracker with the Fitze mobile engine.",
      label: "Beyond the Screen",
      gradient: "linear-gradient(135deg, #1f2937, #111827)"
    },
    {
      id: 2,
      title: "Form Meets Function",
      desc: "Explore how the smart Fitze Ring fits seamlessly into your style, work, and sleep routines.",
      label: "The Ecosystem",
      gradient: "linear-gradient(135deg, #312e81, #1e1b4b)"
    },
    {
      id: 3,
      title: "Maximizing Your Payouts",
      desc: "Tips from veteran walkers on completing cash streaks and entering vehicle raffle draws.",
      label: "Step Tactics",
      gradient: "linear-gradient(135deg, #0f172a, #020617)"
    }
  ];

  return (
    <section className="community-section section bg-white" id="community">
      <Container>
        <div className="text-center mb-5">
          <div className="community-brand-title justify-content-center d-flex align-items-center gap-1">
            <span className="part-brand-black">fitze</span>
            <span className="part-brand-coral">Community.</span>
          </div>
          <p className="community-subtitle text-muted">Join the elite network of daily step achievers in the UAE.</p>
        </div>
        
        <Row className="g-4">
          {posts.map((post) => (
            <Col lg={4} md={6} key={post.id}>
              <Card className="vlog-card h-100 border-0">
                <div 
                  className="vlog-card-image"
                  style={{ background: post.gradient }}
                >
                  <div className="vlog-glass-play" onClick={() => setActiveVideo(post.title)}>
                    <Play size={22} fill="#ffffff" stroke="none" />
                  </div>
                  <div className="vlog-badge-overlay">
                    <Film size={12} className="text-white me-1" />
                    <span>VIDEO GUIDE</span>
                  </div>
                </div>
                
                <Card.Body className="p-4 bg-white d-flex flex-column justify-content-between">
                  <div>
                    <span className="vlog-category-label d-block text-uppercase mb-2">
                      {post.label}
                    </span>
                    <h4 className="vlog-title mb-3">{post.title}</h4>
                    <p className="vlog-desc text-muted mb-4">{post.desc}</p>
                  </div>
                  
                  <button 
                    className="btn-fitze-vlog"
                    onClick={() => setActiveVideo(post.title)}
                  >
                    Watch Video
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        {/* Playback video overlay modal */}
        {activeVideo && (
          <div className="fitze-video-overlay" onClick={() => setActiveVideo(null)}>
            <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="video-close-btn" onClick={() => setActiveVideo(null)}>
                <X size={24} />
              </button>
              <div className="p-4 bg-dark text-white rounded-4 text-center">
                <span className="section-tag">fitze Community Vlog</span>
                <h3 className="mb-4 text-white">{activeVideo}</h3>
                <div className="ratio ratio-16x9">
                  <iframe 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                    title="fitze Community Guide" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default CommunitySection;
