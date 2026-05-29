import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import HeroSection from '../components/ContactUs/HeroSection/HeroSection';
import StatsSection from '../components/ContactUs/StatsSection/StatsSection';
import ContactFormSection from '../components/ContactUs/ContactFormSection/ContactFormSection';
import ContactInfoSection from '../components/ContactUs/ContactInfoSection/ContactInfoSection';
export const ContactUs: React.FC = () => {
  return (
    <div className="contact-us-page-wrapper animate-page-transition" id="fitze-contact-us-page">
      
      {/* 1. Header Navigation Toolbar */}
      <Header/>

      {/* 2. Hero banner title segment with grid overlay */}
      <HeroSection/>

      {/* 3. Horizontal Stats numeric counter strip */}
      <StatsSection/>

      {/* 4. Details side-by-side split row (Info vs Form) */}
      <div className="contact-details-content-row py-5 bg-light-gradient">
        <Container className="contact-row-container py-4">
          <Row className="g-5 align-items-stretch justify-content-between">
            <Col xs={12} lg={5} className="d-flex flex-column justify-content-between">
              <ContactInfoSection/>
            </Col>
            <Col xs={12} lg={6}>
              <ContactFormSection />
            </Col>
          </Row>
        </Container>
      </div>

      {/* 5. Complete Corporate and user Footer Columns */}
      <Footer/>

    </div>
  );
};

export default ContactUs;
