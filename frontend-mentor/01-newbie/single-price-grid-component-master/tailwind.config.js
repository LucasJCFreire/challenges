/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,css}"],
  theme: {
    extend: {
      fontFamily: {
        fontPrimary: ["Karla"],
      },
      colors: {
        darkCyan: "hsl(179, 62%, 43%)",
        lightCyan: "hsl(179,47%,52%)",
        brightYellow: "hsl(71, 73%, 54%)",
        lightGray: "hsl(204, 43%, 93%)",
        grayishBlue: "hsl(218, 22%, 67%)",
      },
    },
  },
  plugins: [],
};
