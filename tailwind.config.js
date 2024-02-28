/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "bright-orange": "#e38826",
        "dark-cyan": "#006970",
        "very-dark-cyan": "#004241",
      },
      colors: {
        "bright-orange": "#e38826",
        "dark-cyan": "#006970",
        "very-dark-cyan": "#004241",
      },
    },
  },
  plugins: [],
};
