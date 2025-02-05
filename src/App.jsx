import "./App.css";
import { GridBg } from "./component/ui/grid-bg";
import { SignIn } from "./pages/signIn.jsx";
function App() {
  return (
    <GridBg>
      <SignIn />
    </GridBg>
  );
}

export default App;
