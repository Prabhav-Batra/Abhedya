import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useIsMobileOrTablet } from "../../hooks/useIsMobileOrTablet.js";
import { CrossIcon } from "../../icons/cross.jsx";
import { Logo } from "../../icons/logo.jsx";
import { PlusIcon } from "../../icons/plus.jsx";
import { isNavOpenAtom } from "../../store/atom.js";
import { Button } from "../ui/button.jsx";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useRecoilState(isNavOpenAtom);
  const isMobileOrTablet = useIsMobileOrTablet();

  return (
    <header className="py-5 px-5 fixed w-full z-30">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Logo />
          <h1 className="text-white font-bold text-lg md:text-2xl cursor-pointer">
            Abhedya
          </h1>
        </div>

        <div
          className={`fixed z-30 inset-0 md:bg-transparent bg-teal-900 text-white flex flex-col items-center justify-center gap-6 transition-transform duration-500 ease-in-out 
          md:static md:flex md:flex-row md:gap-6 ${isNavOpen && isMobileOrTablet ? "translate-y-0" : "-translate-y-full md:translate-y-0"}`}
        >
          {isMobileOrTablet && (
            <div
              className="absolute top-5 right-5 cursor-pointer md:hidden"
              onClick={() => setIsNavOpen(false)}
            >
              <CrossIcon />
            </div>
          )}
          <Button
            text={"Home"}
            animation={true}
            size={"nav"}
            variant="transparent"
            onClickHandler={() => {
              navigate("/home");
              setIsNavOpen(false);
            }}
          />
          <Button
            text={"Leaderboard"}
            animation={true}
            size={"nav"}
            variant="transparent"
            onClickHandler={() => {
              navigate("/leaderboard");
              setIsNavOpen(false);
            }}
          />
          <Button
            text={"Sign Up"}
            animation={true}
            size={"nav"}
            variant="transparent"
            onClickHandler={() => {
              navigate("/signup");
              setIsNavOpen(false);
            }}
          />
          <Button
            text={"Sign Out"}
            animation={true}
            size={"nav"}
            variant="transparent"
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
