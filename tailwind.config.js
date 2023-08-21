/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tall: { raw: "(min-height:850px)" },
        extreme: { raw: "(min-width: 1400px),(min-height:900px)" },
      },
      fontFamily: {
        textPoppins: ["Poppins, sans-serif"],
      },
    },
  },
  plugins: [],
};
