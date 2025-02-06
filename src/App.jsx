import "./App.css";
import { LandingPage } from "./pages/landingPage";
import { Navbar } from "./component/ui/navbar";
import { GridBg } from "./component/ui/grid-bg";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <RecoilRoot>
      <GridBg>
        <Navbar />
        <LandingPage />
      </GridBg>
    </RecoilRoot>
  );
}

export default App;
