import('tailwindcss').Config
module.exports = {
    theme: {
      extend: {
        animation: {
          rotate: "rotate 10s linear infinite",
        },
        keyframes: {
          rotate: {
            "0%": { transform: "rotate(0deg) scale(10)" },
            "100%": { transform: "rotate(-360deg) scale(10)" },
          },
        },
      },
    },
    plugins: [],
  };
  module.exports = {
    theme: {
      extend: {
        animation: {
          borderMove: "borderRotate 3s linear infinite",
        },
        keyframes: {
          borderRotate: {
            "0%": { backgroundPosition: "0% 50%" },
            "100%": { backgroundPosition: "100% 50%" },
          },
        },
      },
    },
    plugins: [],
  };
  