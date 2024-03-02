/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ef4444",
          "secondary": "#fce7f3",
          "accent": "#881337",
          "neutral": "#0a120a",
          "base-100": "#311c29",
          "info": "#007cee",
          "success": "#00ffae",
          "warning": "#d25300",
          "error": "#be0b35",
        },
      },
    ],
  },
  content: ["./src/**/*.{html,njk,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

