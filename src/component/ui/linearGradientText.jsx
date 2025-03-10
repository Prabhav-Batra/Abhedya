import { useRef } from "react";

const sizeStyles = {
  lg: " text-6xl sm:text-[15vw]  ",
  md: "text-6xl text-center pb-2",
};

const defaultStyles =
  "overflow-hidden font-[poppins] tracking-tighter text-transparent bg-clip-text bg-[linear-gradient(to_bottom,#ffffff_5%,#76807F_60%,#515C5C_69%,#1e1e1e_90%)] font-extrabold";

export const LinearGradientText = ({ text, subtitlePreset, size }) => {
  const titleRef = useRef();
  return (
    <div className="overflow-hidden">
      <div
        ref={titleRef}
        className=" flex flex-col text-white sm:mt-5 overflow-hidden "
      >
        {subtitlePreset && (
          <p className="font-[Poppins]  sm:text-lg text-sm font-light md:ml-12 sm:ml-10 ml-5 tracking-tight sm:-mb-5">
            <span>ISTE</span> Presents
          </p>
        )}
        <div>
          <h1 className={`${defaultStyles} ${sizeStyles[size]}`}>{text}</h1>
        </div>
      </div>
    </div>
  );
};
