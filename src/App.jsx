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
import { HomeWithAboutLayout } from "./pages/homewithabout";
import { LandingPage } from "./pages/landingPage";
import { SignIn } from "./pages/signin";
import { SignUp } from "./pages/signUp";

function App() {
  return (
    <RecoilRoot>
      <GridBg>
        <LoadingAnimation />

        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomeWithAboutLayout />} />
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

function NavbarLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
