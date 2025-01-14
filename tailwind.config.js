/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        urbanist: `"Urbanist", sans-serif`,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
