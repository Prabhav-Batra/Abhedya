import "./App.css";
import { LandingPage } from "./pages/landingPage";
import { HomeWithAboutLayout } from "./pages/homewithabout";
import { Gameandblob } from "./pages/gamepageandblob";
import { GridBg } from "./component/ui/grid-bg";
import { RecoilRoot } from "recoil";
import { LoadingAnimation } from "./component/ui/loadingAnimation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <RecoilRoot>
      <GridBg>
        <LoadingAnimation />
        
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/home" element={<HomeWithAboutLayout />} />
              <Route path="/gamepage" element={<Gameandblob />} />
            </Routes>
          </Router>
        
      </GridBg>
    </RecoilRoot>
  );
}

export default App;
