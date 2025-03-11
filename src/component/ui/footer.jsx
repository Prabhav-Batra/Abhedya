import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#e0e0e0] flex md:flex-row flex-col justify-between gap-5 md:px-10 px-5 py-10 z-10 ">
      <div>
        <div className="md:mb-4 mb-2 flex gap-2 items-center">
          <img
            className="md:h-[2.25vw] h-8"
            src="../../../public/image 1-2.png"
          />
          <h1 className="font-[poppins] font-semibold text-[#1e1e1e] lg:text-[1.5vw] text-lg">
            ISTE
          </h1>
        </div>
        <p className="font-[poppins] font-semibold text-[#1e1e1e] lg:text-[1.25vw] text-base">
          hello@gmail.com
        </p>
        <p className="font-[poppins] font-semibold text-[#1e1e1e] lg:text-[1.25vw] text-base">
          +91 999999999
        </p>
      </div>
      <div className="flex md:flex-row flex-col lg:gap-[8vw] md:gap-16 gap-3">
        <div>
          <h1 className="font-[poppins] font-semibold md:mb-4 mb-2 text-[#1e1e1e] lg:text-[1.25vw] text-base">
            Pages
          </h1>
          <div>
            <div
              className="text-[#1e1e1e] lg:text-[1.15vw] text-base cursor-pointer"
              onClick={() => {
                navigate("/home");
              }}
            >
              Home
            </div>
            <div
              className="text-[#1e1e1e] lg:text-[1.15vw] text-base cursor-pointer"
              onClick={() => {
                navigate("/leaderboard");
              }}
            >
              Leaderboard
            </div>
            <div
              className="text-[#1e1e1e] lg:text-[1.15vw] text-base cursor-pointer"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign Up
            </div>
            <div
              className="text-[#1e1e1e] lg:text-[1.15vw] text-base cursor-pointer"
              onClick={() => {
                navigate("/signin");
              }}
            >
              Sign In
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-[poppins] font-semibold md:mb-4 mb-2 text-[#1e1e1e] lg:text-[1.25vw] text-base">
            Socials
          </h1>
          <div>
            <div
              className="text-[#1e1e1e] lg:text-[1.15vw] text-base cursor-pointer"
              onClick={() => {
                window.open("https://www.instagram.com/teamistenith/?hl=en");
              }}
            >
              Instagram
            </div>
            <div
              className="text-[#1e1e1e] lg:text-[1.15vw] text-base cursor-pointer"
              onClick={() => {
                window.open("https://x.com/istenith?lang=en");
              }}
            >
              Twitter
            </div>
            <div
              className="text-[#1e1e1e] lg:text-[1.15vw] text-base cursor-pointer"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/company/iste-nith?originalSubdomain=in",
                );
              }}
            >
              LinkedIn
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
