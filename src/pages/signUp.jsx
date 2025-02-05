import { Input } from "../component/ui/Input";
import { LinearGradientText } from "../component/ui/linearGradientText";
import { Button } from "../component/ui/button";
export const SignUp = () => {
  return (
    <div className="py-4 px-12 flex justify-center items-center min-h-screen">
      <div className="w-3/4 h-full m-10 hidden md:block ">
        <img className="object-cover absolute bottom-0 left-20 md:w-100 md:h-120"
        src="../../../rb_25585 2.png"/>
      </div>
      <div className="bg-slate-50/20 w-1/2 rounded-xl py-8 px-10 backdrop-blur-[3px] mr-30">
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
  );
};
