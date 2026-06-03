import React from 'react';
import { Container } from 'react-bootstrap';

import './FitzeringHero.css';
import BannerVideo from '../../../assets/ring-video.mp4';
import posterImage from '../../../assets/poster-image.png';
import LeftElement from '../../../assets/left-element.svg';
import rightElement from '../../../assets/right-element.svg';

export const FitzeringHero: React.FC = () => {

  return (
    <div className="fitzering-hero-container">
      {/* Background Video */}
      <div className="fitzering-video-bg-wrapper">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fitzering-video-bg-element"
          poster={posterImage}
        >
          {/* Loopable premium abstract/tech light-leak backdrops */}
          <source 
            src={BannerVideo}
            type="video/mp4" 
          />
          {/* Fallback video source */}
          <source 
            src={BannerVideo}
            type="video/mp4" 
          />
        </video>
        {/* Soft designer overlay layers for premium depth and maximum text readability */}
        <div className="fitzering-hero-dark-overlay"></div>
        <div className="fitzering-hero-vignette"></div>
        <div className="fitzering-hero-bottom-curve"></div>
      </div>

      {/* Decorative Waveforms/Mesh in Bottom Corners */}
      <div className="fitzering-decor-mesh mesh-left">
        <img src={LeftElement} alt="left element"/>
      </div>

      <div className="fitzering-decor-mesh mesh-right">
        <img src={rightElement} alt="right element"/>
      </div>

      {/* Main Core Content Overlay */}
      <Container className="fitzering-hero-content-container">
        
        <div className="fitzering-main-headlines text-center">
          <div className="fitzering-region-badge-wrapper animate-slow-y">
          {/* <div className="fitzering-region-badge ">
            <span className="badge-bullet"></span>
            DESIGNED FOR THE UAE
          </div> */}
        </div>
          <h1 className="fitzering-core-title">
            The first smart ring
          </h1>
          <h2 className="fitzering-core-subtitle">
            that rewards your movement
          </h2>
          <p className="fitzering-core-lead">
            Built to understand your body. Designed to change your habits.
          </p>
        </div>
        </Container>

      

    </div>
  );
};

export default FitzeringHero;
