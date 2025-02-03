export const GridBg = ({ children }) => {
  return (
    <div className="bg-[size:40px_40px] bg-[image:linear-gradient(to_right,#3c3c3c_2px,transparent_2px),linear-gradient(to_bottom,#3c3c3c_2px,#111_1px)] bg-repeat min-h-screen w-full ">
      {children}
    </div>
  );
};
