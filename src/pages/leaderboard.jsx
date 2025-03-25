import { Badge } from "../component/ui/badge";
import { LinearGradientText } from "../component/ui/linearGradientText";
import { useIsMobileOrTablet } from "../hooks/useIsMobileOrTablet";
import { Fragment } from "react";

export const Leaderboard = () => {
  const isMoblieOrTablet = useIsMobileOrTablet();
  console.log(isMoblieOrTablet);
  const users = [
    { name: "Anurag", position: "01", points: "01" },
    { name: "Anurag", position: "01", points: "01" },
    { name: "Anurag", position: "01", points: "01" },
    { name: "Anurag", position: "01", points: "01" },
    { name: "Anurag", position: "01", points: "01" },
  ];
  return (
    <div className="bg-black/20 lg:mt-[10vw] mt-[25vw] border-3 border-b-0 border-teal-900 md:w-[80vw] w-[90vw] mx-auto backdrop-blur-3xl rounded-t-[4vw] px-[10vw] overflow-hidden pb-[5vw] md:py-0 md:pb-[2vw] py-[2vw]">
      <LinearGradientText
        text={"Leaderboard"}
        size="leaderboard"
        subtitlePreset={false}
      />
      <div className="grid lg:grid-cols-3 grid-cols-2 grid-row-10 place-items-center gap-5 mt-5">
        <h1 className="text-teal-50 font-[poppins] font-bold lg:text-2xl text-lg mb-[1.5vw]">
          Position
        </h1>
        <h1 className="text-teal-50 font-[poppins] font-bold lg:text-2xl text-lg  mb-[1.5vw]">
          Name
        </h1>
        {!isMoblieOrTablet && (
          <h1 className="text-teal-50 font-[poppins] font-bold text-2xl mb-[1.5vw]">
            Points
          </h1>
        )}
        {users.map((e, index) => {
          return (
            <Fragment key={index}>
              <Badge rank={e.position} />
              <p className="text-teal-50 font-[poppins] font-semibold md:text-xl text-md">
                {e.name}
              </p>
              {!isMoblieOrTablet && (
                <p className="text-teal-50 font-[poppins] font-semibold md:text-xl text-md ">
                  {e.points}
                </p>
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
