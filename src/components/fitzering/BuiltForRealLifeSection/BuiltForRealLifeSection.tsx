import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './BuiltForRealLifeSection.css';
import reallifeimg1 from '../../../assets/reallife_img1.png';
import reallifeimg2 from '../../../assets/reallife_img2.png';
import reallifeimg3 from '../../../assets/reallife_img3.png';
import reallifeimg4 from '../../../assets/reallife_img4.png';
import appleAppStore from '../../../assets/appelapp-store-white.svg';
import googleAppStore from '../../../assets/google-play-store-white.svg';
import huaweiAppStore from '../../../assets/HuaweiAppGallerywhite.svg';
interface FeatureCard {
  title: string;
  imageUrl: string;
}

export const BuiltForRealLifeSection: React.FC = () => {
  const features: FeatureCard[] = [
    {
      title: 'Lightweight',
      imageUrl: reallifeimg1,
    },
    {
      title: 'Titanium body',
      imageUrl: reallifeimg2,
    },
    {
      title: '4-6 days battery',
      imageUrl: reallifeimg3,
    },
    {
      title: 'Waterproof',
      imageUrl: reallifeimg4,
    },
  ];

  return (
    <section className="built-for-real-life-section" id="built-for-real-life">
      <Container className="built-for-real-life-container">
        {/* Header Block and App Downloads */}
        <Row className="align-items-end mb-4 mb-md-5 gy-4">
          {/* Title Block */}
          <Col lg={7} md={12}>
            <div className="section-meta-wrap">
              <span className="forget-it-badge">WEAR IT. FORGET IT</span>
            </div>
            <h2 className="real-life-title">
              Built for <span className="highlight-coral">real life</span>
            </h2>
          </Col>

          {/* App Badges Block */}
          <Col lg={5} md={12} className="d-flex justify-content-lg-end justify-content-start">
            <div className="app-download-badges">
              {/* Apple Store */}
              <a 
                href="https://apps.apple.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="download-badge-btn"
                id="app-store-download-btn"
              >
                <img src={appleAppStore} alt="Download on the Apple App Store" className="badge-svg-icon" />
              </a>

              {/* Google Play */}
              <a 
                href="https://play.google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="download-badge-btn"
                id="google-play-download-btn"
              ><img src={googleAppStore} alt="Download on Google Play" className="badge-svg-icon" />
              </a>

              {/* Huawei AppGallery */}
              <a 
                href="https://appgallery.huawei.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="download-badge-btn"
                id="huawei-app-download-btn"
              >
                <img src={huaweiAppStore} alt="Download on Huawei AppGallery" className="badge-svg-icon" />
              </a>
            </div>
          </Col>
        </Row>

        {/* Bounded Segment of Connected Feature Grid Cards */}
        <div className="seamless-features-viewport">
          <Row className="g-0 row-cols-1 row-cols-md-2 row-cols-lg-4 m-0 p-0">
            {features.map((feature, idx) => (
              <Col key={idx} className="feat-col-item p-0">
                <div className="seamless-feature-card">
                  {/* Photo background */}
                  <img 
                    src={feature.imageUrl} 
                    alt={feature.title} 
                    className="feature-bg-photo"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Overlay shadow for rich text contrast */}
                  <div className="feature-gradient-vignette"></div>

                  {/* Bottom Text Overlays */}
                  <div className="feature-text-block">
                    <h3 className="feature-card-heading">{feature.title}</h3>
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

export default BuiltForRealLifeSection;
