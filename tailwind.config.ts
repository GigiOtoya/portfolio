import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "tracking-in-contract":
          "tracking-in-contract 1.0s cubic-bezier(0.215, 0.610, 0.355, 1.000)",
      },
      keyframes: {
        "tracking-in-contract": {
          "0%": {
            "letter-spacing": "1em",
            opacity: "0",
          },
          "40%": {
            opacity: ".6",
          },
          to: {
            "letter-spacing": "normal",
            opacity: "1",
          },
        },
      },
    },
    screens: {
      sm: "640px",
    },
  },
  plugins: [],
};
export default config;
