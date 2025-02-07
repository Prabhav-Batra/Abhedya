import { LinearGradientText } from "../component/ui/linearGradientText";
import { Button } from "../component/ui/button";

export const Home = ()=>{
    return(
        
        <div className=" flex flex-row justify-start items-start ">
            <div className="absolute h-70 w-140 bg-transparent ring-100 -left-28 -top-30 ring-teal-50 z-1 -rotate-40 opacity-70"></div>
            <div className="absolute right-70 z-1 bottom-60 scale-1000 opacity-10">
                <img src="./logo.svg" alt="logo" />
            </div>
            {/* <div className="bg-amber-100"> */}
                
                <div className=" z-2">
                    <img className="object-cover md:h-120 md:w-100 " src="./robo.png" alt="" />
                </div>
            {/* </div> */}
            
            <div className="flex flex-col gap-1 justify-start items-center pt-8 z-2">
                <p className="font-bold text-3xl text-teal-50">PRODYOGIKI'25</p>
                <p className="text-xl text-teal-50">Presents</p>
                <LinearGradientText text={"ABHEDYA 4.0"} variant= "lg" />
                <Button text={"Play Now!"} variant={"play"} size={"dxl"}></Button>
            </div>
            
        </div>
    );
}