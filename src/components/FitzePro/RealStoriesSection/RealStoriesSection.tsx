import React from 'react';
import { Container } from 'react-bootstrap';
import { Star } from 'lucide-react';
import './RealStoriesSection.css';
const FitzeProBlack = (<svg xmlns="http://www.w3.org/2000/svg" width="156" height="34" viewBox="0 0 156 34" fill="none">
<path d="M31.3517 33.0782C29.7284 33.0782 28.3043 32.8332 27.0792 32.3431C25.8847 31.8225 24.9506 30.9802 24.2768 29.8164C23.603 28.622 23.2661 26.9987 23.2661 24.9467V4.00493C23.2661 3.79802 23.4339 3.63028 23.6408 3.63028L29.0934 3.63028C29.3004 3.63028 29.4681 3.79802 29.4681 4.00493V9.54949C29.4681 9.75641 29.6358 9.92414 29.8427 9.92414H34.836C35.0429 9.92414 35.2106 10.0919 35.2106 10.2988V14.7408C35.2106 14.9477 35.0429 15.1154 34.836 15.1154H29.8427C29.6358 15.1154 29.4681 15.2832 29.4681 15.4901V25.0386C29.4681 26.0799 29.6978 26.7997 30.1572 27.1978C30.6166 27.596 31.3976 27.795 32.5002 27.795H35.1576C35.3645 27.795 35.5323 27.9628 35.5323 28.1697V32.7035C35.5323 32.9105 35.3645 33.0782 35.1576 33.0782L31.3517 33.0782Z" fill="#1C1C1E"/>
<path d="M71.591 25.4753C71.7254 25.3206 71.9526 25.2544 72.1336 25.3504L76.0105 27.4068C76.2018 27.5083 76.268 27.7463 76.1395 27.9207C75.0022 29.4637 70.5612 34.2896 63.3372 32.9749C58.8174 32.1524 54.7788 28.4289 53.8469 23.5431C53.543 22.1336 53.5351 20.6379 53.7983 19.1916C54.9745 12.7282 61.1183 8.47639 67.5816 9.65264C73.8641 10.796 78.0667 16.6973 77.1576 22.9758C77.1341 23.1048 77.128 23.2219 77.1126 23.3306C77.0919 23.4763 76.9561 23.5633 76.809 23.5634L60.3409 23.5646C60.0989 23.5646 59.9201 23.791 59.9961 24.0207C60.5929 25.8252 62.1216 27.3371 64.2914 27.7319C67.8003 28.3705 70.7003 26.5009 71.591 25.4753ZM60.1181 18.3338L60.0447 18.5257C59.9511 18.7705 60.1313 19.0333 60.3934 19.0342L70.5961 19.0694C70.8464 19.0703 71.027 18.8299 70.9375 18.5962C70.1212 16.4631 68.1495 14.8616 65.9207 14.6736C63.4923 14.4185 61.0595 15.9836 60.1181 18.3338Z" fill="#1C1C1E"/>
<path d="M37.2937 33.0846C37.0867 33.0846 36.919 32.9169 36.919 32.71V28.2664C36.919 28.1741 36.9531 28.085 37.0147 28.0163L48.017 15.747C48.2333 15.5057 48.0621 15.1222 47.738 15.1222L37.309 15.1222C37.102 15.1222 36.9343 14.9545 36.9343 14.7475V10.3052C36.9343 10.0983 37.102 9.93056 37.309 9.93056L55.3341 9.93056C55.541 9.93056 55.7087 10.0983 55.7087 10.3052V14.9764C55.7087 15.0702 55.6735 15.1605 55.6101 15.2297L44.5241 27.3113C44.3037 27.5516 44.4741 27.9393 44.8002 27.9393H55.3187C55.5256 27.9393 55.6934 28.107 55.6934 28.3139V32.71C55.6934 32.9169 55.5256 33.0846 55.3187 33.0846H37.2937Z" fill="#1C1C1E"/>
<path d="M3.54455 33.0781C3.33764 33.0781 3.1699 32.9103 3.1699 32.7034L3.1699 15.49C3.1699 15.283 3.00216 15.1153 2.79525 15.1153H0.374651C0.167737 15.1153 -1.8089e-08 14.9476 0 14.7407L3.88331e-07 10.2987C4.0642e-07 10.0918 0.167737 9.92402 0.374651 9.92402L2.79525 9.92402C3.00216 9.92402 3.1699 9.75628 3.1699 9.54937L3.1699 7.8567C3.1699 5.92719 3.49149 4.39584 4.13465 3.26264C4.77782 2.12943 5.69663 1.3025 6.89109 0.781845C8.11617 0.261184 9.54033 0.00085435 11.1636 0.000854492L13.3156 0.00085468C13.5226 0.000854698 13.6903 0.168592 13.6903 0.375505V4.90937C13.6903 5.11628 13.5226 5.28402 13.3156 5.28402H12.0824C11.1329 5.28402 10.4438 5.4831 10.015 5.88125C9.58627 6.24878 9.37188 6.89194 9.37188 7.81075V9.54937C9.37188 9.75629 9.53962 9.92402 9.74653 9.92402L20.4614 9.92402C20.6684 9.92402 20.8361 10.0918 20.8361 10.2987V32.7034C20.8361 32.9103 20.6684 33.0781 20.4614 33.0781H15.0088C14.8019 33.0781 14.6341 32.9103 14.6341 32.7034L14.6341 15.49C14.6341 15.283 14.4664 15.1153 14.2595 15.1153L9.74653 15.1153C9.53962 15.1153 9.37188 15.283 9.37188 15.49L9.37188 32.7034C9.37188 32.9103 9.20414 33.0781 8.99723 33.0781H3.54455Z" fill="#1C1C1E"/>
<path d="M150.082 0.00878906C152.873 0.00878906 155.136 2.27143 155.136 5.0625V28.1377C155.136 30.9288 152.873 33.1914 150.082 33.1914H92.0029L93.2617 26.0166C93.9252 27.0251 94.841 27.8744 96.0088 28.5645C97.2032 29.228 98.6365 29.5596 100.309 29.5596C102.219 29.5596 104.038 29.0823 105.763 28.127C107.514 27.1449 108.988 25.7906 110.183 24.0654C111.403 22.3138 112.212 20.3365 112.61 18.1338C112.77 17.2845 112.85 16.4748 112.85 15.7051C112.85 13.9269 112.491 12.3739 111.774 11.0469C111.058 9.71998 110.049 8.698 108.749 7.98145C107.449 7.26485 105.962 6.90627 104.29 6.90625C102.618 6.90625 101.052 7.25133 99.5918 7.94141C98.1585 8.63149 96.9643 9.48166 96.0088 10.4902L96.5664 7.26465H92.0273L87.4668 33.1914H85.6533C82.8623 33.1913 80.5996 30.9287 80.5996 28.1377V5.0625C80.5996 2.27148 82.8623 0.00887876 85.6533 0.00878906H150.082ZM141.311 6.90625C138.816 6.90625 136.546 7.50387 134.502 8.69824C132.485 9.89261 130.892 11.512 129.725 13.5557C128.583 15.5992 128.013 17.8551 128.013 20.3232C128.013 22.128 128.397 23.734 129.167 25.1406C129.963 26.5473 131.065 27.6356 132.472 28.4053C133.878 29.175 135.511 29.5596 137.369 29.5596C139.864 29.5595 142.133 28.9763 144.177 27.8086C146.22 26.6142 147.84 24.9949 149.034 22.9512C150.229 20.9075 150.825 18.6509 150.825 16.1826C150.825 14.3514 150.414 12.7453 149.591 11.3652C148.795 9.95888 147.68 8.87116 146.247 8.10156C144.814 7.30537 143.168 6.90631 141.311 6.90625ZM128.87 6.90625C127.357 6.9063 125.977 7.27837 124.729 8.02148C123.509 8.76464 122.447 9.79998 121.545 11.127L122.222 7.26465H117.683L113.821 29.2012H118.359L120.43 17.457C120.854 15.3072 121.598 13.7938 122.659 12.918C123.721 12.0421 125.128 11.6045 126.88 11.6045H128.034L128.87 6.90625ZM140.673 10.7285C142.239 10.7285 143.54 11.2326 144.575 12.2412C145.61 13.2232 146.128 14.6306 146.128 16.4619C146.128 18.0808 145.769 19.6069 145.053 21.04C144.336 22.4467 143.34 23.588 142.066 24.4639C140.819 25.3132 139.439 25.7383 137.926 25.7383C136.386 25.7382 135.126 25.2466 134.144 24.2646C133.188 23.2826 132.711 21.9021 132.711 20.124C132.711 18.4786 133.043 16.939 133.706 15.5059C134.396 14.0464 135.338 12.8922 136.532 12.043C137.753 11.1672 139.134 10.7286 140.673 10.7285ZM102.618 10.8477C104.211 10.8477 105.525 11.3528 106.56 12.3613C107.621 13.3433 108.151 14.7238 108.151 16.502C108.151 17.0857 108.098 17.6296 107.992 18.1338C107.727 19.6466 107.183 20.974 106.36 22.1152C105.538 23.2564 104.555 24.1317 103.414 24.7422C102.299 25.3261 101.158 25.6181 99.9902 25.6182C98.4243 25.6182 97.1105 25.1006 96.0488 24.0654C95.0138 23.0303 94.4961 21.6239 94.4961 19.8457C94.4961 19.262 94.5492 18.718 94.6553 18.2139C94.9207 16.7012 95.4645 15.3871 96.2871 14.2725C97.1099 13.1577 98.0796 12.3075 99.1943 11.7236C100.335 11.1399 101.477 10.8477 102.618 10.8477Z" fill="#FE572A"/>
</svg>);
interface Testimonial {
  id: number;
  rating: number;
  quote: string;
  avatarUrl: string;
  name: string;
  title: string;
  achievementBadge: string;
}

