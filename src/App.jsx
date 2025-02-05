import "./App.css";
import { GridBg } from "./component/ui/grid-bg";
import { SignIn } from "./pages/SignIn";
function App() {
  return (
    <GridBg>
      <SignIn />
    </GridBg>
  );
}

export default App;
