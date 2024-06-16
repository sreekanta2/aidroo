/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { A100: "#0084FF", A200: "#002A64" },
        secondary: { A100: "#42b2fc" },
      },
    },
  },
  plugins: [require("daisyui")],
};
