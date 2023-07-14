/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F0EDEF",
        Darkprimary: "#131313",
        Yellowsecondary: "#FFC805",
        Textprimary: "#131313",
        Textsecondary: "#828182",
        Textlightgray: "#ACAAAC",
      },
    },
  },
  plugins: [require("daisyui")],
};
