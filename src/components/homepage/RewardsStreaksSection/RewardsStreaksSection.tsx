import React from 'react';
import { Search, ChevronLeft, Share2, Info, Compass } from 'lucide-react';
import './RewardsStreaksSection.css';
import rewardImage1 from '../../../assets/reward1.png';
import rewardImage2 from '../../../assets/reward2.png';
import rewardImage3 from '../../../assets/reward3.png';

export const RewardsStreaksSection: React.FC = () => {
  return (
    <section className="rewards-streaks-main-section" id="rewards">
      <div className="rewards-streaks-container">
        
        {/* Section Header */}
        <div className="rewards-header-wrapper text-center">
          <div className="rewards-badge-capsule">
            <span>EVERY STEP COUNTS</span>
          </div>
          <h2 className="rewards-title-heading">
            Walking was never <span className="title-orange-text">this rewarding.</span>
          </h2>
          <p className="rewards-subtitle-text">
            Turn movement into something worth showing up for
          </p>
        </div>

        {/* 3 Columns Layout matching design pixel-for-pixel */}
        <div className="rewards-grid-row">
          
          {/* Card 1: Rewards */}
          <div className="rewards-grid-card">
            <div className="rewards-card-media rewards-media-img1">
              
              {/* Background cover image representing a happy walk lifestyle */}
              <div className="rewards-media-bg-wrapper">
                <img 
                  src={rewardImage1} 
                  alt="Rewards walking lifestyle" 
                  className="rewards-media-bg"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Smartphone Frame 1 Overlay */}
              
            </div>
            
            {/* Card Footer Detail */}
            <div className="rewards-card-content">
              <span className="rewards-section-mini-tag">WALK TO SAVE</span>
              <h3 className="rewards-card-title">Rewards</h3>
              <p className="rewards-card-description">
                Turn your everyday movement into exclusive savings and offers from top UAE brands.
              </p>
            </div>
          </div>

          {/* Card 2: Challenges */}
          <div className="rewards-grid-card">
            <div className="rewards-card-media rewards-media-img2">
              
              {/* Background cover image representing steps/jogging */}
              <div className="rewards-media-bg-wrapper">
                <img 
                  src={rewardImage2} 
                  alt="Challenges jogging movement" 
                  className="rewards-media-bg"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Smartphone Frame 2 Overlay */}
              
            </div>
            
            {/* Card Footer Detail */}
            <div className="rewards-card-content">
              <span className="rewards-section-mini-tag">WALK TO WIN</span>
              <h3 className="rewards-card-title">Challenges</h3>
              <p className="rewards-card-description">
                Join step Challenges, stay active, and win exciting prizes from leading brands.
              </p>
            </div>
          </div>

          {/* Card 3: Streaks */}
          <div className="rewards-grid-card">
            <div className="rewards-card-media rewards-media-img3">
              
              {/* Background cover image representing running couples / active skyline */}
              <div className="rewards-media-bg-wrapper">
                <img 
                  src={rewardImage3} 
                  alt="Streaks payout walking rewards" 
                  className="rewards-media-bg"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Smartphone Frame 3 Overlay with dynamic earnings list and notification alert banner */}
              
            </div>
            
            {/* Card Footer Detail */}
            <div className="rewards-card-content">
              <span className="rewards-section-mini-tag">WALK TO EARN</span>
              <h3 className="rewards-card-title">Streaks</h3>
              <p className="rewards-card-description">
                Get Paid to Walk. Join a Streak, hit your goals, and earn guaranteed payouts for your consistency.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RewardsStreaksSection;
