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
const variantStyles ={
  main : "font-extrabold font-[poppins] text-6xl text-center bg-clip-text text-transparent bg-[linear-gradient(to_bottom,#ffffff_10%,#76807F_70%,#515C5C_79%,#1e1e1e_100%)] pb-2",
  lg : "mt-7 mb-15 overflow-hidden font-[1000] font-[poppins] tracking-tighter text-6xl sm:text-[12vw] text-transparent bg-clip-text bg-[linear-gradient(to_bottom,#ffffff_5%,#76807F_60%,#515C5C_69%,#1e1e1e_90%)]",
  sm: "font-[1000] font-[poppins] tracking-tighter sm:text-[6vw] text-[5vh] text-transparent bg-clip-text bg-[linear-gradient(to_bottom,#ffffff_5%,#76807F_60%,#515C5C_69%,#1e1e1e_90%)]",
};

export const LinearGradientText = ({variant,text }) => {
  return (
    <h1 className={`${variantStyles[variant]}`}>
      {text}
    </h1>
  );
};
