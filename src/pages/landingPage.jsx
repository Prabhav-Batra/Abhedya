import { CenterImage } from "../component/ui/centerImage.jsx";
import { LinearGradientText } from "../component/ui/linearGradientText.jsx";
export const LandingPage = () => {
  return (
    <>
      <div className="mt-16 flex flex-col gap-2 justify-center items-center md:flex-col-reverse">
        <LinearGradientText text={"ABHEDYA 4.0"} />
        <p className="text-[#f9f9f9] sm:text-base text-xs sm:w-80 w-60 text-center opacity-80 md:mt-2 z-10 ">
          A game you'll remember forever isn't about graphics but the emotions
          it sparks
        </p>
        <CenterImage />
      </div>
    </>
  );
};
