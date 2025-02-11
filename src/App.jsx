import "./App.css";
import { GridBg } from "./components/gridbg";
import {GamePage} from "./pages/gamepage";
import { Navbar } from "./components/navbar";
function App() {
  return (
    <GridBg>
      <GamePage/>
      
    </GridBg>
  );
}

export default App;