export const RealStoriesSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      rating: 5,
      quote: "Upgrading to Pro completely changed my mindset. I walk every morning now, and having those guaranteed cash-out streaks keeps me highly accountable. I love the simple payouts!",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
      name: "Aisha Al-Mansoori",
      title: "Senior Product Manager",
      achievementBadge: "EARNED AED 340 IN PAYOUTS"
    },
    {
      id: 2,
      rating: 5,
      quote: "Fitze Pro momentum option is purely brilliant. The extra daily coins let me buy vouchers for my favourite coffee joints and apparel brands weekly. It paid for itself in month one.",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      name: "Tariq Mahmood",
      title: "Active Developer",
      achievementBadge: "REDEEMED 18 PREMIUM OFFERS"
    },
    {
      id: 3,
      rating: 5,
      quote: "The unlimited streaks feature is awesome. Under starter plan, I hit three consistency streak benchmarks back-to-back last quarter and lost 4kg in the process. Highly recommend!",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
      name: "Chloe Henderson",
      title: "Wellness Consultant",
      achievementBadge: "LOST 4KG WITH FITZE"
    },
    {
      id: 4,
      rating: 5,
      quote: "As a marathon runner, having double entries in luxury challenge draws has been wild. Already won a premium smartwatch! The fast support is also a massive pro.",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
      name: "Marcus Aurelius",
      title: "Fitness Coach & Writer",
      achievementBadge: "WON PREMIUM SMARTWATCH DRAW"
    }
  ];

  return (
    <section className="fitzepro-stories-wrapper" id="fitzepro-stories">
      <Container className="fitzepro-stories-container">
        
        {/* Section Header */}
        <div className="fitzepro-stories-header text-center">
          <span className="fitzepro-stories-eyebrow">REAL STORIES</span>
          <h2 className="fitzepro-stories-title">
            What users are getting from <span className="logo-text-fitze" style={{fontWeight:'600',color:'#FE572A'} }>PRO</span>
          </h2>
        </div>

        {/* Horizontal Testimonials Slider (with custom styling for interactive desktop swipe) */}
        <div className="stories-scroll-track-container">
          <div className="stories-cards-track">
            {testimonials.map((t) => (
              <div className="story-card" key={t.id} id={`story-card-${t.id}`}>
                
                {/* 5 Star rating */}
                <div className="story-rating-row d-flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={15} className="story-star-fill" />
                  ))}
                </div>

                {/* Quote statement */}
                <p className="story-quote-text">
                  "{t.quote}"
                </p>

                {/* User Card footer with avatar and title */}
                <div className="story-user-meta d-flex align-items-center gap-3 mt-4">
                  <div className="story-avatar-frame flex-shrink-0">
                    <img 
                      src={t.avatarUrl} 
                      alt={t.name} 
                      className="story-avatar-img"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="story-user-details text-start">
                    <div className="story-user-name">{t.name}</div>
                    <div className="story-user-title">{t.title}</div>
                  </div>
                </div>

                {/* Custom Highlight Achievement badge */}
                <div className="story-achieve-badge-container mt-4">
                  <span className="story-achieve-badge-pill">
                    {t.achievementBadge}
                  </span>
                </div>

              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
};

export default RealStoriesSection;
