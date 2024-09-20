/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      spacing: {
        14: "3.5rem",
        "125px": "125px",
      },
      colors: {
        hoverspt: "#18D760",
        "purple-main": "#2D46B9",
        "green-main": "#1ED760",
      },
      backgroundImage: (theme) => ({
        "spotfy-theme": "url('../images/bursts.svg')",
        "spotfy-theme-mobile": "url('../images/bursts-mobile.svg')",
      }),
      backgroundSize: {
        "260%": "260%",
        "175%": "175%",
      },
      backgroundPosition: {
        banner: "46% 4%",
        "banner-mobile": "top 25% center",
      },
      fontSize: {
        "9xl": "9rem",
      },
    },
  },
  plugins: [],
};
