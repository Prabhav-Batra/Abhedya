import { Input } from "../component/ui/Input";
import { LinearGradientText } from "../component/ui/linearGradientText";
import { Button } from "../component/ui/button";
export const SignUp = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex lg:w-1/2 justify-center items-center min-h-screen p-5">
        <div className="bg-slate-600/20 lg:w-1/2 rounded-xl py-8 px-12 backdrop-blur-[3px] border-2 border-teal-800 h-fit">
          <LinearGradientText
            text={"Sign Up"}
            subtitlePreset={false}
            size={"md"}
          />
          <div className="flex flex-col gap-5 mt-10">
            <Input type="text" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Confirm Password" />
          </div>
          <div className="mt-8 flex justify-between items-center">
            <Button
              text={"Sign Up"}
              variant={"blackBg"}
              size={"lg"}
              animation={true}
            />
            <p className="text-teal-50 font-medium md:text-xl text-lg hover:underline whitespace-nowrap ">
              Sign In
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 min-h-screen hidden lg:flex justify-end items-end ">
        <img
          className="object-bottom object-cover h-[35vw] rotate-y-180 "
          src="../../public/webImage.webp"
        />
      </div>
    </div>
  );
};
