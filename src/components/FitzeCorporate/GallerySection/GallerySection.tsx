import React from 'react';
import { Container } from 'react-bootstrap';
import './GallerySection.css';
import image1 from '../../../assets/realEngagement1.png';
import image2 from '../../../assets/realEngagement2.png';
import image3 from '../../../assets/realEngagement3.png';


interface GalleryItem {
  url: string;
  alt: string;
}

const galleryImages: GalleryItem[] = [
  { 
    url: image1, 
    alt: 'Waterfront city skyline runners jogging' 
  },
  { 
    url: image2, 
    alt: 'Active silhouettes of trainers outdoors on deck' 
  },
  { 
    url: image3, 
    alt: 'Teammates celebrating victory on outdoor obstacle structure' 
  },
  { 
    url: image1, 
    alt: 'Athletic couple high-fiving outdoors' 
  },
  { 
    url: image2, 
    alt: 'People on green grass doing outdoor stretch beneath tree foliage' 
  },
  { 
    url: image1, 
    alt: 'Waterfront city skyline runners jogging' 
  },
  { 
    url: image2, 
    alt: 'Active silhouettes of trainers outdoors on deck' 
  },
  { 
    url: image3, 
    alt: 'Teammates celebrating victory on outdoor obstacle structure' 
  },
  { 
    url: image1, 
    alt: 'Athletic couple high-fiving outdoors' 
  },
  { 
    url: image2, 
    alt: 'People on green grass doing outdoor stretch beneath tree foliage' 
  }
];

export const GallerySection: React.FC = () => {
  return (
    <section className="corp-gallery-section" id="corp-gallery">
      <Container className="gallery-header-container text-center">
        {/* Eyebrow Label Pill */}
        <div className="gallery-eyebrow-box text-center">
          <span className="gallery-eyebrow">GET INSPIRED BY OUR CORPORATES IN ACTION.</span>
        </div>

        {/* Main Headline */}
        <h2 className="gallery-headline text-center">
          Real teams. Real energy. <span className="highlight-color">Real engagement.</span>
        </h2>

        {/* Subtitle description */}
        <p className="gallery-description text-center">
          From packed sports leagues and family days to wellness activations, step challenges and large-scale employee experiences, this is fitze in action.
        </p>
      </Container>

      {/* Marquee Slider (Outside of Container for 100% full viewport width) */}
      <div className="gallery-marquee-container">
        <div className="gallery-marquee-track">
          {/* First original set of slides */}
          <div className="gallery-marquee-slide">
            {galleryImages.map((img, index) => (
              <div className="gallery-marquee-card" key={`org-${index}`} id={`gallery-card-org-${index}`}>
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="gallery-marquee-img" 
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>

          {/* Secondary duplicate set of slides for seamless loop */}
          <div className="gallery-marquee-slide" aria-hidden="true">
            {galleryImages.map((img, index) => (
              <div className="gallery-marquee-card" key={`dup-${index}`} id={`gallery-card-dup-${index}`}>
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="gallery-marquee-img" 
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Container className="gallery-footer-container text-center">
        {/* CTA Button */}
        <div className="gallery-cta-wrapper">
          <button className="gallery-cta-btn" id="gallery-cta-action">
            Let's get your team moving
          </button>
        </div>
      </Container>
    </section>
  );
};

export default GallerySection;
