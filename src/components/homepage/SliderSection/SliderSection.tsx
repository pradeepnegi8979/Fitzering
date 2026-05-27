import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import './SliderSection.css';
import videoBg1 from '../../../assets/video-bg1.png';
import videoBg2 from '../../../assets/video-bg2.png';

interface SliderItem {
  id: number;
  type: 'article' | 'video';
  boldTitle: string;
  regularTitle: string;
  desc?: string;
  readMore?: string;
  image: string;
  videoUrl?: string;
}

export const SliderSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // 6 beautifully curated custom community items based on the fitze layout
  const originalItems: SliderItem[] = [
    {
      id: 1,
      type: 'article',
      boldTitle: "Economy of Movement:",
      regularTitle: "Earn While You Walk",
      desc: "An investment, but what if the returns are immediate? This piece breaks down the strategy of reward-driven steps.",
      readMore: "Read More",
      image:videoBg1,
    },
    {
      id: 2,
      type: 'video',
      boldTitle: "Beyond the Screen:",
      regularTitle: "Setting Up Your Wearable",
      image:videoBg2,

    },
    {
      id: 3,
      type: 'article',
      boldTitle: "The Ecosystem:",
      regularTitle: "Form Meets Function",
      desc: "An editorial, visually driven walkthrough of the modern fitness journey. This brief overview highlights tracking details.",
      readMore: "Read More",
            image:videoBg1,

    },
    {
      id: 4,
      type: 'video',
      boldTitle: "Beyond the Screen:",
      regularTitle: "Setting Up Your Wearable",
            image:videoBg2,

      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    },
    {
      id: 5,
      type: 'article',
      boldTitle: "Digital Wellness:",
      regularTitle: "Tracking that Elevates",
      desc: "Our steps are our health, but adding financial rewards guarantees consistent compliance throughout the year.",
      readMore: "Read More",
      image:videoBg1,
    },
    {
      id: 6,
      type: 'video',
      boldTitle: "Community Stories:",
      regularTitle: "Walkers of UAE",
      image: videoBg2,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    }
  ];

  // Triplicating display items allows us to achieve a perfect marquee loop translation of -33.333333% (1 full copy)
  // even on extremely large wide-screen displays, seamlessly avoiding gaps, flickering or blank spots.
  const displayItems = [...originalItems, ...originalItems, ...originalItems];

  const handleOpenVideo = (title: string, url?: string) => {
    setActiveVideo(title);
  };

  return (
    <section className="slider-section-community bg-white" id="community-slider">
      {/* Title Group matching the design exactly */}
      <div className="slider-header text-center">
        <h2 className="slider-brand-heading d-flex align-items-center justify-content-center gap-2">
          <span className="brand-light">fitze </span>
          <span className="brand-coral">Community.</span>
        </h2>
      </div>

      {/* Full width marquee track container */}
      <div className="slider-container-fluid">
        <div className="slider-track-line">
          {displayItems.map((item, index) => (
            <div className="slider-card-cell" key={`${item.id}-${index}`}>
              <div className="slider-custom-card border-0">
                {/* Top Rounded Image Block */}
                <div className="slider-card-img-wrapper position-relative">
                  <img 
                    src={item.image} 
                    alt={`${item.boldTitle} ${item.regularTitle}`} 
                    className="slider-card-img"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Video overlay play icon */}
                  {item.type === 'video' && (
                    <div 
                      className="slider-play-overlay-trigger" 
                      onClick={() => handleOpenVideo(`${item.boldTitle} ${item.regularTitle}`, item.videoUrl)}
                    >
                      <div className="slider-play-icon-glow">
                        <Play size={20} fill="#ffffff" stroke="none" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Text Content with Poppins typography */}
                <div className="slider-card-body d-flex flex-column justify-content-between">
                  <div className="slider-text-content">
                    <h4 className="slider-card-title">
                      <span className="title-bold-prefix">{item.boldTitle}</span>
                      <span className="title-regular-suffix">{item.regularTitle}</span>
                    </h4>

                    {item.type === 'article' && item.desc && (
                      <p className="slider-card-desc">
                        {item.desc}
                        <span className="read-more-accent"> {item.readMore}</span>
                      </p>
                    )}
                  </div>

                  {/* Watch Video active button */}
                  {item.type === 'video' && (
                    <button 
                      className="btn-watch-video-action"
                      onClick={() => handleOpenVideo(`${item.boldTitle} ${item.regularTitle}`, item.videoUrl)}
                    >
                      Watch Video
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Premium Video Overlay Modal */}
      {activeVideo && (
        <div className="fitze-slider-video-overlay" onClick={() => setActiveVideo(null)}>
          <div className="slider-video-modal" onClick={(e) => e.stopPropagation()}>
            <button className="slider-modal-close" onClick={() => setActiveVideo(null)} aria-label="Close modal">
              <X size={26} />
            </button>
            <div className="modal-inner-card p-4">
              <span className="modal-top-tag mb-1 d-block">fitze Community Guide</span>
              <h3 className="modal-video-title mb-4">{activeVideo}</h3>
              <div className="ratio ratio-16x9 slider-iframe-wrapper">
                <iframe 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                  title="fitze Community Overview" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SliderSection;
