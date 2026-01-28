/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        "border-spin": "border-spin 4.5s linear infinite",
      },
      keyframes: {
        "border-spin": {
          "100%": { transform: "rotate(360deg)" },
        },
      },
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
