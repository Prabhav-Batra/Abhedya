import React from "react";
import { HelpCircle, CircleUserRound, LogOutIcon } from "lucide-react";
import FloatingBlobs from "../components/FloatingBlobs";

export const GamePage = () => {
  return (
    <div className="relative min-h-screen bg-transparent text-[rgba(0,170,190,1)] flex flex-col backdrop-blur-[1px] items-center justify-center p-6 ">
      {/* Floating Blobs Component */}
      <div cllassNmae="relative z-0">
      <FloatingBlobs />
      </div>
      
      {/* Header */}
      <div className="absolute top-[48px] flex w-[calc(100%-64px)] gap-[34.2px] justify-between mx-[128px]  lg:flex-nowrap">
      <div className="w-full lg:w-[297.14px] h-[72px] flex items-center bg-black rounded-2xl border-[1.25px] border-[rgba(0,191,163,1)]/60 p-2 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50">
          <CircleUserRound className="text-cyan-400 w-5.5 h-5.5 md:w-10 md:h-10 mr-1 md:mr-2" />
          <div className="flex flex-col ml-[10px] w-full">
            <span className="block text-[10px] md:text-base">Hi there,</span>
            <span className="text-[10px] md:text-xl font-bold overflow-clip">Shardul Sharma</span>
          </div>
        </div>
        
        <div className="hidden lg:flex w-[641.31px] h-[72px] items-center justify-center bg-black rounded-2xl border-[1.25px] border-[rgba(0,191,163,1)]/60 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50">
        </div>
        
        <div className="w-full lg:w-[297.14px] h-[72px] flex items-center justify-between bg-black rounded-2xl border-[1.25px] border-[rgba(0,191,163,1)]/60 p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50">
            <span className="text-lg md:text-3xl font-semibold">Log out</span>
            <LogOutIcon className="ml-auto w-6 h-6 md:w-10 md:h-10" />
        </div>
      </div>
      
      {/* Questions Section */}
      <div className="absolute top-[160px] h-[528px] w-[calc(100%-64px)] bg-black mx-[128px] rounded-2xl border-[1.25px] border-[rgba(0,191,163,1)]/60 shadow-md transition-all duration-300 hover:scale-101 hover:shadow-cyan-500/50 p-6">
        <div className="flex items-center gap-2 text-cyan-400 text-lg font-semibold">
          <HelpCircle className="w-8 h-8 md:w-10 md:h-10" />
          <span className="text-lg md:text-2xl">Question: 01</span>
        </div>
        
        <p className="text-[2.1vw] md:text-base text-gray-300 mt-4">
          Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy bear, a green dinosaur, and a purple kite. One day, Sam opens the toy box and finds that one toy is missing! Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy bear, a green dinosaur, and a purple kite. One day, Sam opens the toy box and finds that one toy is missing! Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy bear, a green dinosaur, and a purple kite. One day, Sam opens the toy box and finds that one toy is missing! Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy bear, a green dinosaur, and a purple kite. One day, Sam opens the toy box and finds that one toy is missing! Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy bear, a green dinosaur, and a purple kite. One day, Sam opens the toy box and finds that one toy is missing! Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy bear, a green dinosaur, and a purple kite. One day, Sam opens the toy box and finds that one toy is missing!Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy bear, a green dinosaur, and a purple kite. One day, Sam opens the toy box and finds that one toy is missing! Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy bear, a green dinosaur, and a purple kite. One day, Sam opens the toy box and finds that one toy is missing!
        </p>
        
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
  );
};
