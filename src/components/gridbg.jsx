export const GridBg = ({ children }) => {
    return (
      <div className="relative bg-[size:20px_20px] bg-[image:linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#1c1c1c_1px,#000000_0.5px)]  min-h-screen w-full overflow-x-hidden ">

        {children}
      </div>
    );
  };