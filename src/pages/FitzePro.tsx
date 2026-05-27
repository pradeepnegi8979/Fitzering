import FaqSection from "../components/common/FaqSection/FaqSection";
import Footer from "../components/common/Footer/Footer";
import Header from "../components/common/Header/Header";
import BannerSection from "../components/FitzePro/BannerSection/BannerSection";
import HeroSection from "../components/FitzePro/HeroSection/HeroSection";
import InclusionsSection from "../components/FitzePro/InclusionsSection/InclusionsSection";
import PlanSection from "../components/FitzePro/PlanSection/PlanSection";
import RealStoriesSection from "../components/FitzePro/RealStoriesSection/RealStoriesSection";
import RingPromoSection from "../components/FitzePro/RingPromoSection/RingPromoSection";
import ShowingUpSection from "../components/FitzePro/ShowingUpSection/ShowingUpSection";
import UpgradeCtaSection from "../components/FitzePro/UpgradeCtaSection/UpgradeCtaSection";
import WhyProSection from "../components/FitzePro/WhyProSection/WhyProSection";

export const FitzePro: React.FC = () => {
  return ( 
   <div className="fitzepro-page-wrapper animate-page-transition" id="fitze-pro-page">
    <Header/>
    <HeroSection/>
    <PlanSection/>
    <BannerSection/>
    <InclusionsSection/>
      <ShowingUpSection/>
      <RealStoriesSection/>
      <RingPromoSection/>
      <WhyProSection/>
      <FaqSection/>
      <UpgradeCtaSection/>
    <Footer/>
    </div>
  )
};
 export default FitzePro; 
