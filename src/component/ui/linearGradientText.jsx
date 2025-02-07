const variantStyles ={
  main : "font-extrabold font-[poppins] text-6xl text-center bg-clip-text text-transparent bg-[linear-gradient(to_bottom,#ffffff_10%,#76807F_70%,#515C5C_79%,#1e1e1e_100%)] pb-2",
  lg : "mt-7 mb-15 overflow-hidden  font-[poppins] tracking-tighter text-6xl sm:text-[10vw] font-extrabold text-transparent bg-clip-text bg-[linear-gradient(to_bottom,#ffffff_5%,#76807F_60%,#515C5C_69%,#1e1e1e_90%)]",
};

export const LinearGradientText = ({variant,text }) => {
  return (
    <h1 className={`${variantStyles[variant]}`}>
      {text}
    </h1>
  );
};
