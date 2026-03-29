import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      primary: "#5454D4",
      secondary: "#E05688",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  },
  plugins: [],
};

export default config;