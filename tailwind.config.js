/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js, jsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "hsl(240, 38%, 20%)",
        grayishBlue: "hsl(240, 18%, 77%)",
      },
    },
  },
  plugins: [],
};
