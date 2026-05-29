import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ConnectionsSection.css';
import CircleImage from '../../../assets/bg-circle.svg';
import FitzeRingMockup from '../../../assets/fitze-ring-mockup.svg';
import AppleWatchMockup from '../../../assets/apple-watch-mockup.svg';
import AppleHealthMockup from '../../../assets/apple-health-mockup.svg';
import HealthConenctMockup from '../../../assets/health-connect-mockup.svg';
import SamsungHealthMockup from '../../../assets/samsung-health-mockup.svg';
import GarminMockup from '../../../assets/garmin-mockup.svg';
import HuaweiMockup from '../../../assets/huawei-mockup.svg';
import Fitbitockup from '../../../assets/fitbit-mockup.svg';
import googleFitImg from '../../../assets/google-fit.png';
import iconApple from '../../../assets/iconapple.svg';
import fitzering from '../../../assets/orangering.svg';
import appleHealth from '../../../assets/applehealth.svg';
import samsungHealth from '../../../assets/samsunghealth.svg';
import healthConnect from '../../../assets/healthconnect.svg';
import garminIcon from '../../../assets/garminicon.svg';
import fitbitIcon from '../../../assets/fitbiticon.svg';
import huaweiWatch from '../../../assets/huaweiwatch.svg';
import FitzeStepTracker from '../../../assets/fitze-step-tracker.svg';
import { AppleIcon } from 'lucide-react';
// Exact brand list from the design
const BRANDS = [
  { id: 'ring', name: 'fitze Ring' },
  { id: 'FitzeStepTracker', name: 'Fitze Step Tracker' },
  { id: 'apple-watch', name: 'Apple Watch' },
  { id: 'apple-health', name: 'Apple Health' },
  { id: 'samsung-health', name: 'Samsung Health' },
  { id: 'health-connect', name: 'Health Connect' },
  { id: 'garmin', name: 'Garmin' },
  { id: 'fitbit', name: 'Fitbit' },
  { id: 'huawei-watch', name: 'Huawei Watch' }
];

