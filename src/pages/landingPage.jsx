import { CenterImage } from "../component/ui/centerImage.jsx";
import { LinearGradientText } from "../component/ui/linearGradientText.jsx";
import { LoadingAnimation } from "../component/ui/loadingAnimation.jsx";
export const LandingPage = () => {
  return (
    <>
      <LoadingAnimation />
      <div className="flex items-end justify-center md:min-h-screen ">
        <div className="md:mt-0 mt-28 flex flex-col gap-2 justify-center items-center md:flex-col-reverse ">
          <LinearGradientText
            text={"ABHEDYA 4.0"}
            subtitlePreset={true}
            size={"lg"}
          />
          <p className="text-[#f9f9f9] sm:text-base text-xs sm:w-80 w-60 text-center opacity-80 md:mt-2 md:mb-0 mb-8 z-10 ">
            A game you'll remember forever isn't about graphics but the emotions
            it sparks
          </p>
          <CenterImage />
        </div>
      </div>
    </>
  );
};
