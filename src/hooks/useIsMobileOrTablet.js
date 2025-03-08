import { useEffect, useState } from "react";

export function useIsMobileOrTablet() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(
    window.matchMedia("(max-width: 1024px)").matches,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.matchMedia("(max-width: 1024px)").matches);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobileOrTablet;
}
