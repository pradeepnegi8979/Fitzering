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
export const FitzeCorporate: React.FC = () => {
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
    </div>
  );
};

export default FitzeCorporate;