import { UpRightArrow } from "../../icons/up-rightArrow.jsx";

const variantStyles = {
  main: "bg-[#242C31] md:text-lg  text-[#f9f9f9] font-medium rounded border-teal-50/10 border hover:bg-teal-900 cursor-pointer transition-all",
  home: " md:text-lg  text-[#f9f9f9] font-medium  hover:bg-teal-900 cursor-pointer transition-all",
  play : "bg-transparent md:text-4xl py-2 text-teal-50 ring-2 ring-blue-500  shadow-lg shadow-cyan-500/50 font-bold rounded-full"
};

const sizeStyles = {
  sm: "py-1 px-2 text-sm",
  md: "py-1 px-3 text-sm",
  lg: "py-1 px-3 text-lg",
  xl: "py-1 px-4 text-xl",
  dxl: "py-2 px-4 text-2xl",
  hxl: "py-1 px-4 text-xl"
};

export const Button = ({ variant, text, size, endIcon }) => {
  return (
    <button className={`${variantStyles[variant]} ${sizeStyles[size]}`}>
      
        {text} 
      
    </button>
  );
};
