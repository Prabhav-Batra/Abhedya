export const LinearGradientText = ({ text }) => {
  return (
    <h1 className="font-extrabold font-[poppins] text-6xl text-center bg-clip-text text-transparent bg-[linear-gradient(to_bottom,#ffffff_5%,#76807F_50%,#515C5C_100%,#1e1e1e_100%)] pb-2">
      {text}
    </h1>
  );
};
