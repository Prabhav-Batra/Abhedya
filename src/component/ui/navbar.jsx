import { Logo } from "../../icons/logo.jsx";
import { CrossIcon } from "../../icons/cross.jsx";
import { PlusIcon } from "../../icons/plus.jsx";
import { useState } from "react";
import { useIsMobileOrTablet } from "../../hooks/useIsMobileOrTablet.js";
import { Button } from "../ui/button.jsx";

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isMobileOrTablet = useIsMobileOrTablet();

  return (
    <header className="py-5 px-5 relative ">
      <nav className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Logo />
          <h1 className="text-white font-bold text-lg md:text-2xl cursor-pointer">
            Abhedya
          </h1>
        </div>

        {/* Navigation Links */}
        <div
          className={`fixed inset-0 md:bg-transparent bg-teal-900  text-white flex flex-col items-center justify-center gap-6 transition-transform duration-500 ease-in-out md:static md:flex md:flex-row md:gap-6 
${
  isNavOpen && isMobileOrTablet
    ? "translate-y-0"
    : "-translate-y-full md:translate-y-0"
}`}
        >
          {/* Close Button (Only for mobile) */}
          {isMobileOrTablet && (
            <div
              className="absolute top-5 right-5 cursor-pointer md:hidden"
              onClick={() => setIsNavOpen(false)}
            >
              <CrossIcon />
            </div>
          )}
          <Button text={"Home"} animation={true} size={"sm"} />
          <Button text={"Leaderboard"} animation={true} size={"sm"} />
          <Button
            text={"Sign Up"}
            animation={true}
            size={"sm"}
            variant="main"
          />
          <Button
            text={"Sign Out"}
            animation={true}
            size={"sm"}
            variant="blackBg"
          />
        </div>

        {/* Open Menu Icon (Only for mobile) */}
        {isMobileOrTablet && !isNavOpen && (
          <div
            className="cursor-pointer text-white md:hidden"
            onClick={() => setIsNavOpen(true)}
          >
            <PlusIcon />
          </div>
        )}
      </nav>
    </header>
  );
};
