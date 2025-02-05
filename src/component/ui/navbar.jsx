import { Button } from "./button";
import { Logo } from "../../icons/logo.jsx";
export const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center md:px-10 md:py-6 py-4 px-6">
        <div className="flex items-center md:gap-4 gap-2 ">
          <Logo />
          <h1 className="text-[#f9f9f9] font-bold text-lg md:text-2xl cursor-pointer">
            Abhedya
          </h1>
        </div>
        <div>
          <div className="flex sm:gap-6 gap-4 items-center text-base">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="bg-orange-500 w-2 h-2 rounded-full"></div>
              <p className="text-[#f9f9f9] sm:text-lg text-base font-medium ">
                Log In
              </p>
            </div>
            <Button text="Sign Up" variant="main" />
          </div>
        </div>
      </nav>
    </header>
  );
};
