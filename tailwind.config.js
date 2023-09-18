/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./entities/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          600: "#6E52AA",
          500: "#9069E2",
          300: "#AF94E9",
        },
        neutral: {
          900: "#151415",
          600: "#303031",
          500: "#484849",
          300: "#A19FA5",
          100: "#EDEDED",
          1: "#FFFEFE10",
        },
      },
      fontSize: {
        h1: "2rem",
        h2: "1.5rem",
        h3: "1rem",
        m: "1.125rem",
        sm: "0.8rem",
      },
      fontWeight: {
        h1: "600",
        h2: "600",
        h3: "600",
      },
    },
  },
  plugins: [],
};
