/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D9596",
        secondary: "#9AD0C2",
        "text-primary": "#265073",
        light: "#ECF4D6",
        "dark-primary": "#161A30",
        "dark-scondary": "#31304D",
        "dark-text-primary": "#B6BBC4",
        "dark-light": "#F0ECE5",
      },
    },
  },
  plugins: [],
};
