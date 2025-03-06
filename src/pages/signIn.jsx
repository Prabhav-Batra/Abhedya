import { Input } from "../component/ui/Input";
import { LinearGradientText } from "../component/ui/linearGradientText";
import { Button } from "../component/ui/button";
export const SignIn = () => {
  return (
      <div className="flex justify-center items-center "> 
        {/* <div className="bg-cover absolute top-0 md:left-0  left-29 m-10 h-4 flex justify-center items-center">
          <img src="../public/prodyWhite.webp" alt="logo" className="object-cover h-16"/>
          <h1 className="text-[#f9f9f9] font-bold text-lg md:text-2xl m-3 cursor-pointer">
              Abhedya
            </h1>
        </div>    */}
          
        <div className="bg-slate-50/20 w-3/4 md:w-130 rounded-xl py-8 px-10 backdrop-blur-[3px] md:ml-30 mr-0 sm:mt-[10%] mt-[40%] border-2 border-teal-800">
          <LinearGradientText text={"Sign In"} />
          <div className="flex flex-col gap-3 mt-10">
            <Input type="text" placeholder="Email" />
            <Input type="password" placeholder="Password" />
          </div>
          <div className="mt-7 flex justify-center items-center">
            <Button
              text={"Sign In"}
              variant={"main"}
              size={"fxl"}
            />
          </div>

        {/* <p className="text-[#f9f9f9] text-lg md:text-lg m-3 cursor-pointer opacity-80" >New to Abhedya <p className="text-[#f9f9f9] md:text-lg font-bold underline opacity-100 ">Sign Up</p></p> */}
        <p className="text-[#f9f9f9] text-lg md:text-lg m-3 "><span  className="opacity-50">New to Abhedya </span><span className="opacity-100 underline font-bold cursor-pointer text-teal-500">Sign Up</span></p>
        </div>
        <div className="w-3/4 h-full m-10 hidden md:block ">
          <img className="object-cover absolute bottom-0 right-20 -scale-x-100  md:w-120 md:h-140 "
          src="../../../rb_25585 2.png"/>
        </div>
      </div>
    // </div>  
  );
};