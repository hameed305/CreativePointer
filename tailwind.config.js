/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: "poppins",
      showgothic: "Showcard Gothic",
    },
    extend: {
      boxShadow: {
        red_glow: [
          "0px 0px 15px 0px  rgba(255, 20, 20, 0.38)",
          "0px 0px 15px 0px  rgba(255, 20, 20, 0.38)",
          "0px 0px 15px 0px  rgba(255, 20, 20, 0.38)",
        ],
        blue_glow: [
          "0px 0px 15px 0px rgba(35,87,255,0.38)",
          "0px 0px 15px 0px rgba(35,87,255,0.38)",
          "0px 0px 15px 0px rgba(35,87,255,0.38)",
        ],
        sky_glow: [
          "0px 0px 15px 0px rgba(0,149,255,0.38)",
          "0px 0px 15px 0px rgba(0,149,255,0.38)",
          "0px 0px 15px 0px rgba(0,149,255,0.38)",
        ],
        black_glow: [
          "0px 0px 15px 0px rgba(0,0,0,0.38)",
          "0px 0px 15px 0px rgba(0,0,0,0.38)",
          "0px 0px 15px 0px rgba(0,0,0,0.38)",
        ],
        white_glow: [
          "0px 0px 15px 0px rgba(255,255,255,0.38)",
          "0px 0px 15px 0px rgba(255,255,255,0.38)",
          "0px 0px 15px 0px rgba(255,255,255,0.38)",
        ],
        yellow_glow: [
          "0px 0px 15px 0px rgba(255,203,14,0.38)",
          "0px 0px 15px 0px rgba(255,203,14,0.38)",
          "0px 0px 15px 0px rgba(255,203,14,0.38)",
        ],
        green_glow: [
          "0px 0px 15px 0px rgba(9,255,0,0.38)",
          "0px 0px 15px 0px rgba(9,255,0,0.38)",
          "0px 0px 15px 0px rgba(9,255,0,0.38)",
        ],
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
