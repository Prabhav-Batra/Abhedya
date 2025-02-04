import "./App.css";
import { LandingPage } from "./pages/landingPage";
import { Navbar } from "./component/ui/navbar";
import { GridBg } from "./component/ui/grid-bg";
function App() {
  return (
    <GridBg>
      <Navbar />
      <LandingPage />
    </GridBg>
  );
}

export default App;
