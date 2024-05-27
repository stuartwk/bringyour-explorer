/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#E3E4E9",
          200: "#C7C9D3",
          300: "#ABAEBD",
          400: "#8F93A7",
          500: "#397CC9",
          600: "#575D7B",
          700: "#3B4165",
          800: "#161429",
          900: "#0C0D1E",
        },
      },
      spacing: {
        px: "1px",
      },
    },
  },
  plugins: [],
};
