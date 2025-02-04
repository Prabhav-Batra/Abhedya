export const LinearGradientText = ({ text }) => {
  return (
    <div className=" flex flex-col text-white ">
      <p className="font-[Poppins] text-sm font-light ml-5 tracking-tight">
        <span className="italic">ISTE</span> Presents
      </p>
      <h1 className="font-[poppins] tracking-tighter text-6xl font-extrabold text-transparent bg-clip-text bg-[linear-gradient(to_bottom,#ffffff_5%,#76807F_60%,#515C5C_69%,#0D3230_100%)]">
        {text}
      </h1>
    </div>
  );
};
