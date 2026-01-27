/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0d14",
        panel: "#121622",
        neonCyan: "#42d7ff",
        neonPink: "#ff3bd4",
      },
    },
  },
  plugins: [],
};
