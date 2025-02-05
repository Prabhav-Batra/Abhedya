import gsap from "gsap";
const variantStyles = {
  main: "bg-[#242C31] md:text-lg text-sm py-1 px-3 text-[#f9f9f9] font-medium rounded border-teal-50/10 border hover:bg-teal-900 cursor-pointer transition-all",
};

export const Button = ({ variant, text }) => {
  const mouseHandlerEnter = () => {
    gsap.to(".firstDiv span", {
      y: "-118%",
      opacity: 1,
      rotateX: 0,
      duration: 0.4,
      stagger: 0.02,
    });
    gsap.to(".secondDiv span", {
      y: -20,
      opacity: 1,
      rotateX: 90,
      duration: 0.4,
      stagger: 0.02,
    });
  };
  const mouseHandlerLeave = () => {
    gsap.to(".firstDiv span", {
      y: "0%",
      opacity: 1,
      rotateX: 90,
      duration: 0.4,
      stagger: 0.02,
    });
    gsap.to(".secondDiv span", {
      y: 0,
      rotateX: 0,
      opacity: 1,
      duration: 0.4,
      stagger: 0.02,
    });
  };
  return (
    <button
      className={`${variantStyles[variant]} relative overflow-hidden`}
      onMouseEnter={mouseHandlerEnter}
      onMouseLeave={mouseHandlerLeave}
    >
      <div className="absolute top-[100%] firstDiv">
        {text.split("").map((char, key) => {
          return char === " " ? (
            <span key={key}>&nbsp;</span> // Use non-breaking space for visual spacing
          ) : (
            <span className="inline-block" key={key}>
              {char}
            </span>
          );
        })}
      </div>
      <div className="secondDiv">
        {text.split("").map((char, key) => {
          return char === " " ? (
            <span key={key}>&nbsp;</span> // Use non-breaking space for visual spacing
          ) : (
            <span className="inline-block" key={key}>
              {char}
            </span>
          );
        })}
      </div>
    </button>
  );
};
