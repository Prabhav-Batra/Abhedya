const variantStyles = {
  main: "bg-[#242C31] md:text-lg  text-[#f9f9f9] font-medium rounded border-teal-50/10 border hover:bg-teal-900 cursor-pointer transition-all",
};

const sizeStyles = {
  sm: "py-1 px-2 text-sm",
  md: "py-1 px-3 text-sm",
  lg: "py-1 px-3 text-lg",
  xl: "py-1 px-4 text-xl",
  dxl: "py-2 px-4 text-2xl",
  fxl: "w-full px-[0%] py-1 md:text-2xl xl",
};

export const Button = ({ variant, text, size }) => {
  return (
    <button className={`${variantStyles[variant]} ${sizeStyles[size]}`}>
        {text} 
    </button>
  );
};
