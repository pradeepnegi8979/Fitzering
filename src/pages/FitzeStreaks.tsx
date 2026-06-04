import React from 'react';
import Header from '../components/common/Header/Header';
import HeroSection from '../components/fitzeStreaks/HeroSection/HeroSection';
import Footer from '../components/common/Footer/Footer';
import HowItWorksSection from '../components/fitzeStreaks/HowItWorksSection/HowItWorksSection';
import CareemPartnershipSection from '../components/fitzeStreaks/CareemPartnershipSection/CareemPartnershipSection';
import RealPeopleSection from '../components/homepage/RealPeopleSection/RealPeopleSection';
import WhySection from '../components/fitzeStreaks/WhySection/WhySection';
import FitzeRingPromoSection from '../components/fitzeStreaks/FitzeRingPromoSection/FitzeRingPromoSection';
import FaqSection from '../components/fitzeStreaks/FaqSection/FaqSection';
import OrangeSectionB from '../components/fitzeStreaks/OrangeSectionB/OrangeSectionB';
import { Helmet } from "react-helmet-async";

export const FitzeStreaks: React.FC = () => {
  return (
    <div className="home-page-container">
      <Helmet>
        <title>Fitze Streaks | Build Healthy Habits Daily</title>

        <meta
          name="description"
          content="Join Fitze Streaks to stay consistent with your fitness goals, track progress, and earn rewards through healthy habits."
        />

        <meta property="og:title" content="Fitze Streaks" />
        <meta
          property="og:description"
          content="Track fitness habits, maintain streaks, and stay motivated."
        />
      </Helmet>
      {/* Header */}
      <Header />
        <HeroSection/>
        <HowItWorksSection/>
        <CareemPartnershipSection/>
        <RealPeopleSection showHeader={false} variant="white"/>
        <WhySection/>
        <FitzeRingPromoSection/>
        <FaqSection/>
        <OrangeSectionB/>
      <Footer />
    </div>
  );
};

export default FitzeStreaks;
