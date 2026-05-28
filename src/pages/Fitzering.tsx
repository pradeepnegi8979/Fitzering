import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { Sparkles, Check, X, ShieldCheck, Box, Info, HelpCircle, Plus } from 'lucide-react';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import FitzeringHero from '../components/fitzering/Fitzeringhero/FitzeringHero';
import SevenSignalsSection   from '../components/fitzering/SevenSignalsSection/SevenSignalsSection'; 
import OrangeSectionF from '../components/fitzering/OrangeSectionF/OrangeSectionF';
import MovementFlowSection  from '../components/fitzering/MovementFlowSection/MovementFlowSection';
import RealRewardsSection from '../components/fitzering/RealRewardsSection/RealRewardsSection';
import LandscapeFinishSection from '../components/fitzering/LandscapeFinishSection/LandscapeFinishSection';
import RealPeopleSection  from '../components/homepage/RealPeopleSection/RealPeopleSection';
import BuiltForRealLifeSection  from '../components/fitzering/BuiltForRealLifeSection/BuiltForRealLifeSection';
import OrangeSectionS from '../components/fitzering/OrangeSectionS/OrangeSectionS';
import OwnConsistencySection  from '../components/fitzering/OwnConsistencySection/OwnConsistencySection';
import FindYourPerfectFitSection  from '../components/fitzering/FindYourPerfectFitSection/FindYourPerfectFitSection';
import FinerDetailsSection  from '../components/fitzering/FinerDetailsSection/FinerDetailsSection';
import '../styles/FitzeringProcess.css';
import FaqSection from '../components/fitzering/FaqSection/FaqSection';
export const FitzeringProcess: React.FC = () => {
  return (
    <div className="fitzering-process-page">
      <Header />
      <FitzeringHero />
      <SevenSignalsSection />
      <OrangeSectionF/>
      <MovementFlowSection/>
      <RealRewardsSection/>
      <RealPeopleSection showHeader={false} variant="white" />
      <LandscapeFinishSection />
      <BuiltForRealLifeSection/>
      <OrangeSectionS/>
      <OwnConsistencySection />
      <FindYourPerfectFitSection />
      <FinerDetailsSection />
      <FaqSection/>
      <Footer />
    </div>
  );
};

export default FitzeringProcess;
