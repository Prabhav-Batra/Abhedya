import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Mask from "./component/ui/customCursor";
import { Footer } from "./component/ui/footer";
import { GridBg } from "./component/ui/grid-bg";
import { Navbar } from "./component/ui/navbar";
import { Error404Page } from "./pages/error404";
import { Gameandblob } from "./pages/gamepageandblob";
import { LandingPage } from "./pages/landingPage";
import { Leaderboard } from "./pages/leaderboard";
import { SignIn } from "./pages/signin";
import { SignUp } from "./pages/signUp";
import { UpdatedHomePage } from "./pages/updatedHome";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route element={<GridBgLayoutAndNavbar />}>
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/home" element={<UpdatedHomePage />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/*" element={<Error404Page></Error404Page>} />
          </Route>
          <Route element={<NavbarLayout />}>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Route>
          <Route element={<GridWithoutSpotLightAndCustomCursor />}>
            <Route path="/gamepage" element={<Gameandblob />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

function GridBgLayoutAndNavbar() {
  return (
    <>
      <GridBg>
        <Mask />
        <Navbar
          navItems={["Home", "Leaderboard", "Sign Up", "Sign In", "Game Page"]}
        />
        <Outlet />
      </GridBg>
      <Footer />
    </>
  );
}

function GridWithoutSpotLightAndCustomCursor() {
  return (
    <GridBg leftLight={true} rightLight={true}>
      <Navbar
        navItems={["Home", "Leaderboard", "Sign Up", "Sign In", "Game Page"]}
      />
      <Outlet />
    </GridBg>
  );
}

function NavbarLayout() {
  return (
    <>
      <GridBg leftLight={true} rightLight={true}>
        <Navbar
          navItems={["Home", "Leaderboard", "Sign Up", "Sign In", "Game Page"]}
        />
        <Outlet />
      </GridBg>
      <Footer />
    </>
  );
}

export default App;
