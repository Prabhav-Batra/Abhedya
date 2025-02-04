import { GridBg } from "../component/ui/grid-bg";
import { Navbar } from "../component/ui/navbar";
import { CenterImage } from "../component/ui/centerImage.jsx";
import { LinearGradientText } from "../component/ui/linearGradientText.jsx";
export const LandingPage = () => {
  return (
    <GridBg>
      <Navbar />
      <div className="mt-16 flex flex-col gap-2 justify-center items-center md:flex-col-reverse">
        <LinearGradientText text={"ABHEDYA 4.0"} />
        <p className="text-[#f9f9f9] text-xs w-60 text-center opacity-80 ">
          A game you'll remember forever isn't about graphics but the emotions
          it sparks
        </p>
        <div className="mt-8">
          <CenterImage />
        </div>
      </div>
    </GridBg>
  );
};
