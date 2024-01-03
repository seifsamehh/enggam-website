import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#1f1e1e",
            primary: "#0057b3",
            secondary: "#d53f48",
          },
        },
        dark: {
          colors: {
            background: "#1f1e1e",
            foreground: "#FFFFFF",
            primary: "#016fd0",
            secondary: "#ff474d",
          },
        },
      },
    }),
  ],
};
export default config;
