import { UpRightArrow } from "../../icons/up-rightArrow.jsx";

const variantStyles = {
  main: "bg-[#242C31] md:text-lg  text-[#f9f9f9] font-medium rounded border-teal-50/10 border hover:bg-teal-900 cursor-pointer transition-all",
};

const sizeStyles = {
  sm: "py-1 px-2 text-sm",
  md: "py-1 px-3 text-sm",
  lg: "py-1 px-3 text-lg",
};

export const Button = ({ variant, text, size, endIcon }) => {
  return (
    <Button className={${variantStyles[variant]} ${sizeStyles[size]}}>
      <div className="flex gap-2 items-center">
        {text} {endIcon && <UpRightArrow />}
      </div>
    </Button>
  );
};

