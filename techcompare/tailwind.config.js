/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "480px", // Custom breakpoint
      sm: "640px",
      md: "768px",
      lg: "1450px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      Inter: ["Inter", "Inter"],
      Roboto: ["Roboto", "Serif"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".clip-triangle": {
          "clip-path": "polygon(50% 0%, 0% 100%, 100% 100%)",
        },
        // Add more custom clip-path utilities as needed
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
