import { Logo } from "../../icons/logo.jsx";
import { Button } from "./button.jsx";
export const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center md:px-10 md:py-4 py-4 px-6 z-3">
        <div className="flex items-center md:gap-3 gap-2 z-3">
          <Logo />
          <h1 className="text-[#f9f9f9] font-bold text-lg md:text-2xl cursor-pointer">
            Abhedya
          </h1>
        </div>       
        <div className="flex items-center text-base bg-white rounded-full z-3">
          <div className="flex items-center gap-3 cursor-pointer">
            <Button text="Home" variant="home" size="hxl" />
            <Button text="Leaderboard" variant="home" size="hxl" />
            <Button text="About Us" variant="home" size="hxl" />
            <Button text="Sign Up" variant="home"size="hxl"  />
            
          </div>
        </div>
        <div className="flex flex-row gap-1 z-3">
          <div className="">
              <img className="object-cover invert" src="./instaLogo.png" alt="" />
            </div>
          <div className="">
            <img className="object-cover invert" src="./instaLogo.png" alt="" />
          </div>
          <div className="">
            <img className="object-cover invert" src="./instaLogo.png" alt="" />
          </div>
        </div>
      </nav>
    </header>
  );
};
