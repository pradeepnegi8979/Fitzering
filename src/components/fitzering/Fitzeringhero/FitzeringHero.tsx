import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { ShoppingBag, X } from 'lucide-react';
import './FitzeringHero.css';
import BannerVideo from '../../../assets/ring-video.mp4';
import LeftElement from '../../../assets/left-element.svg';
import rightElement from '../../../assets/right-element.svg';
export const FitzeringHero: React.FC = () => {
  const [showShopCard, setShowShopCard] = useState<boolean>(true);

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
          poster="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1600"
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
          <div className="fitzering-region-badge">
            <span className="badge-bullet"></span>
            DESIGNED FOR THE UAE
          </div>
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

      {/* Floating Shop Widget in Bottom Right */}
      <div className={`fitzering-floating-shop-card ${showShopCard ? 'visible-active' : 'hidden-dismissed'}`}>
        <button 
          className="fitzering-shop-close-btn" 
          onClick={() => setShowShopCard(false)}
          aria-label="Dismiss shopping overlay"
        >
          <X size={15} />
        </button>
        <div className="fitzering-shop-body">
          <div className="fitzering-shop-ring-avatar">
            <div className="avatar-ring-3d"></div>
          </div>
          <div className="fitzering-shop-text-content">
            <h4 className="shop-title">Shop fitze Ring</h4>
            <p className="shop-subtitle">Wear it. Forget it.</p>
            <a href="#buy-now" className="fitzering-shop-buy-button">
              Buy for AED 699
            </a>
          </div>
        </div>
      </div>

      {/* Mini Shopping Bag trigger to restore dismissed card */}
      {!showShopCard && (
        <button 
          className="fitzering-floating-restore-trigger animate-pulse-coral" 
          onClick={() => setShowShopCard(true)}
          aria-label="Reveal shopping overlay"
        >
          <ShoppingBag size={20} />
          <span className="tooltip-restore">Shop Ring</span>
        </button>
      )}

    </div>
  );
};

export default FitzeringHero;
