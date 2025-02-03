import { Button } from "./button";
import { Logo } from "../../icons/logo.jsx";
export const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center py-4 px-6">
        <div className="flex items-center gap-2">
          <Logo />
          <h1 className="text-[#f9f9f9] font-bold text-lg md:text-3xl">
            Abhedya
          </h1>
        </div>
        <div>
          <div className="flex gap-4 items-center text-base">
            <div className="flex items-center gap-2">
              <div className="bg-orange-500 w-2 h-2 rounded-full"></div>
              <p className="text-[#f9f9f9]">Login</p>
            </div>
            <Button text="Sign Up" variant="main" />
          </div>
        </div>
      </nav>
    </header>
  );
};
