import "./App.css";
import { GridBg } from "./component/ui/grid-bg";
import { Home } from "./pages/home";
import { Navbar } from "./component/ui/navbar";
function App() {
  return (
    <GridBg>
      <Navbar/>
      {/* <SignUp /> */}
      <Home/>
    </GridBg>
  );
}

export default App;
