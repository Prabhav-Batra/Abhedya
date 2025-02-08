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
        <Navbar />
        <LandingPage />
      </GridBg>
    </RecoilRoot>
  );
}

export default App;
