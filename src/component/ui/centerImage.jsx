import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { customCursorSizeAtom } from "../../store/atom";

export const CenterImage = () => {
  const isMobileOrTablet = window.matchMedia("(max-width: 768px)").matches;
  const [isHover, setIsHover] = useState(false);
  const setCustomCursorSize = useSetRecoilState(customCursorSizeAtom);
  const mouseHandlerEnter = () => {
    setIsHover(true);
    setCustomCursorSize(4000);
  };
  const mouseHandlerLeave = () => {
    setIsHover(false);
    setCustomCursorSize(50);
  };
  return (
    <div className="flex justify-center items-center">
      <div className=" absolute -rotate-3 md:w-[16vw] md:h-[16vw] sm:w-56 sm:h-56 w-44 h-44 rounded-xl bg-[#0E3F3A] border border-teal-100/10"></div>
      <div
        className="relative sm:w-56 md:w-[16vw] md:h-[16vw] sm:h-56 w-44 h-44 rounded-xl bg-gradient-to-br from-[#031615] to-[#115E59] rotate-3 border border-teal-100/20 shadow shadow-teal-950"
        onMouseLeave={mouseHandlerLeave}
        onMouseEnter={mouseHandlerEnter}
      >
        <img
          className={`object-cover absolute bottom-0 md:w-[18vw] md:h-[18vw] sm:w-60 sm:h-60 w-48 h-48 ${isHover && !isMobileOrTablet ? "invert" : ""} `}
          src="../../../public/webImage.webp"
        />
      </div>
    </div>
  );
};
