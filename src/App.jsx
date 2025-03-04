import "./App.css";
import { GridBg } from "./components/gridbg";
import {GamePage} from "./pages/gamepage";
import { Navbar } from "./components/navbar";
import FloatingBlobs from "./components/FloatingBlobs";
function App() {
  return (
    <GridBg>
      <FloatingBlobs/>
      <GamePage/>
    </GridBg>
  );
}

export default App;