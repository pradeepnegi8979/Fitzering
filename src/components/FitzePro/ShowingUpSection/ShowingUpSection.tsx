import React from 'react';
import { Container } from 'react-bootstrap';
import './ShowingUpSection.css';

// @ts-ignore
import collageImg from '../../../assets/buildForPeople.png';

export const ShowingUpSection: React.FC = () => {
  return (
    <section className="fitzepro-showing-wrapper" id="fitzepro-showing-up">
      {/* Immersive Background Image with Dark Overlap Filter */}
      <div className="showing-bg-container" id="showing-bg-container">
        <img 
          src={collageImg} 
          alt="People fitness movement lifestyle collage background" 
          className="showing-bg-image"
          id="showing-bg-image"
          referrerPolicy="no-referrer"
        />
        <div className="showing-bg-overlay" id="showing-bg-overlay"></div>
      </div>

      <Container className="showing-content-card text-center" id="showing-content-card">
        <h2 className="showing-title-text" id="showing-title-text">
          Built for people <br /> <span style={{fontWeight:'400'}}>who keep showing up.</span>
        </h2>
        <p className="showing-subtitle-text" id="showing-subtitle-text">
          Everything gets better when movement becomes part of your lifestyle.
        </p>
      </Container>
    </section>
  );
};

export default ShowingUpSection;
