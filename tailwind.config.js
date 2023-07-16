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
      backgroundImage: {
        "hero-bg": "url('/src/assets/herobg.jpg')",
      },
      boxShadow: {
        "3xl": "1px 1px 50px 1px rgba(0,0,0,0.50) inset",
      },
    },
  },
  plugins: [require("daisyui")],
};
