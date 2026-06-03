// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import effort1 from '../../../assets/effort1.png';
// import effort2 from '../../../assets/effort2.png';
// import effort3 from '../../../assets/effort3.png';  
// import './RealRewardsSection.css';

// export const RealRewardsSection: React.FC = () => {
//   return (
//     <section className="real-rewards-section" id="rewards-section">
//       <Container>
//         <div className="rewards-header text-center">
//           <h2 className="rewards-title">
//             Your effort. <span className="highlight-coral">Real rewards</span>
//           </h2>
//         </div>

//         <div className="stats-outline-bar">
//           <Row className="g-0 align-items-center">
            
//             <Col md={4} xs={12} className="stat-column border-right-md text-center">
//               <div className="stat-card-inner">
//                 <div className="stat-main-number">
//                   <span className="coral-prefix">AED</span> 960
//                 </div>
//                 <p className="stat-caption">Average annual earnings per user</p>
//               </div>
//             </Col>

//             <Col md={4} xs={12} className="stat-column border-right-md text-center">
//               <div className="stat-card-inner">
//                 <div className="stat-main-number">
//                   200<span className="coral-suffix">+</span>
//                 </div>
//                 <p className="stat-caption">Partner brands in the UAE</p>
//               </div>
//             </Col>

//             <Col md={4} xs={12} className="stat-column text-center">
//               <div className="stat-card-inner">
//                 <div className="stat-main-number">
//                   Mega rewards<span className="coral-suffix">.</span>
//                 </div>
//                 <p className="stat-caption">Win every week</p>
//               </div>
//             </Col>

//           </Row>
//         </div>

//         <div className="premium-cards-wrapper">
//           <Row className="g-4">
            
//             <Col lg={4} md={12}  className="d-flex mb-4 mb-lg-0 mb-md-0">
//               <div className="pill-premium-card flex-fill">
//                 <div className="card-visual-header">
//                   <img 
//                     src={effort1}
//                     alt="Jogging partners outdoor" 
//                     className="visual-bg"
//                   />
//                   <div className="visual-gradient-dim"></div>
                  
                  
//                 </div>

//                 <div className="card-verbal-footer">
//                   <span className="pillar-badge">WALK TO EARN</span>
//                   <h3 className="pillar-headline">Streaks</h3>
//                   <p className="pillar-description">
//                     Get Paid to Walk. Join a Streak, hit your goals, and earn guaranteed payouts in your Careem wallet.
//                   </p>
//                 </div>
//               </div>
//             </Col>

//             <Col lg={4} md={12} className="d-flex mb-4 mb-lg-0 mb-md-0">
//               <div className="pill-premium-card flex-fill">
//                 <div className="card-visual-header">
//                   <img 
//                     src={effort2}
//                     alt="Shopping and lifestyle in the city" 
//                     className="visual-bg"
//                   />
//                   <div className="visual-gradient-dim"></div>

//                 </div>

//                 <div className="card-verbal-footer">
//                   <span className="pillar-badge">WALK TO SAVE</span>
//                   <h3 className="pillar-headline">Rewards</h3>
//                   <p className="pillar-description">
//                     Turn your everyday movement into exclusive savings and offers from top UAE brands.
//                   </p>
//                 </div>
//               </div>
//             </Col>

//             <Col lg={4} md={12}  className="d-flex">
//               <div className="pill-premium-card flex-fill">
//                 <div className="card-visual-header">
//                   <img 
//                     src={effort3}
//                     alt="Active sports outdoors" 
//                     className="visual-bg"
//                   />
//                   <div className="visual-gradient-dim"></div>
//                 </div>
//                 <div className="card-verbal-footer">
//                   <span className="pillar-badge">WALK TO WIN</span>
//                   <h3 className="pillar-headline">Challenges</h3>
//                   <p className="pillar-description">
//                     Join step Challenges, stay active, and win exciting prizes.
//                   </p>
//                 </div>
//               </div>
//             </Col>

//           </Row>
//         </div>

//         <div className="rewards-bottom-cta text-center">
//           <p className="cta-disclaimer-text"><span className="highlight-coral-bold"> Consistency, rewarded.</span>
//           </p>
//           <div className="cta-btn-wrapper">
//             <a href="https://www.fitze.ae/share/" target="_blank" rel="noopener noreferrer" className="premium-dark-btn">
//               Explore on the fitze app
 
//             </a>
//           </div>
//         </div>

//       </Container>
//     </section>
//   );
// };

// export default RealRewardsSection;

import { Container, Row, Col } from 'react-bootstrap';


import React from 'react';
import { Search, ChevronLeft, Share2, Info, Compass } from 'lucide-react';
import './RealRewardsSection.css';
import rewardImage1 from '../../../assets/reward1.png';
import rewardImage2 from '../../../assets/reward2.png';
import rewardImage3 from '../../../assets/reward3.png';

export const RealRewardsSection: React.FC = () => {
  return (
    <section className="rewards-streaks-main-section" id="rewards">
      <div className="rewards-streaks-container">
        
        {/* Section Header */}
        <div className="rewards-header-wrapper text-center">
          <div className="rewards-badge-capsule">
            <span>EVERY STEP COUNTS</span>
          </div>
          <h2 className="rewards-title">
             Your effort. <span className="highlight-coral">Real rewards</span>
         </h2>
          
        </div>
         <div className="stats-outline-bar">
          <Row className="g-0 align-items-center">
            
           <Col md={4} xs={12} className="stat-column border-right-md text-center">
              <div className="stat-card-inner">
                 <div className="stat-main-number">
                   <span className="coral-prefix">AED</span> 960
                 </div>
                 <p className="stat-caption">Average annual earnings per user</p>
               </div>
             </Col>

             <Col md={4} xs={12} className="stat-column border-right-md text-center">
               <div className="stat-card-inner">
                 <div className="stat-main-number">
                   200<span className="coral-suffix">+</span>
                 </div>
                 <p className="stat-caption">Partner brands in the UAE</p>
               </div>
         </Col>

             <Col md={4} xs={12} className="stat-column text-center">
               <div className="stat-card-inner">
                 <div className="stat-main-number">
                   Mega rewards<span className="coral-suffix">.</span>
                </div>
                 <p className="stat-caption">Win every week</p>
               </div>
             </Col>

           </Row>
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
              <span className="rewards-section-mini-tag">WALK TO EARN</span>
              <h3 className="rewards-card-title">Streaks</h3>
              <p className="rewards-card-description">
               Get Paid to Walk. Join a Streak, hit your goals, and earn guaranteed payouts in your Careem wallet.
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
              <span className="rewards-section-mini-tag">WALK TO SAVE</span>
              <h3 className="rewards-card-title">Rewards</h3>
              <p className="rewards-card-description">
              Turn your everyday movement into exclusive savings and offers from top UAE brands.
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
              <span className="rewards-section-mini-tag">WALK TO WIN</span>
              <h3 className="rewards-card-title">Challenges</h3>
              <p className="rewards-card-description">
Join step Challenges, stay active, and win exciting prizes.              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RealRewardsSection;