export const ConnectionsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile view to disable sticky-scroll physics and use click-rotation
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Monitor viewport scrolling to activate items sequentially on desktop & tablet
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      const track = scrollTrackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the track has scrolled through the sticky zone
      const trackTop = rect.top;
      const trackHeight = rect.height;
      const scrollableDist = trackHeight - windowHeight;

      if (scrollableDist <= 0) return;

      // Calculate percentage scroll (0 to 1) of the scroll track
      const progress = Math.max(0, Math.min(1, -trackTop / scrollableDist));
      
      // Map progress directly to active index of 8 brands
      const segmentSize = 1 / BRANDS.length;
      const computedIndex = Math.min(BRANDS.length - 1, Math.floor(progress / segmentSize));
      
      setActiveIndex(computedIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isMobile]);

  // Handle direct brand pill clicks: update active index & smoothly scroll the viewport to match on desktop/tablet
  const handleBrandClick = (index: number) => {
    setActiveIndex(index);

    if (!isMobile) {
      const track = scrollTrackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const scrollableDist = rect.height - window.innerHeight;
      
      if (scrollableDist > 0) {
        const segmentSize = 1 / BRANDS.length;
        const targetProgress = index * segmentSize + segmentSize / 2; // target midpoint of segment
        const absoluteTrackTop = window.scrollY + rect.top;
        const targetScrollY = absoluteTrackTop + (targetProgress * scrollableDist);

        window.scrollTo({
          top: targetScrollY,
          behavior: 'smooth'
        });
      }
    }
  };

  // Helper render for SVG icons inside the left buttons
  const renderBrandIcon = (brandId: string, isActive: boolean) => {
    const colorClass = isActive ? 'icon-active' : 'icon-inactive';
    
    switch (brandId) {
      case 'ring':
        return (
          <img src={fitzering} alt="ring icon"/>
        );
        case 'Fitze-Steps-Tracker':
        return (
          <img src={FitzeStepTracker} alt="Fitze Steps Tracker"/>
        );
        case 'apple-watch':
        return (
          <img src={iconApple} alt="Apple icon"/>
        );
      case 'apple-health':
        return (
          <img src={appleHealth} alt="Apple Health icon"/>
        );
      case 'samsung-health':
        return (
            <img src={samsungHealth} alt="Samsung Health icon"/>
           );
      case 'health-connect':
        return (
          <img src={healthConnect} alt="Helath Connect icon"/>
        );
      case 'garmin':
        return (
          <img src={garminIcon} alt="Garmin icon"/>
        );
      case 'fitbit':
        return (
          <img src={fitbitIcon} alt="Fitbit icon"/>
        );
      case 'huawei-watch':
        return (
          <img src={huaweiWatch} alt="Huawei icon"/>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`hp-connect-scroll-track ${isMobile ? 'is-mob-layout' : ''}`} ref={scrollTrackRef}>
      <section className="hp-connect-section-premium" ref={containerRef}>
        <Container>
          <div className="hp-connect-card-outer">
            <Row className="align-items-center gy-5">
              
              {/* Left Column: Heading + Interactive device buttons list */}
              <Col md={5} xs={12} className="hp-connect-text-col text-start">
                <div className="hp-connect-topline">
                  <span className="compatibility-badge-pill">COMPATIBLITY</span>
                </div>
                
                <h2 className="hp-connect-main-headline font-sans">
                  The fitze app <br />
                  connects with
                </h2>

                {/* Explicit bento spacing list matching design columns */}
                <div className="hp-connect-brands-deck mt-5">
                  {/* Row 1: fitze Ring (Single) */}
                  <div className="hp-brands-grid-row">
                    <div className="hp-brands-grid-row gap-3"> 
                    <button 
                      onClick={() => handleBrandClick(0)}
                      className={`hp-brand-tag-btn font-sans ${activeIndex === 0 ? 'active' : ''}`}
                    >
                      {renderBrandIcon('ring', activeIndex === 0)}
                      <span className="tag-inner-text">fitze Ring</span>
                    </button>
                    <button 
                      onClick={() => handleBrandClick(1)}
                      className={`hp-brand-tag-btn font-sans ${activeIndex === 1 ? 'active' : ''}`}
                    >
                      {renderBrandIcon('Fitze-Steps-Tracker', activeIndex === 1)}
                      <span className="tag-inner-text">fitze Steps Tracker</span>
                    </button>
                  
                    
                    </div>
                    </div>
                    <p className="otherText">Other</p>
                    <div className="hp-brands-grid-row">
                      <button 
                      onClick={() => handleBrandClick(2)}
                      className={`hp-brand-tag-btn font-sans ${activeIndex === 2 ? 'active' : ''}`}
                    >
                      {renderBrandIcon('apple-watch', activeIndex === 2)}
                      <span className="tag-inner-text">Apple Watch</span>
                    </button>
                    <button 
                      onClick={() => handleBrandClick(3)}
                      className={`hp-brand-tag-btn font-sans ${activeIndex === 3 ? 'active' : ''}`}
                    >
                      {renderBrandIcon('apple-health', activeIndex === 3)}
                      <span className="tag-inner-text">Apple Health</span>
                    </button>
                  
                    <button 
                      onClick={() => handleBrandClick(4)}
                      className={`hp-brand-tag-btn font-sans ${activeIndex === 4 ? 'active' : ''}`}
                    >
                      {renderBrandIcon('samsung-health', activeIndex === 4)}
                      <span className="tag-inner-text">Samsung Health</span>
                    </button>
                    <button 
                      onClick={() => handleBrandClick(5)}
                      className={`hp-brand-tag-btn font-sans ${activeIndex === 5 ? 'active' : ''}`}
                    >
                      {renderBrandIcon('health-connect', activeIndex === 5)}
                      <span className="tag-inner-text">Health Connect</span>
                    </button>
                  
                    <button 
                      onClick={() => handleBrandClick(6)}
                      className={`hp-brand-tag-btn font-sans ${activeIndex === 6 ? 'active' : ''}`}
                    >
                      {renderBrandIcon('garmin', activeIndex === 6)}
                      <span className="tag-inner-text">Garmin</span>
                    </button>
                    <button 
                      onClick={() => handleBrandClick(7)}
                      className={`hp-brand-tag-btn font-sans ${activeIndex === 7 ? 'active' : ''}`}
                    >
                      {renderBrandIcon('fitbit', activeIndex === 7)}
                      <span className="tag-inner-text">Fitbit</span>
                    </button>
                    <button 
                      onClick={() => handleBrandClick(8)}
                      className={`hp-brand-tag-btn font-sans ${activeIndex === 8 ? 'active' : ''}`}
                    >
                      {renderBrandIcon('huawei-watch', activeIndex === 8)}
                      <span className="tag-inner-text">Huawei Watch</span>
                    </button>
                  </div>
                </div>
                <div className="connects-cta-action"><a href="#download-link" class="btn-fitze btn-promise-download px-5">Download The App</a></div>
              </Col>

              {/* Right Column: Mobile mockup + ripple concentric waves */}
              <Col md={7} xs={12} className="hp-connect-mockups-col d-flex justify-content-center align-items-center">
                <div className="concentric-ripples-and-device-wrap">
                  
                  {/* Glowing Concentric Rings Background (Centered behind device) */}
                  <div className="concentric-orange-ripple-background">
                    <img src={CircleImage} alt="bg-image" className="bgCircle img-fluid"/>
                  </div>

                  {/* iPhone Bezel shell container */}

                    
                    {/* Phone Screen Canvas (Always White) */}
                      
                      {/* SCREEN 1: fitze Ring (Rings presentation layout) */}
                      <div className={`screen-content-layout fitze-ring-screen ${activeIndex === 0 ? 'active' : ''}`}>
                       <img src={FitzeRingMockup} alt="Fitze Ring"/>
                      </div>
                       {/* SCREEN 2: Apple Watch */}
                      <div className={`screen-content-layout default-device-card ${activeIndex === 1 ? 'active' : ''}`}>
                         <img src={AppleWatchMockup} alt="Apple Watch"/>
                      </div>
                      {/* SCREEN 3: Apple Watch */}
                      <div className={`screen-content-layout default-device-card ${activeIndex === 2 ? 'active' : ''}`}>
                         <img src={AppleWatchMockup} alt="Apple Watch"/>
                      </div>

                      {/* SCREEN 4: Apple Health */}
                      <div className={`screen-content-layout default-device-card ${activeIndex === 3 ? 'active' : ''}`}>
                        <img src={AppleHealthMockup} alt="Apple Health"/>
                      </div>

                      {/* SCREEN 5: Samsung Health */}
                      <div className={`screen-content-layout default-device-card ${activeIndex === 4 ? 'active' : ''}`}>
                         <img src={SamsungHealthMockup} alt="Samsung Health"/>
                      </div>

                      {/* SCREEN 6: Health Connect */}
                      <div className={`screen-content-layout default-device-card ${activeIndex === 5 ? 'active' : ''}`}>
                        <img src={HealthConenctMockup} alt="Health Connect"/>
                      </div>

                      {/* SCREEN 7: Garmin */}
                      <div className={`screen-content-layout default-device-card ${activeIndex === 6 ? 'active' : ''}`}>
                           <img src={GarminMockup} alt="Garmin Connect"/>
                      </div>

                      {/* SCREEN 8: Fitbit */}
                      <div className={`screen-content-layout default-device-card ${activeIndex === 7 ? 'active' : ''}`}>
                       <img src={Fitbitockup} alt="Fitbit"/>
                      </div>

                      {/* SCREEN 9: Huawei Watch */}
                      <div className={`screen-content-layout default-device-card ${activeIndex === 8 ? 'active' : ''}`}>
                        <img src={HuaweiMockup} alt="Huawei"/>
                      </div>
                      

                </div>
              </Col>

            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ConnectionsSection;
