import { LinearGradientText } from "../component/ui/linearGradientText";
import { Button } from "../component/ui/button";

export const About =()=>{
    return(
        <div className="min-h-screen overflow-hidden relative pt-15 px-5 py-5 flex flex-col sm:items-start items-center ">
            <div className="flex flex-col justify-end md:items-start items-center">
                <div className="flex flex-row gap-4">
                    <h1 className="text-white text-4xl font-[600] md:pt-6 pt-3"> What is </h1>
                    <LinearGradientText text={"ABHEDYA?"} variant= "sm" />
                </div>
                
                <div className="h-auto sm:w-1/2 w-full mt-10">
                    <p className="text-3xl text-white ">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Necessitatibus a velit pariatur aliquid,ea similique vel voluptas tempora explicabo, corporis
                      molestiae minus aspernatur, obcaecati provident impedit deleniti distinctio placeat alias?</p>
                    <div className="mt-10 px-[14%] md:px-[0]">
                    <LinearGradientText text={"ABHEDYA'25"} variant={"sm"}/>
                    </div>
                </div>
                
            </div>
            <div className="flex flex-row flex-wrap w-3/4 ">
                <div className="flex flex-row gap-8 justify-between items-center w-auto h-auto py-5 px-3 rounded-2xl ring-1 ring-amber-50 m-5">
                    <div>
                        <img className="invert" src="./instaLogo.png" alt="" />
                    </div>
                    <div>
                        <h1 className="text-white text-4xl font-[600]">1000+</h1>
                        <h2 className="text-white text-xl">Students Participated</h2>
                    </div>
                </div>
                <div className="flex flex-row gap-8 justify-between items-center w-auto h-auto py-7 px-7 rounded-2xl ring-1 ring-amber-50 m-5">
                    <div>
                        <img className="invert" src="./instaLogo.png" alt="" />
                    </div>
                    <div>
                        <h1 className="text-white text-4xl font-[600]">1000+</h1>
                        <h2 className="text-white text-xl">Students Participated</h2>
                    </div>
                </div>
            </div>
            <img className="object-cover md:h-12/13 md:w-[45%] absolute md:block hidden -bottom-5 -right-20 -scale-x-100 " src="./robo.png" alt="" />
        </div>
    )
}