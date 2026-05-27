
import React, { useState } from 'react';
import './ConnectionsSection.css';
import googleFitImg from '../../../assets/google-fit.png';
import iconApple from '../../../assets/iconapple.svg';
import fitzering from '../../../assets/orangering.svg';
import appleHealth from '../../../assets/applehealth.svg';
import samsungHealth from '../../../assets/samsunghealth.svg';
import healthConnect from '../../../assets/healthconnect.svg';
import garminIcon from '../../../assets/garminicon.svg';
import fitbitIcon from '../../../assets/fitbiticon.svg';
import huaweiWatch from '../../../assets/huaweiwatch.svg';
interface BrandIntegration {
  id: string;
  name: string;
  accentColor: string;
  themeClass: string;
  iconElement: React.ReactNode;
  screenLogo: React.ReactNode;
  screenTitle: string;
  screenSubtitle?: string;
}

export const ConnectionsSection: React.FC = () => {
  // Available brands to toggle on the left list, optimized with standard SVGs
  const integrations: BrandIntegration[] = [
    {
      id: 'fitze-ring',
      name: 'fitze Ring',
      accentColor: '#fe572a',
      themeClass: 'theme-fitze',
      iconElement:fitzering,
      screenLogo: (
        <div className="inner-screen-brand-logo-wrap">
          <div className="fitze-ring-mockup-graphic">
            <svg viewBox="0 0 100 100" width="80" height="80" fill="none">
              <circle cx="50" cy="50" r="35" stroke="#fe572a" strokeWidth="6" />
              <circle cx="50" cy="50" r="35" stroke="#ff8359" strokeWidth="6" strokeDasharray="120 220" strokeLinecap="round" transform="rotate(-90 50 50)" />
              <path d="M50 42 L50 58 M42 50 L58 50" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      ),
      screenTitle: 'fitze Ring',
      screenSubtitle: 'Continuous active pulse diagnostic'
    },
    {
      id: 'apple-watch',
      name: 'Apple Watch sdfdsds',
      accentColor: '#111112',
      themeClass: 'theme-apple-watch',
      iconElement: iconApple,
      screenLogo: (
        <div className="inner-screen-brand-logo-wrap app-watch-view">
          <div className="apple-watch-mockup-graphic">
            <svg viewBox="0 0 100 100" width="80" height="80" fill="none">
              <rect x="25" y="15" width="50" height="70" rx="14" fill="#0c0d0e" stroke="#1c1d1e" strokeWidth="3" />
              <rect x="29" y="19" width="42" height="62" rx="10" fill="#000000" />
              <circle cx="50" cy="50" r="16" stroke="#ff3b30" strokeWidth="3.5" strokeDasharray="70 40" strokeLinecap="round" />
              <circle cx="50" cy="50" r="10" stroke="#4cd964" strokeWidth="3.5" strokeDasharray="50 30" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      ),
      screenTitle: 'Apple Watch',
      screenSubtitle: 'Seamless fitness kit syncing'
    },
    {
      id: 'apple-health',
      name: 'Apple Health',
      accentColor: '#FF2D55',
      themeClass: 'theme-apple-health',
      iconElement:appleHealth,
      screenLogo: (
        <div className="inner-screen-brand-logo-wrap Apple-Health-view">
          <svg viewBox="0 0 100 100" width="85" height="85" fill="#FF2D55">
            <path d="M50 82C50 82 18 56.4 18 36.5C18 24.1 27.7 14 39.6 14C45.8 14 50 17.5 50 17.5C50 17.5 54.2 14 60.4 14C72.3 14 82 24.1 82 36.5C82 56.4 50 82 50 82Z" />
          </svg>
        </div>
      ),
      screenTitle: 'Apple Health',
      screenSubtitle: 'Comprehensive health dashboard'
    },
    {
      id: 'samsung-health',
      name: 'Samsung Health',
      accentColor: '#24B2C9',
      themeClass: 'theme-samsung-health',
      iconElement:samsungHealth,
      screenLogo: (
        <div className="inner-screen-brand-logo-wrap Samsung-Health-view">
          <div className="samsung-logo-backdrop">
            <svg viewBox="0 0 100 100" width="80" height="80" fill="none">
              <circle cx="50" cy="50" r="35" fill="#24B2C9" />
              <path d="M38 58.5 C38 49 50 43.5 50 43.5 S62 49 62 58.5 S50 69.5 50 69.5 S38 68 38 58.5 Z" fill="#ffffff" />
              <circle cx="50" cy="35" r="5" fill="#ffffff" />
            </svg>
          </div>
        </div>
      ),
      screenTitle: 'Samsung Health',
      screenSubtitle: 'Active walk metric monitoring'
    },
    {
      id: 'health-connect',
      name: 'Health Connect',
      accentColor: '#4285F4',
      themeClass: 'theme-health-connect',
      iconElement:healthConnect,
      screenLogo: (
        <div className="inner-screen-brand-logo-wrap Google-Fit-view">
          <div className="google-fit-heart-icon">
            <svg viewBox="0 0 100 100" width="100" height="100" fill="none" strokeWidth="11" strokeLinecap="round">
              <path d="M50 30 C38 16, 18 24, 18 45 C18 64, 42 80, 50 82" stroke="#4285F4" />
              <path d="M50 30 C62 16, 82 24, 82 45 C82 56, 74 67, 63 74" stroke="#EA4335" />
              <path d="M63 74 L50 82" stroke="#FBBC05" />
              <circle cx="50" cy="30" r="1.5" fill="#34A853" stroke="#34A853" strokeWidth="8" />
            </svg>
          </div>
        </div>
      ),
      screenTitle: 'Google Fit',
      screenSubtitle: 'Powered by Health Connect'
    },
    {
      id: 'garmin',
      name: 'Garmin',
      accentColor: '#1A1D20',
      themeClass: 'theme-garmin',
      iconElement:garminIcon,
      screenLogo: (
        <div className="inner-screen-brand-logo-wrap Garmin-view">
          <div className="garmin-screen-concept">
            <svg viewBox="0 0 100 100" width="80" height="80" fill="none">
              <polygon points="50,15 90,80 10,80" fill="#111" stroke="#333" strokeWidth="3" />
              <line x1="20" y1="65" x2="80" y2="65" stroke="#ffffff" strokeWidth="4" />
              <line x1="30" y1="48" x2="70" y2="48" stroke="#ff3b30" strokeWidth="4" />
            </svg>
          </div>
        </div>
      ),
      screenTitle: 'Garmin Connect',
      screenSubtitle: 'GPS performance & stats'
    },
    {
      id: 'fitbit',
      name: 'Fitbit',
      accentColor: '#00B4B4',
      themeClass: 'theme-fitbit',
      iconElement:fitbitIcon,
      screenLogo: (
        <div className="inner-screen-brand-logo-wrap Fitbit-view">
          <svg viewBox="0 0 100 100" width="80" height="80" fill="#00B4B4">
            <circle cx="50" cy="16" r="8" />
            <circle cx="50" cy="38" r="6.5" />
            <circle cx="50" cy="60" r="6.5" />
            <circle cx="50" cy="80" r="5" />
            <circle cx="68" cy="31.5" r="6.5" />
            <circle cx="68" cy="53" r="6.5" />
            <circle cx="68" cy="71" r="5" />
            <circle cx="83" cy="45.5" r="5" />
            <circle cx="32" cy="31.5" r="6.5" />
            <circle cx="32" cy="53" r="6.5" />
            <circle cx="32" cy="71" r="5" />
            <circle cx="17" cy="45.5" r="5" />
          </svg>
        </div>
      ),
      screenTitle: 'Fitbit',
      screenSubtitle: 'Direct calorie burnt matching'
    },
    {
      id: 'huawei-watch',
      name: 'Huawei Watch',
      accentColor: '#FF4D4D',
      themeClass: 'theme-huawei',
      iconElement:huaweiWatch,
      screenLogo: (
        <div className="inner-screen-brand-logo-wrap Huawei-view">
          <div className="huawei-petal-graphic">
            <svg viewBox="0 0 100 100" width="80" height="80" fill="#FF4D4D">
              <path d="M50 15C36 25 50 45 50 45S64 25 50 15Z" />
              <path d="M25 50C35 36 55 50 55 50S35 64 25 50Z" />
              <path d="M75 50C65 36 45 50 45 50S65 64 75 50Z" />
            </svg>
          </div>
        </div>
      ),
      screenTitle: 'Huawei Health',
      screenSubtitle: 'Smart wearable connectivity'
    }
  ];

  // Default initially selected item is custom connection: Health Connect (Google Fit)
  const [activeBrandId, setActiveBrandId] = useState<string>('health-connect');

  const currentBrand = integrations.find(b => b.id === activeBrandId) || integrations[4];

  return (
    <section className="compatibility-feature-section" id="compatibility">
      <div className="compatibility-outer-wrapper">
        <div className="compatibility-container-card">
          <div className="row align-items-center justify-content-between g-5">
            
            {/* Left Column Content */}
            <div className="col-lg-6 col-12 text-column">
              <div className="compatibility-badge-capsule">
                COMPATIBILITY
              </div>
              
              <h2 className="compatibility-title">
                The fitze app connects with
              </h2>
              
              <p className="compatibility-paragraph-desc">
                Sync fitze with your favorite wearables and fitness services to track your daily steps instantly. Earn rewards automatically no matter which brand you wear.
              </p>

              {/* Dynamic Badges Grid (Fully styled via CSS classes to avoid inline CSS) */}
              <div className="compatibility-badges-grid">
                {integrations.map((brand) => (
                  <button 
                    key={brand.id}
                    className={`brand-pill-button pill-${brand.id} }`} //${activeBrandId === brand.id ? 'active' : ''
                    onClick={() => setActiveBrandId(brand.id)}
                    type="button"
                  >
                    <span className="brand-logo-badge-icon">
                      <img src={brand.iconElement} alt="brand icon"/>
                    </span>
                    <span className="brand-badge-label-text">
                      {brand.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column Content - Mobile Mockup + Animated Ripple Background */}
            <div className="col-lg-5 col-12 mockup-column-wrapper">
              <div className="mockup-relative-field">
                
                {/* 
                  CIRCULAR FLOATING ANIMATED BACKGROUND FOR MOBILE PHONE:
                  Consists of circular concentric motion waves utilizing #fe572a ONLY.
                  Matches pixel-perfect circular overlays behind the device shadow.
                */}
                <div className="sync-ripples-animation-underlay">
                  <div className="radial-compatibility-ring ring-1"></div>
                  <div className="radial-compatibility-ring ring-2"></div>
                  <div className="radial-compatibility-ring ring-3"></div>
                  <div className="radial-compatibility-ring ring-4"></div>
                  <div className="radial-compatibility-ring ring-5"></div>
                  <div className="radial-compatibility-ring ring-6"></div>
                </div>

                {/* iPhone Frame Bezel Hardware Mockup */}
               
                <img src={googleFitImg} alt="Google Fit Mockup" className={`compatibility-device-mockup ${currentBrand.themeClass}`}  style={{zIndex:'99'}}/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectionsSection;

