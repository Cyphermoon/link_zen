/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      keyframes: {
        moveOut: {
          "0%": {
            transform: "translateX(0%)"
          },
          "20%": {
            transform: "translateX(20%)"
          },
          "40%": {
            transform: "translateX(40%)"
          },
          "60%": {
            transform: "translateX(60%)"
          },
          "70%": {
            transform: "translateX(70%)"
          },
          "90%": {
            transform: "translateX(100%)"
          },
          "100%": {
            transform: "scale(0)",
          }
        },
      },
      animation: {
        moveOut: "moveOut 450ms ease-in-out forwards",
      },
      colors: {
        primary: {
          50: "#f9f9f9",
          DEFAULT: "#F2F2F2",
          200: "#e9e9e9",
          300: "#d9d9d9",
          400: "#b5b5b5",
          500: "#959595",
          600: "#6d6d6d",
          700: "#5a5a5a",
          800: "#3b3b3b",
          900: "#1b1b1b"
        },
        subdue: {
          900: "#252431",
          DEFAULT: "#474554",
          700: "#666474",
          600: "#7b7889",
          500: "#a4a2b3",
        },
        accent: {
          50: "#ebeaff",
          100: "#cbc9fe",
          200: "#a7a6ff",
          DEFAULT: "#8083FF",
          400: "#6363fd",
          500: "#4e45ee",
          600: "#493be3",
          700: "#412fd5",
          800: "#3b21c7",
          900: "#3300af"
        },
        secondary: "#BBA4D0"
      }
    },
  },
  plugins: [
    require("tailwindcss-radix")({
      variantPrefix: "rdx",
    }),
    require("tailwindcss-animate")
  ],
}
