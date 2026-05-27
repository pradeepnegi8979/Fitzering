import React from 'react';
import Header from '../components/common/Header/Header';
import HeroSection from '../components/homepage/HeroSection/HeroSection';
import StatsSection from '../components/homepage/StatsSection/StatsSection';
import HowItWorksSection from '../components/homepage/HowItWorksSection/HowItWorksSection';
import RewardsStreaksSection from '../components/homepage/RewardsStreaksSection/RewardsStreaksSection';
import RealPeopleSection from '../components/homepage/RealPeopleSection/RealPeopleSection';
import CallToActionSection from '../components/homepage/CallToActionSection/CallToActionSection';
import AwardsPartnership from '../components/homepage/AwardsPartnership/AwardsPartnership';
import FitzeRingSection from '../components/homepage/FitzeRingSection/FitzeRingSection';
import VideoSection from '../components/homepage/VideoSection/VideoSection';
import ConnectionsSection from '../components/homepage/ConnectionsSection/ConnectionsSection';
import TrackProgressSection from '../components/homepage/TrackProgressSection/TrackProgressSection';
import SliderSection from '../components/homepage/SliderSection/SliderSection';
import PromiseSection from '../components/homepage/PromiseSection/PromiseSection';
import Footer from '../components/common/Footer/Footer';

export const Home: React.FC = () => {
  return (
    <div className="home-page-container">
      {/* Header */}
      <Header />
      
      {/* Hero Banner */}
      <HeroSection />
      
      {/* Stats Numbers */}
      <StatsSection />
      
      {/* How it works */}
      <HowItWorksSection />
      
      {/* Every Step Counts Offerings */}
      <RewardsStreaksSection />
      
      {/* Real People Reviews */}
      <RealPeopleSection variant="orange" />
      
      {/* Call to action strip */}
      <CallToActionSection />
      
      {/* Partnerships */}
      <AwardsPartnership />
      
      {/* Fite Ring smart wear */}
      <FitzeRingSection />
      
      {/* Consistency Video */}
      <VideoSection />
      
      {/* Integrity App Synchronizer */}
      <ConnectionsSection />
      
      {/* Wallet Payout Banner */}
      <TrackProgressSection />
      
      {/* Video Community Vlog */}
      <SliderSection />
      
      {/* Brand Contract */}
      <PromiseSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
