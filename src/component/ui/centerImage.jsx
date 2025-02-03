export const CenterImage = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="absolute -rotate-4 w-44 h-44 rounded-xl bg-[#0E3F3A]"></div>
      <div className="relative w-44 h-44 rounded-xl bg-gradient-to-br from-[#031615] to-[#115E59] rotate-2">
        <img
          className="object-cover absolute bottom-0 w-48 h-48 "
          src="../../../public/rb_25585 2.png"
        />
      </div>
    </div>
  );
};
