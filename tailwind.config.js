/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: {
          "100": "#f7f7f7",
          "200": "#ebebeb",
        },
        black: "#000",
        tomato: "rgba(255, 76, 76, 0.21)",
        orangered: "rgba(255, 92, 0, 0.68)",
        gray: {
          "100": "#868686",
          "200": "#858484",
        },
        maroon: {
          "100": "rgba(117, 0, 0, 0.3)",
          "200": "rgba(117, 0, 0, 0.28)",
        },
        forestgreen: "#009621",
        darkslategray: "#393939",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      // borderRadius: {
      //   "8xs": "5px",
      // },
    },
    fontSize: {
      xs: "12px",
      lg: "18px",
      base: "16px",
      "2xl": "21px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
