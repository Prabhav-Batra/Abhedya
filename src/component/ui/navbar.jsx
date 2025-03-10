import { Logo } from "../../icons/logo.jsx";
import { Button } from "./button";
export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full">
      <nav className="flex justify-between items-center md:px-10 md:py-6 py-4 px-6">
        <div className="flex items-center md:gap-3 gap-2 ">
          <Logo />
          <h1 className="text-[#f9f9f9] font-bold text-lg md:text-2xl cursor-pointer">
            Abhedya
          </h1>
        </div>
        <div className="flex sm:gap-6 gap-4 items-center text-base">
          <div className="flex items-center md:gap-5 gap-3 cursor-pointer">
            <Button text="Log In" variant="main" animation={true} size={"sm"} />
            <Button
              text="Sign Up"
              variant="blackBg"
              animation={true}
              size={"sm"}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};
