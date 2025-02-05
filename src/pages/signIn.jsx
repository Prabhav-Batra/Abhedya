import { Input } from "../component/ui/Input";
import { LinearGradientText } from "../component/ui/linearGradientText";
import { Button } from "../component/ui/button";
export const SignIn = () => {
  return (
    <div className="py-4 px-12 flex justify-center items-center min-h-screen">
      <div className="sm:hidden">
        <img />
      </div>
      <div className="bg-slate-50/20 w-full  rounded-xl py-8 px-10 backdrop-blur-[3px]">
        <LinearGradientText text={"Sign In"} />
        <div className="flex flex-col gap-3 mt-10">
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="password" />
          <Input type="password" placeholder="confirm password" />
        </div>
        <div className="mt-7 flex justify-between items-center">
          <Button
            text={"Sign In"}
            variant={"main"}
            size={"lg"}
            endIcon={true}
          />
          <p className="text-teal-50 text-lg hover:underline ">Sign Up</p>
        </div>
      </div>
    </div>
  );
};
