/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "w-168": "168px",
        "w-295": "295px",
        "w-433": "433px",
        "w-564": "564px",
      },
    },
  },
  plugins: [],
};

