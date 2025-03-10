import "./App.css";
import { LandingPage } from "./pages/landingPage";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Navbar } from "./component/ui/navbar";
import { HomeWithAboutLayout } from "./pages/homewithabout";
import { GridBg } from "./component/ui/grid-bg";
import { RecoilRoot } from "recoil";
import { LoadingAnimation } from "./component/ui/loadingAnimation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <RecoilRoot>
      <GridBg>
        <LoadingAnimation />
        <div className="flex flex-col justify-between items-center lg:min-h-screen">
          <div className="w-full">
            
          </div>
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/home" element={<HomeWithAboutLayout />} />
            </Routes>
          </Router>
        </div>
      </GridBg>
    </RecoilRoot>
  );
}

export default App;
