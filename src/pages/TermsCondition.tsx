import React from 'react';
import Header from '../components/common/Header/Header';
import { Container } from 'react-bootstrap';

import Footer from '../components/common/Footer/Footer';

export const TermsConditon: React.FC = () => {
  return (
    <div className="home-page-container">
      {/* Header */}
      <Header />
      
       <section className="faq-section" id="fitze-faqs">
      <Container className="faq-container">
        
      </Container>
      </section>
      
      <Footer />
    </div>
  );
};

export default TermsConditon;
