export const Input = ({ type, placeholder }) => {
    return (
      <input
        className="bg-teal-950 outline-0 w-full rounded py-1 px-2 placeholder:text-teal-200"
        type={type}
        placeholder={placeholder}
      />
    );
  };
  