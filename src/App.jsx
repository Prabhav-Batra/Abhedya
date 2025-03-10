import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Mask from "./component/ui/customCursor.jsx";
import { GridBg } from "./component/ui/grid-bg";
import { Navbar } from "./component/ui/navbar.jsx";
import { LandingPage } from "./pages/landingPage.jsx";
import { SignUp } from "./pages/signUp.jsx";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route element={<GridAndCursorAndNavbarLayout />}>
            <Route path="/" element={<LandingPage />}></Route>
          </Route>

          <Route element={<GridLayout />}>
            <Route path="/signup" element={<SignUp />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

function GridAndCursorAndNavbarLayout() {
  return (
    <>
      <GridBg>
        <Mask />
        <Navbar />
        <Outlet />
      </GridBg>
    </>
  );
}

function GridLayout() {
  return (
    <>
      <GridBg>
        <Outlet />
      </GridBg>
    </>
  );
}

export default App;
