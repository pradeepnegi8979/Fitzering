import React, { useState, useEffect } from 'react';

import Header from "../components/common/Header/Header"; 
import Footer from "../components/common/Footer/Footer";
import HeroSection from "../components/FitzeCorporate/HeroSection/HeroSection";
import StatsSection from "../components/FitzeCorporate/StatsSection/StatsSection";
import TrustedBySection from "../components/FitzeCorporate/TrustedBySection/TrustedBySection";
import SolutionSection from "../components/FitzeCorporate/SolutionSection/SolutionSection";
import TickerSection from "../components/FitzeCorporate/TickerSection/TickerSection";
import GallerySection from "../components/FitzeCorporate/GallerySection/GallerySection";
import EffortlessSection from "../components/FitzeCorporate/EffortlessSection/EffortlessSection";
import ProcessSection from "../components/FitzeCorporate/ProcessSection/ProcessSection";
import WellnessRingSection from "../components/FitzeCorporate/WellnessRingSection/WellnessRingSection";
import BentoMockupsSection from "../components/FitzeCorporate/BentoMockupsSection/BentoMockupsSection";
import SocialHighlightsSection from "../components/FitzeCorporate/SocialHighlightsSection/SocialHighlightsSection";
import CorporateLeadModal from "../components/corporateModal/CorporateLeadModal";

export const FitzeCorporate: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  // Dynamic click hook to bind all CTA elements across sub-sections cleanly
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Identify whether the clicked target is a registered CTA button context
      const isCtaButton =
        target.closest('.corp-hero-cta-btn') ||
        target.closest('.bento-callback-pill-button') ||
        target.closest('.ring-cta-filled-button') ||
        target.closest('.gallery-cta-btn') ||
        target.closest('.tab-showcase-explore-btn') ||
        (
          (target.tagName === 'BUTTON' || target.closest('button')) &&
          !target.closest('.insta-icon-btn') &&
          !target.closest('.corp-download-btn') &&
          (
            target.innerText?.toLowerCase().includes('morale') ||
            target.innerText?.toLowerCase().includes('engage') ||
            target.innerText?.toLowerCase().includes('get started') ||
            target.innerText?.toLowerCase().includes('book a demo') ||
            target.innerText?.toLowerCase().includes('talk to expert') ||
            target.innerText?.toLowerCase().includes('contact us') ||
            target.innerText?.toLowerCase().includes('activate employee') ||
            target.innerText?.toLowerCase().includes('request a callback') ||
            target.innerText?.toLowerCase().includes('consultation') ||
            target.innerText?.toLowerCase().includes('demo')
          )
        );

      if (isCtaButton) {
        e.preventDefault();
        e.stopPropagation();
        setShowModal(true);
      }
    };

    document.addEventListener('click', handleGlobalClick, true);
    return () => {
      document.removeEventListener('click', handleGlobalClick, true);
    };
  }, []); 
  return (
    <div className="fitzering-process-page">
      <Header />
      <HeroSection/>
      <StatsSection/>
      <TrustedBySection/>
      <SolutionSection/>
      <TickerSection/>
      <GallerySection/>
      <EffortlessSection/>
      <ProcessSection/>
      <SocialHighlightsSection/>  
      <WellnessRingSection/>
      <BentoMockupsSection/>
      <Footer />
      <CorporateLeadModal show={showModal} onHide={() => setShowModal(false)}/>
    </div>
  );
};

export default FitzeCorporate;