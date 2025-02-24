/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{css,js}"],
  theme: {
    extend: {
      fontFamily: {
        fontPrimary: ["Big Shoulders Display"],
        fontSecundary: ["Lexend Deca"],
      },
      colors: {
        brightOrange: "hsl(31, 77%, 52%)",
        darkCyan: "hsl(184, 100%, 22%)",
        veryDarkCyan: "hsl(179, 100%, 13%)",
        transparentWhite: "hsla(0, 0%, 100%, 0.75)",
        veryLightGray: "hsl(0, 0%, 95%)",
      },
    },
  },
  plugins: [],
};
