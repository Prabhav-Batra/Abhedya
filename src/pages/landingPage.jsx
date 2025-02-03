import { GridBg } from "../component/ui/grid-bg";
import { Navbar } from "../component/ui/navbar";
import { CenterImage } from "../component/ui/centerImage.jsx";
export const LandingPage = () => {
  return (
    <GridBg>
      <Navbar />
      <div className="mt-16 ">
        <CenterImage />
      </div>
    </GridBg>
  );
};
