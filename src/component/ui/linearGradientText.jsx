import { useRef } from "react";

export const LinearGradientText = ({ text }) => {
  const titleRef = useRef();
  return (
    <div className="overflow-hidden">
      <div
        ref={titleRef}
        className=" flex flex-col text-white sm:mt-5 overflow-hidden "
      >
        <p className="font-[Poppins]  sm:text-lg text-sm font-light md:ml-12 sm:ml-10 ml-5 tracking-tight sm:-mb-5">
          <span>ISTE</span> Presents
        </p>
        <div>
          <h1 className="overflow-hidden  font-[poppins] tracking-tighter text-6xl sm:text-[15vw] font-extrabold text-transparent bg-clip-text bg-[linear-gradient(to_bottom,#ffffff_5%,#76807F_60%,#515C5C_69%,#1e1e1e_90%)]">
            {text}
          </h1>
        </div>
      </div>
    </div>
  );
};
