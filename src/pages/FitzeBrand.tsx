import Footer from "../components/common/Footer/Footer";
import Header from "../components/common/Header/Header";
import ActionCtaSection from "../components/FitzeBrand/ActionCtaSection/ActionCtaSection";
import CampaignsSection from "../components/FitzeBrand/CampaignsSection/CampaignsSection";
import CollaborationsSection from "../components/FitzeBrand/CollaborationsSection/CollaborationsSection";
import HeroSection from "../components/FitzeBrand/HeroSection/HeroSection";
import MallRunsSection from "../components/FitzeBrand/MallRunsSection/MallRunsSection";
import PlatformSection from "../components/FitzeBrand/PlatformSection/PlatformSection";
import ProcessSection from "../components/FitzeCorporate/ProcessSection/ProcessSection";
import ProPromoSection from "../components/FitzeBrand/ProPromoSection/ProPromoSection";
import TestimonialsSection from "../components/FitzeBrand/TestimonialsSection/TestimonialsSection";
import FitzeBrandPartner from "../components/FitzeBrand/FitzeBrandPartner/FitzeBrandPartner";
import MallandBrandPartner from "../components/FitzeBrand/MallandBrandPartner /MallandBrandPartner";

export const FitzeBrand: React.FC = () => {
  return (
    <div className="fitzebrand-page-wrapper animate-page-transition" id="fitze-brand-page">
      <Header/>
      <HeroSection/>
      <FitzeBrandPartner/>
      <PlatformSection/>
      <MallRunsSection/>
      <MallandBrandPartner/>
      <ProcessSection/>
      <CampaignsSection/>
      <CollaborationsSection/>
      <ProPromoSection/>
      <TestimonialsSection/>
      <ActionCtaSection/>
      <Footer/>
    </div>
  );
};

export default FitzeBrand;