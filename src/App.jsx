import "./App.css";
import { LandingPage } from "./pages/landingPage";
import { Navbar } from "./component/ui/navbar";
import { GridBg } from "./component/ui/grid-bg";
import { RecoilRoot } from "recoil";
import { LoadingAnimation } from "./component/ui/loadingAnimation";
function App() {
  return (
    <RecoilRoot>
      <GridBg>
        <LoadingAnimation />
        <div className="flex flex-col justify-between items-center h-full">
          <div className="w-full">
            <Navbar />
          </div>
          <LandingPage />
        </div>
      </GridBg>
    </RecoilRoot>
  );
}

export default App;
