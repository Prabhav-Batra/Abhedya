import { Input } from "../component/ui/Input";
import { LinearGradientText } from "../component/ui/linearGradientText";
import { Button } from "../component/ui/button";
export const SignUp = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen">
        <div className="bg-cover absolute top-0 md:left-[40%] left-29 m-10 h-4 flex justify-center items-center">
          <img src="../public/prodyWhite.webp" alt="logo" className="object-cover h-16"/>
          <h1 className="text-[#f9f9f9] font-bold text-lg md:text-2xl m-3 cursor-pointer">
              Abhedya
            </h1>
        </div> 
    <div className="md:py-4 md:px-12 flex justify-center items-center min-h-screen">
      <div className="w-3/4 h-full m-10 hidden md:block ">
        <img className="object-cover absolute bottom-0 left-20 md:w-100 md:h-110 "
        src="../../../rb_25585 2.png"/>
      </div>
      <div className="bg-slate-50/20 w-3/4 md:w-130 rounded-xl py-8 px-10 backdrop-blur-[3px] md:mr-30 mr-0">
        <LinearGradientText text={"Sign Up"} />
        <div className="flex flex-col gap-3 mt-10">
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
        </div>
        <div className="mt-7 flex justify-between items-center">
          <Button
            text={"Sign Up"}
            variant={"main"}
            size={"lg"}
            endIcon={true}
          />
          <p className="text-teal-50 text-lg hover:underline ">Log In</p>
        </div>
      </div>
    </div>
    </div>
  );
};
