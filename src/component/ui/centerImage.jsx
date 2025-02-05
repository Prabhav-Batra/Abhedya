import { useEffect, useRef } from "react";
import gsap from "gsap";

export const CenterImage = () => {
  const rotatingDivRef = useRef(null);

  useEffect(() => {
    gsap.to(rotatingDivRef.current, {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <div className="flex justify-center items-center">
      {/* Rotating background div */}
      <div
        ref={rotatingDivRef}
        className="absolute -rotate-4 md:w-[20vw] md:h-[20vw] sm:w-56 sm:h-56 w-44 h-44 rounded-xl bg-[#0E3F3A] border border-teal-100/10"
      ></div>

      {/* Foreground Image Container */}
      <div className="relative sm:w-56 md:w-[20vw] md:h-[20vw] sm:h-56 w-44 h-44 rounded-xl bg-gradient-to-br from-[#031615] to-[#115E59] rotate-2 border border-teal-100/20 shadow shadow-teal-950">
        <img
          className="object-cover absolute bottom-0 md:w-[22vw] md:h-[22vw] sm:w-60 sm:h-60 w-48 h-48"
          src="../../../public/rb_25585 2.png"
        />
      </div>
    </div>
  );
};
