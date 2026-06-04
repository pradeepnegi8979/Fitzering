/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */


/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import './styles/global.css';
import './styles/responsive.css';
import Fitzering from "./pages/Fitzering";
import FitzeStreaks from "./pages/FitzeStreaks"
import FitzeCorporate from "./pages/FitzeCorporate";
import FitzePro from "./pages/FitzePro";
import FitzeBrand from "./pages/FitzeBrand";
import TermsConditon from "./pages/TermsCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ring" element={<Fitzering />} />
        <Route path="/streaks" element={<FitzeStreaks />} />
        <Route path="/corporates" element={<FitzeCorporate />} />
        <Route path="/pro" element={<FitzePro />} />
        <Route path="/brand" element={<FitzeBrand/>} />
        <Route path="/term-and-condition" element={<TermsConditon/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
      </Routes>
  </BrowserRouter>
</HelmetProvider>

  );
}
export default App;