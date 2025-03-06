export const Input = ({ type, placeholder }) => {
  return (
    <input
      className="bg-[#1F2937] text-white outline-0 w-full rounded py-1 px-2 placeholder:text-amber-50"
      type={type}
      placeholder={placeholder}
    />
  );
};
