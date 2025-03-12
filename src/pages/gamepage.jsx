import React from "react";
import { HelpCircle, CircleUserRound, LogOutIcon } from "lucide-react";
import FloatingBlobs from "../components/FloatingBlobs";
import { Navbar } from "../component/ui/navbar";

export const GamePage = () => {
  return (
    <div className="relative min-h-screen bg-transparent text-[rgba(0,170,190,1)] flex flex-col backdrop-blur-[1px] items-center justify-center p-6 ">
      {/* Navbar at the very top */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/*pushing the elements down from the navbar*/}
      <div className="w-full pt-[80px] flex flex-col items-center">

      {/* Floating Blobs Component */}
      <div className="relative z-0">
        <FloatingBlobs />
      </div>
      
      {/* Header */}
      <div className="mt-10 absolute top-[48px] flex w-[calc(100%-64px)] gap-[34.2px] justify-between mx-[128px] lg:flex-nowrap">
        <div className="w-full lg:w-[297.14px] h-[72px] flex items-center bg-black rounded-2xl border-[1.25px] border-[rgba(0,191,163,1)]/60 p-2 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50">
          <div className="flex items-center gap-2 text-cyan-400 text-lg font-semibold p-4">
          <HelpCircle className="w-8 h-8 md:w-10 md:h-10" />
          <span className="text-lg md:text-2xl">Question: 01</span>
        </div>
        
        </div>
        
        <div className="hidden lg:flex w-[641.31px] h-[72px] items-center justify-center bg-black rounded-2xl border-[1.25px] border-[rgba(0,191,163,1)]/60 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50">
        </div>
        
        <div className="w-full lg:w-[297.14px] h-[72px] flex items-center bg-black rounded-2xl border-[1.25px] border-[rgba(0,191,163,1)]/60 p-2 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50">
          <CircleUserRound className="text-cyan-400 w-5.5 h-5.5 md:w-10 md:h-10 mr-1 md:mr-2" />
          <div className="flex flex-col ml-[10px] w-full">
            <span className="block text-[10px] md:text-base">Hi there,</span>
            <span className="text-[10px] md:text-xl font-bold overflow-clip">Shardul Sharma</span>
          </div>
        </div>
      </div>
      
      {/* Questions Section */}
      <div className="mt-8 absolute top-[160px] w-[calc(100%-64px)] mx-[128px] rounded-2xl border-[1.25px] border-[rgba(0,191,163,1)]/60 shadow-md transition-all duration-300 hover:scale-101 hover:shadow-cyan-500/50 p-6 bg-black"
        style={{ minHeight: "calc(100vh - 120px)", height: "auto", maxHeight: "calc(100vh - 100px)" }}> {/* Adjusted height */}
        

        
{/* Content Section - Question + Image */}
<div className="flex flex-col lg:flex-row w-full h-[400px] ">
  
  {/* Wrapper to Enable Scrolling for Mobile */}
  <div className="w-full flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden max-h-[100vh] h-[80vh]">
    
    {/* Left Side - Question Text */}
    <div className="w-full lg:w-1/2 text-left lg:overflow-y-auto p-4 ">
      <p className="text-[2.1vw] md:text-base text-gray-300">
        Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy bear, a green dinosaur, and a purple kite. One day, Sam opens the toy box and finds that one toy is missing!...   Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy bear, a green dinosaur, and a purple kite. One day, Sam opens the toy box and finds that one toy is missing!... 
        Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy bear, a green dinosaur, and a purple kite. One day, Sam opens the toy box and finds that one toy is missing!...   Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy bear, a green dinosaur, and a purple kite. One day, Sam opens the toy box and finds that one toy is missing!... 
        Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy bear, a green dinosaur, and a purple kite. One day, Sam opens the toy box and finds that one toy is missing!...   Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy bear, a green dinosaur, and a purple kite. One day, Sam opens the toy box and finds that one toy is missing!... 
        Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy bear, a green dinosaur, and a purple kite. One day, Sam opens the toy box and finds that one toy is missing!...   Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy bear, a green dinosaur, and a purple kite. One day, Sam opens the toy box and finds that one toy is missing!... 
        Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy bear, a green dinosaur, and a purple kite. One day, Sam opens the toy box and finds that one toy is missing!...   Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy bear, a green dinosaur, and a purple kite. One day, Sam opens the toy box and finds that one toy is missing!... 
        Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy bear, a green dinosaur, and a purple kite. One day, Sam opens the toy box and finds that one toy is missing!...   Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy bear, a green dinosaur, and a purple kite. One day, Sam opens the toy box and finds that one toy is missing!... 
        Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy bear, a green dinosaur, and a purple kite. One day, Sam opens the toy box and finds that one toy is missing!...   Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy bear, a green dinosaur, and a purple kite. One day, Sam opens the toy box and finds that one toy is missing!... 
        Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy bear, a green dinosaur, and a purple kite. One day, Sam opens the toy box and finds that one toy is missing!...   Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy bear, a green dinosaur, and a purple kite. One day, Sam opens the toy box and finds that one toy is missing!... 
        Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy bear, a green dinosaur, and a purple kite. One day, Sam opens the toy box and finds that one toy is missing!...   Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy bear, a green dinosaur, and a purple kite. One day, Sam opens the toy box and finds that one toy is missing!... 
        
        (This text will continue with long questions)
      </p>
    </div>

    {/* Right Side - Image Placeholder (Responsive) */}
    <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-800 rounded-lg p-4
    h-[50vw] min-h-[60vw] lg:min-h-[30vw] lg:max-h-[40vw] lg:overflow-y-auto">
    <span className="text-gray-400">[Image Placeholder]</span>
  </div>

  </div>
</div>



        {/* Answer Input */}
        <div className="absolute bottom-0 left-0 w-full p-5 bg-black rounded-xl">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Type your answer"
              className="w-[300px] bg-transparent text-white p-2 border-b-2 border-gray-400 focus:outline-none placeholder-gray-500"
            />
            <button className="ml-[-30px] text-xl text-cyan-500 p-3 hover:text-[rgba(0,96,96,1)]">
              ➜
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
