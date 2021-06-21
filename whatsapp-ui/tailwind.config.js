module.exports = {
  engine: "jit",
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "whatzapp-h": "#006257",
        "whatzapp-c": "#06D65E",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
