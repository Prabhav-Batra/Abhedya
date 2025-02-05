import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Mask() {
  const maskRef = useRef(null);

  useEffect(() => {
    const mask = maskRef.current;

    const handleMouseMove = (e) => {
      gsap.to(mask, {
        x: e.clientX,
        y: e.clientY,
        duration: 2,
        ease: "elastic.out(0.11,0.75)",
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={maskRef}
      className="fixed top-0 left-0 w-[50px] h-[50px] bg-white rounded-full pointer-events-none z-10 mix-blend-difference -translate-x-1/2 -translate-y-1/2"
    ></div>
  );
}
