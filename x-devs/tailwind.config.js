/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{css,js}"],
  theme: {
    extend: {
      fontFamily: {
        fontPrimary: ["Outfit", "sans-serif"],
      },
      backgroundImage: {
        backgroundHero: "url('../images/fundo-base.jpg')",
      },
      colors: {
        primaryColor: "#f1ecff",
        secundaryColor: "#8351fe",
        bgCard: "rgba(179, 177, 185, 0.7)",
        bgTitleDescription: "#333333",
        bgDescription: "rgba(255, 255, 255, 0.8)",
      },
    },
  },
  plugins: [],
};
