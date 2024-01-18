/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        hoverColor: "#008080 ",
        brightColor: "#00ACC1",
        backgroundDarkTextColor: "#00ffff",
        DarkHeader: "#121212",
        DarkContainer: "#111827",
        DarkCard: "#4b5563",
        lightDark: "#083344",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
