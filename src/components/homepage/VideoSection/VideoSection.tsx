import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Play, X } from 'lucide-react';
import './VideoSection.css';
import bgImg from '../../../assets/not-just-tracking.png';
export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <section className="video-section section bg-white" id="video-preview">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={5} md={12} className="text-start">
            <span className="section-tag">FITZE Ring</span>
            <h2 className="video-sec-title">
              Not just tracking. <br />
              <span className="text-secondary-highlight" style={{color:'#000'}}>A system that keeps you consistent.</span>
            </h2>
            <p className="video-sec-text">
              By combining daily micro-rewards, social group challenges, and direct cash payouts, fitze creates a behavioral system that keeps you moving consistently every single day.
            </p>
          </Col>
          
          <Col lg={7} md={12}>
            <div className="video-mock-card position-relative" onClick={() => setIsPlaying(true)}>
              {/* Coffee walker background video clip visual */}
              <div className="video-thumbnail-placeholder">
                <div className="overlay-dim">
                  <img src={bgImg} alt="Video Thumbnail"  style={{maxWidth:"100%"}}/>
                </div>
                <div className="glowing-play-btn">
                  <Play size={28} className="play-triangle-gold" fill="#ffffff" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        
        {/* Simple elegant overlay model if user clicks play */}
        {isPlaying && (
          <div className="fitze-video-overlay" onClick={() => setIsPlaying(false)}>
            <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="video-close-btn" onClick={() => setIsPlaying(false)}>
                <X size={24} />
              </button>
              <div className="ratio ratio-16x9">
                <iframe 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                  title="fitze App Introduction" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default VideoSection;
