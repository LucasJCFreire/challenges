/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,css,js}"],
  theme: {
    extend: {
      colors: {
        // elements
        "color-reaction": "hsl(0, 100%, 67%)",
        "color-memory": "hsl(39, 100%, 56%)",
        "color-verbal": "hsl(166, 100%, 37%)",
        "color-visual": "hsl(234, 85%, 45%)",

        "violet-main": "#5F3FFC",
        "gray-span": "#98A1A9",

        //text
        "bg-reaction": "#FFF6F5",
        "bg-memory": "#fffbf2",
        "bg-verbal": "#F2FBFA",
        "bg-visual": "#F3F3FD",
        "btn-continue": "hsl(224, 30%, 27%)",
      },
      backgroundImage: {
        "gradient-circle":
          "linear-gradient(to bottom, #4D21CD 0%, #4D21CD 10%, #5F3FFC 90%, #5F3FFC 100%)",
      },
    },
  },
  plugins: [],
};
