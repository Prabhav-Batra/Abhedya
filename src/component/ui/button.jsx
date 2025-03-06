import { UpRightArrow } from "../../icons/up-rightArrow.jsx";

const variantStyles = {
  main: "bg-[#242C31] md:text-lg  text-[#f9f9f9] font-medium rounded border-teal-50/10 border hover:bg-teal-900 cursor-pointer transition-all",
  home: "  md:text-lg  text-[#00000] font-medium cursor-pointer transition ease-in-out duration-700 hover:underline underline-offset-4",
  play : "bg-transparent md:text-4xl text-teal-50 ring-2 ring-teal-700 p-2 transition ease-in-out hover:shadow-xl hover:shadow-cyan-500/50 font-bold hover:bg-green-800 hover:scale-105 rounded-full duration-500"
};

const sizeStyles = {
  sm: "py-1 px-2 text-sm ",
  md: "py-1 px-3 text-sm",
  lg: "py-1 px-3 text-lg",
  xl: "py-1 px-4 text-xl",
  dxl: "px-4 text-2xl",
  hxl: "py-1 px-4 text-xl"
};

export const Button = ({ variant, text, size, endIcon }) => {
  return (
    <button className={`${variantStyles[variant]} ${sizeStyles[size]}`}>    
        {text} 
    </button>
  );
};
