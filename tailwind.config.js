/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#8873ef",
        headingColor: "#081e21",
        smallTextColor: "#193256",
      },
    },
  },
  plugins: [],
};

// "./src/**/*.{html,js}"
