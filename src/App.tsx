/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */


/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import './styles/global.css';
import './styles/responsive.css';
import Fitzering from "./pages/Fitzering";
import FitzeStreaks from "./pages/FitzeStreaks"
import FitzeCorporate from "./pages/FitzeCorporate";
import FitzePro from "./pages/FitzePro";
import FitzeBrand from "./pages/FitzeBrand";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fitzering" element={<Fitzering />} />
        <Route path="/fitzestreaks" element={<FitzeStreaks />} />
        <Route path="/fitzecorporate" element={<FitzeCorporate />} />
        <Route path="/fitzepro" element={<FitzePro />} />
        <Route path="/fitzebrand" element={<FitzeBrand/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;