import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { ShoppingBag, X } from 'lucide-react';
import './FitzeringHero.css';
import BannerVideo from '../../../assets/ring-video.mp4';
import LeftElement from '../../../assets/left-element.svg';
import rightElement from '../../../assets/right-element.svg';
import ShopRing from '../../../assets/shop-ring-image.png';
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
            <img src={ShopRing} alt="ring" className='img-fluid'/>
          </div>
          <div className="fitzering-shop-text-content">
            <h4 className="shop-title">Shop fitze Ring</h4>
            <p className="shop-subtitle">Wear it. Forget it.  <span className="">➔</span>  Track. Move. Earn.</p>
            <a href="#buy-now" className="fitzering-shop-buy-button">
              Buy for <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 15 13" fill="none">
<path d="M1.32445 0.0149494C1.33045 0.023919 1.36345 0.0642824 1.39495 0.103151C1.62444 0.37523 1.79693 0.817732 1.88993 1.37534C1.95143 1.74161 1.95443 1.85672 1.95443 3.25299V4.55359H1.32745C0.754472 4.55359 0.688474 4.5506 0.575979 4.52817C0.398985 4.4908 0.215992 4.39064 0.0929965 4.26207C-0.00449983 4.15892 -0.00149994 4.15294 0.00449983 4.46539C0.0119996 4.72401 0.0149994 4.75241 0.052498 4.89294C0.112496 5.11569 0.194993 5.28162 0.319488 5.42962C0.488982 5.63294 0.661475 5.74655 0.907466 5.82279C0.959964 5.83774 1.07096 5.84372 1.46395 5.84671L1.95443 5.85419V7.1503L0.568479 7.14133L0.448483 7.09349C0.305989 7.03668 0.241491 6.99483 0.101996 6.87075L0 6.77955L0.00599978 7.06509C0.0134995 7.32969 0.0149994 7.35959 0.052498 7.49414C0.182993 7.96953 0.497981 8.30888 0.913466 8.4195C1.01696 8.44791 1.05746 8.4494 1.49094 8.45538L1.95443 8.46136V9.80083C1.95443 10.6096 1.94993 11.2061 1.94243 11.3077C1.93493 11.4004 1.91093 11.5738 1.88993 11.6949C1.79243 12.2525 1.61694 12.6726 1.36495 12.9447L1.31395 13H3.85036C5.3668 13 6.50076 12.994 6.66725 12.9865C6.95974 12.9716 7.61222 12.9073 7.75921 12.8759C7.80571 12.867 7.8927 12.8535 7.9497 12.8445C8.0712 12.8266 8.27219 12.7847 8.56168 12.7115C8.96966 12.6098 9.34165 12.4828 9.70614 12.3213C9.82013 12.2705 10.1471 12.1045 10.2341 12.0522C10.2806 12.0253 10.3361 11.9924 10.3571 11.9819C10.4156 11.9506 10.5131 11.8878 10.6556 11.7861C10.7261 11.7353 10.7966 11.6859 10.8116 11.6755C10.8746 11.6336 11.0921 11.4527 11.1911 11.3615C11.5676 11.0162 11.8826 10.632 12.127 10.2209C12.1615 10.1611 12.2065 10.0864 12.226 10.055C12.2755 9.97125 12.4795 9.55267 12.499 9.48988C12.508 9.46148 12.52 9.43158 12.526 9.4256C12.565 9.37477 12.79 8.66916 12.817 8.51518C12.826 8.46585 12.8305 8.45837 12.868 8.4509C12.892 8.44641 13.2415 8.44641 13.645 8.4494C14.452 8.45538 14.452 8.45538 14.6305 8.5376C14.7309 8.58395 14.7609 8.60488 14.8719 8.70504C15.0174 8.8351 15.0039 8.85603 14.9949 8.53013C14.9889 8.33878 14.9814 8.22068 14.9679 8.17284C14.9169 7.98896 14.9049 7.95009 14.8599 7.8574C14.7129 7.53749 14.467 7.30876 14.152 7.19963L14.029 7.15478L13.528 7.1488L13.0285 7.14133L13.0345 6.96642C13.0405 6.7362 13.0405 6.28024 13.033 6.04554L13.027 5.85718L13.696 5.85419C14.269 5.8512 14.3755 5.85419 14.4385 5.87063C14.6275 5.92295 14.7549 5.99471 14.9109 6.13673L14.9979 6.21746V5.99621C14.9979 5.7331 14.9844 5.61649 14.9304 5.44308C14.8239 5.09177 14.614 4.83015 14.314 4.6687C14.119 4.56405 14.107 4.56106 13.4365 4.55658C13.0435 4.55359 12.838 4.54761 12.8275 4.53864C12.8185 4.52967 12.811 4.51472 12.811 4.50276C12.811 4.4908 12.7885 4.39662 12.7585 4.29496C12.4075 3.05865 11.7521 2.07647 10.7936 1.34844C10.6631 1.24828 10.3436 1.03749 10.2146 0.965731C10.1651 0.937328 10.1111 0.907429 10.0976 0.898459C10.0346 0.864075 9.67314 0.687672 9.58314 0.650299C9.52914 0.62638 9.45865 0.596481 9.42715 0.584522C8.89767 0.355796 8.0097 0.139029 7.33173 0.0717571C7.22073 0.0612926 7.07374 0.0448482 7.00624 0.0388684C6.70025 0.00448482 6.27576 0 3.86536 0C1.82843 0 1.31695 0.00448482 1.32445 0.0149494ZM6.28476 0.662259C6.79175 0.692157 7.10373 0.731026 7.46822 0.819227C8.58118 1.08234 9.36415 1.63845 9.93263 2.56831C9.98513 2.65501 10.2071 3.10649 10.2401 3.19768C10.3976 3.62075 10.4741 3.8719 10.5416 4.20377C10.5581 4.2845 10.5806 4.39213 10.5911 4.44296C10.6016 4.4923 10.6061 4.53864 10.6016 4.54312C10.5941 4.5491 9.08816 4.55209 7.25223 4.5506L3.91485 4.54761L3.91035 2.62661C3.90885 1.57118 3.91035 0.693652 3.91485 0.677208L3.92085 0.648804H4.98731C5.57229 0.648804 6.15727 0.654784 6.28476 0.662259ZM10.7471 5.89903C10.7576 5.96332 10.7576 7.05462 10.7471 7.10844L10.7381 7.1488L3.91485 7.14133L3.91185 6.50747C3.90885 6.15915 3.91185 5.86914 3.91485 5.86316C3.91935 5.85568 5.3728 5.8512 7.33023 5.8512H10.7381L10.7471 5.89903ZM10.5941 8.46585C10.6016 8.48827 10.5656 8.67215 10.4921 8.97114C10.4081 9.3075 10.2941 9.64685 10.1786 9.898C10.1216 10.0266 9.97913 10.3046 9.94463 10.3569C9.92813 10.3809 9.88013 10.4571 9.83813 10.5244C9.56814 10.946 9.18266 11.3302 8.74317 11.6142C8.58268 11.7158 8.25269 11.8893 8.1642 11.9162C8.1462 11.9207 8.1267 11.9296 8.1192 11.9356C8.1087 11.9446 7.9722 11.9954 7.81321 12.0522C7.52072 12.1554 6.96424 12.2675 6.51726 12.3138C6.22777 12.3422 6.18127 12.3437 5.06681 12.3437H3.91335V8.46435L7.22673 8.45837C9.04916 8.45538 10.5506 8.4509 10.5626 8.44791C10.5761 8.44641 10.5896 8.45538 10.5941 8.46585Z" fill="white"/>
</svg>  699
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
