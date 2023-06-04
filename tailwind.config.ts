import type { Config } from "tailwindcss";
const srcDir = ".";
export default <Partial<Config>>{
  darkMode: "class",
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#181818",
    },
    screens: {
      "mob-lg": { min: "400px" },
      "tab-pt": { min: "600px" },
      "tab-ls": { min: "900px" },
      "pc-sm": { min: "1200px" },
      "mob-sm-only": { max: "399px" },
      "mob-lg-only": { min: "400px", max: "599px" },
      "tab-pt-only": { min: "600px", max: "899px" },
      "tab-ls-only": { min: "900px", max: "1199px" },
      "pc-sm-only": { min: "1200px", max: "1799px" },
      "pc-lg": { min: "1800px" },
      short: { raw: "(max-height: 649px)" },
      tall: { raw: "(min-height: 650px)" },
    },
  },
  plugins: [],
  content: [
    `${srcDir}/components/**/*.{vue,js,ts}`,
    `${srcDir}/layouts/**/*.vue`,
    `${srcDir}/pages/**/*.vue`,
    `${srcDir}/composables/**/*.{js,ts}`,
    `${srcDir}/plugins/**/*.{js,ts}`,
    `${srcDir}/utils/**/*.{js,ts}`,
    `${srcDir}/App.{js,ts,vue}`,
    `${srcDir}/app.{js,ts,vue}`,
    `${srcDir}/Error.{js,ts,vue}`,
    `${srcDir}/error.{js,ts,vue}`,
  ],
};
