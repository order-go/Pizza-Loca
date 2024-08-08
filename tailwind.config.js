/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fifth: {
          DEFAULT: "#8D6E63",
        },
        fourth: {
          DEFAULT: "#FBC02D",
        },
        tertiary: {
          DEFAULT: "#000000",
        },
        secundary: {
          DEFAULT: "#388E3C",
        },
        primary: {
          DEFAULT: "#B22222",
        },
      },
    },
  },
  plugins: [],
};
