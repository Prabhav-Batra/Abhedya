import { LinearGradientText } from "../component/ui/linearGradientText";
import { Button } from "../component/ui/button";
import { Navbar } from "../component/ui/navbar";
import { About } from "./about";

export const Home = ()=>{
    return(
        <div className="min-h-screen relative overflow-hidden" >
            <Navbar/>
            <div className=" flex flex-row sm:justify-end sm:items-start items-center justify-center mt-[40%] sm:mt-0 ">
                <div className="absolute h-70 w-140 bg-transparent ring-100 -left-20 -top-40 sm:block hidden ring-teal-50 z-1 -rotate-40 opacity-50"></div>
                <div className="absolute sm:right-70 z-1 sm:bottom-60 bottom-[50%] scale-1000 opacity-10">
                    <img src="./logo.svg" alt="logo" />
                </div>                
                    <div className="absolute bottom-0 -left-30 z-2 hidden md:block">
                        <img className="object-cover md:h-0.5vh md:w-[45%] " src="./robo.png" alt="" />
                    </div>

                <div className="flex flex-col gap-1 justify-start items-center md:pt-8 md:z-2 md:mt-30 md:me-10">
                    <p className="font-bold text-3xl text-teal-50">PRODYOGIKI'25</p>
                    <p className="text-xl text-teal-50">Presents</p>
                    <LinearGradientText text={"ABHEDYA 4.0"} variant= "lg" />
                    <Button text={"Play Now!"} variant={"play"} size={"dxl"}></Button>
                </div>              
            </div>
            
        </div>
    );
}