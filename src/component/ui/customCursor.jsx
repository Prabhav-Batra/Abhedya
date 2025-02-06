import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useRecoilValue } from "recoil";
import { customCursorSizeAtom } from "../../store/atom";

export default function Mask() {
  const customCursorSize = useRecoilValue(customCursorSizeAtom);
  const maskRef = useRef(null);

  useEffect(() => {
    const mask = maskRef.current;
    gsap.to(mask, {
      width: `${customCursorSize}px`,
      height: `${customCursorSize}px`,
      duration: 1.5,
      ease: "elastic.out(1,0.3)",
    });
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
  }, [customCursorSize]);

  return (
    <div
      ref={maskRef}
      className="fixed top-0 left-0 bg-teal-50 rounded-full pointer-events-none z-10 mix-blend-difference -translate-x-1/2 -translate-y-1/2"
    ></div>
  );
}
