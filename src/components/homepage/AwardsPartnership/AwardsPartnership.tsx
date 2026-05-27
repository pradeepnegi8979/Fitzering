import React from 'react';
import './AwardsPartnership.css';
import logo1 from '../../../assets/logo1.png';
import logo2 from '../../../assets/logo2.png';
import logo3 from '../../../assets/logo3.png';
interface LogoItem {
  id: string;
  type: 'award' | 'logoOnly';
  element: React.ReactNode;
}

export const AwardsPartnership: React.FC = () => {
  // We define beautifully rendered SVG logos mimicking the uploaded design perfectly.
  const logos: LogoItem[] = [
    {
      id: 'ea-1',
      type: 'award',
      img:logo1,
      
    },
    {
      id: 'rakez-2',
      type: 'logoOnly',
      img:logo2,
      
    },
    {
      id: 'gbtech-3',
      type: 'logoOnly',
      img:logo3,
      
    },
    {
      id: 'ea-1',
      type: 'award',
      img:logo1,
      
    },
    {
      id: 'rakez-2',
      type: 'logoOnly',
      img:logo2,
      
    },
    {
      id: 'gbtech-3',
      type: 'logoOnly',
      img:logo3,
      
    },
    {
      id: 'ea-1',
      type: 'award',
      img:logo1,
      
    },
    {
      id: 'rakez-2',
      type: 'logoOnly',
      img:logo2,
      
    },
    {
      id: 'gbtech-3',
      type: 'logoOnly',
      img:logo3,
      
    },
   
  ];

  // We loop the array 4 times to populate the horizontal slider so that 
  // we have deep coverage on ultra widescreen layouts without running out 
  // of items or creating layout snaps/breaks.
  const marqueeItems = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <section className="awards-partnership-section bg-white" id="awards-partnership">
      <div className="ap-outer-wrapper">
        {/* Left Side Static Non-moving Title Container */}
        <div className="awards-partnership-left-box">
          <h3 className="awards-partnership-title">
            Awards &amp; <br />
            Partnerships
          </h3>
        </div>

        {/* Right Side Endless Scrolling Container */}
        <div className="awards-partnership-right-scroll-area">
          <div className="awards-partnership-track">
            {marqueeItems.map((item, index) => (
              <div className="ap-track-cell" key={`${item.id}-${index}`}>
                {item.img && <img src={item.img} alt={`Logo ${item.id}`} />}
              </div>
            ))}
          </div>
          
          {/* Shaded visual overlay block giving depth */}
          <div className="ap-fade-overlay-left"></div>
          <div className="ap-fade-overlay-right"></div>
        </div>
      </div>
    </section>
  );
};

export default AwardsPartnership;
