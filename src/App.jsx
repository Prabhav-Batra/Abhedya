import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
import Mask from "./component/ui/customCursor";
import { GridBg } from "./component/ui/grid-bg";
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
      <BrowserRouter>
        <Routes>
          <Route element={<GridBgLayoutAndNavbar />}>
            <Route path="/home" element={<UpdatedHomePage />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/*" element={<Error404Page></Error404Page>} />
          </Route>
          <Route path="/gamepage" element={<Gameandblob />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

function GridBgLayoutAndNavbar() {
  return (
    <GridBg>
      <Navbar />
      <Mask />
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
