const variantStyles = {
  main: "bg-[#242C31] md:text-lg text-sm py-1 px-3 text-[#f9f9f9] font-medium rounded border-teal-50/10 border hover:bg-teal-950 cursor-pointer",
};

export const Button = ({ variant, text }) => {
  return <button className={`${variantStyles[variant]}`}>{text}</button>;
};
