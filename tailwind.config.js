/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        moveleft: {
          "0%": { transform: "translateX(0%)" }, // Starting position
          "100%": { transform: "translateX(-100%)" }, // Ending position
        },
      },
      animation: {
        moveleft: "moveleft 400s linear infinite",
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
