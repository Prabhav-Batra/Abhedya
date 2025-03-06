import "./App.css";
import { GridBg } from "./component/ui/grid-bg";
import { SignIn } from "./pages/signIn.jsx";
import { Navbar } from "./component/ui/navbar.jsx";

function App() {
  return (
    <GridBg>
      <Navbar/>
      <SignIn />
    </GridBg>
  );
}

export default App;
