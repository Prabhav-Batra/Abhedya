export const GridBg = ({ children }) => {
  return (
    <div className="bg-[size:40px_40px] bg-[image:linear-gradient(to_right,#2c2c2c_2px,transparent_2px),linear-gradient(to_bottom,#2c2c2c_2px,#0c0c0c_1px)] bg-repeat min-h-screen w-full ">
      {children}
    </div>
  );
};
