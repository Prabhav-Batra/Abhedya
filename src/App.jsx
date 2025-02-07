import React from "react";
import {HelpCircle} from "lucide-react";

const QuizComponent = () => {
  return (
    <div className="min-h-screen bg-black text-[rgba(0,170,190,1)] flex flex-col items-center justify-center p-6 relative">
      
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="filter blur-[40px]">
        
        <g transform="translate(-100,00) ">
          <path fill="#006060" d="M34,-53.6C45.2,-52.3,56.4,-45.6,57.3,-35.8C58.2,-26,49,-13,45.3,-2.1C41.7,8.8,43.7,17.6,45.3,31.8C46.9,46.1,48.1,65.8,40.5,70.7C32.9,75.7,16.5,65.8,7,53.7C-2.4,41.5,-4.9,27.1,-10.3,20.9C-15.7,14.7,-24,16.7,-32,14.6C-40.1,12.4,-47.8,6.2,-55.9,-4.7C-64,-15.6,-72.4,-31.1,-66.2,-36.4C-60,-41.6,-39.1,-36.6,-25.6,-36.5C-12.1,-36.5,-6.1,-41.5,2.6,-46.1C11.4,-50.7,22.7,-54.9,34,-53.6Z" transform="translate(100 100)" />
        </g>
      </svg>

      <svg viewBox="-350 200 500 500" xmlns="http://www.w3.org/2000/svg" className="filter blur-[40px]">
        
        <g transform="translate(00,100) ">
          <path fill="#006060" d="M34,-53.6C45.2,-52.3,56.4,-45.6,57.3,-35.8C58.2,-26,49,-13,45.3,-2.1C41.7,8.8,43.7,17.6,45.3,31.8C46.9,46.1,48.1,65.8,40.5,70.7C32.9,75.7,16.5,65.8,7,53.7C-2.4,41.5,-4.9,27.1,-10.3,20.9C-15.7,14.7,-24,16.7,-32,14.6C-40.1,12.4,-47.8,6.2,-55.9,-4.7C-64,-15.6,-72.4,-31.1,-66.2,-36.4C-60,-41.6,-39.1,-36.6,-25.6,-36.5C-12.1,-36.5,-6.1,-41.5,2.6,-46.1C11.4,-50.7,22.7,-54.9,34,-53.6Z" transform="translate(100 100)" />
        </g>
      </svg>
      {/* Header */}
      <div className="absolute top-[48px] flex w-[calc(100%-64px)] gap-[34.2px] justify-between mx-[128px] ">
        <div className="w-[297.14px] h-[64px] flex flex-col items-start justify-center bg-black rounded-2xl border-[1.25px] border-[rgba(0,191,163,1)]/60 p-2 shadow-md shadow-[rgba(0,131,109,1)] inset-shadow-sm inset-shadow-[rgba(0,131,109,1)]">
          <span className="block text-[8px] md:text-base">Hi there,</span>
          <span className="block text-[2vw] md:text-xl font-bold">Niaeto Baron</span>
        </div>
        <div className="w-[641.31px] h-[64px] flex items-center justify-center bg-black rounded-2xl border-[1.25px] border-[rgba(0,191,163,1)]/60 shadow-md shadow-[rgba(0,131,109,1)] inset-shadow-sm inset-shadow-[rgba(0,131,109,1)]">
        Box 2
        </div>
        <div className="w-[297.14px] h-[64px] flex items-center justify-center bg-black rounded-2xl border-[1.25px] border-[rgba(0,191,163,1)]/60 shadow-md shadow-[rgba(0,131,109,1)] inset-shadow-sm inset-shadow-[rgba(0,131,109,1)]">
          Log out
        </div>
      </div>
      {/* Questions Section */}
      <div className="absolute top-[160px] h-[528px] flex flex-col w-[calc(100%-64px)] gap-[34.2px] justify-between bg-black opacity- mx-[128px] rounded-2xl border-[1.25px] border-[rgba(0,191,163,1)]/60 shadow-md shadow-[rgba(0,131,109,1)] inset-shadow-sm inset-shadow-[rgba(0,131,109,1)]">
        <div className="flex items-center gap-2 text-cyan-400 text-lg p-8 font-semibold">
          <HelpCircle className="transform scale-[2.25vw] md:scale-[1.25]" />
          <span className="block text-[2.25vw] md:text-2xl">Question: 01</span> 
        </div>
  
        <p className="block text-[2.1vw] md:text-base text-gray-300  mt-4 p-15 absolute top-5 left-0 flex-grow">
          Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy
          bear, a green dinosaur, and a purple kite. One day, Sam opens the toy
          box and finds that one toy is missing!
          Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy
          bear, a green dinosaur, and a purple kite. One day, Sam opens the toy
          box and finds that one toy is missing!
          Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy
          bear, a green dinosaur, and a purple kite. One day, Sam opens the toy
          box and finds that one toy is missing!
          Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy
          bear, a green dinosaur, and a purple kite. One day, Sam opens the toy
          box and finds that one toy is missing!          Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy
          bear, a green dinosaur, and a purple kite. One day, Sam opens the toy
          box and finds that one toy is missing!          Sam has a toy box with 5 toys: a red car, a blue ball, a yellow teddy
          bear, a green dinosaur, and a purple kite. One day, Sam opens the toy
          box and finds that one toy is missing!
        </p>

        {/* Answer Input */}
        <div className="absolute bottom-0 left-0 w-full p-5 bg-black rounded-xl">
        <div className="flex items-center">
          <input
          type="text"
          placeholder="Type your answer"
          className="w-[300px] bg-gray-700 text-white p-3 rounded-xl focus:outline-none"
          />
          <button className="ml-2 bg-cyan-500 p-3 rounded-xl hover:bg-cyan-600">
            ➜
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default QuizComponent;
