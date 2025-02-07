import { Logo } from "../../icons/logo.jsx";
import { Button } from "./button.jsx";
export const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center md:px-10 md:py-4 py-4 px-6">
        <div className="flex items-center md:gap-3 gap-2 ">
          <Logo />
          <h1 className="text-[#f9f9f9] font-bold text-lg md:text-2xl cursor-pointer">
            Abhedya
          </h1>
        </div>
        <div>
          <div className="flex sm:gap-6 gap-4 items-center text-base">
            <div className="flex items-center gap-3 cursor-pointer">
              <Button text="Home" variant="home" size="hxl" />
              <Button text="Leaderboard" variant="home" size="hxl" />
              <Button text="About Us" variant="home" size="hxl" />
              <Button text="Sign Up" variant="home"size="hxl"  />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
