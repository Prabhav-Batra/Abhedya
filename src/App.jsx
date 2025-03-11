import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
import { GridBg } from "./component/ui/grid-bg";
import { LoadingAnimation } from "./component/ui/loadingAnimation";
import { Navbar } from "./component/ui/navbar";
import { Error404Page } from "./pages/error404";
import { Gameandblob } from "./pages/gamepageandblob";
import { LandingPage } from "./pages/landingPage";
import { SignIn } from "./pages/signin";
import { SignUp } from "./pages/signUp";
import { UpdatedHomePage } from "./pages/updatedHome";

function App() {
  return (
    <RecoilRoot>
      <GridBg>
        <LoadingAnimation />

        <Router>
          <Routes>
            <Route element={<GridBgLayoutAndNavbar />}>
              <Route path="/home" element={<UpdatedHomePage />} />
              <Route path="/" element={<LandingPage />} />
            </Route>
            <Route path="/gamepage" element={<Gameandblob />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route element={<NavbarLayout />}>
              <Route path="/*" element={<Error404Page></Error404Page>} />
            </Route>
          </Routes>
        </Router>
      </GridBg>
    </RecoilRoot>
  );
}

function GridBgLayoutAndNavbar() {
  return (
    <GridBg>
      <Navbar />
      <Outlet />
    </GridBg>
  );
}

function NavbarLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
