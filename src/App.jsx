import "./App.css";
import { GridBg } from "./component/ui/grid-bg";
import { Home } from "./pages/home";
import { About } from "./pages/about";

function App() {
  return (
    <GridBg>
      <Home/>
      <About/>
    </GridBg>
  );
}

export default App;
