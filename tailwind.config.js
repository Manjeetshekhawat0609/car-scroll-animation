/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { night: "#15112b", dusk: "#3a1f5d", ember: "#ff7a2f", pearl: "#f4efe6", mist: "#b7aecb" },
    },
  },
  plugins: [],
};
