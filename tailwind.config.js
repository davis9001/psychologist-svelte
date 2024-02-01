/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: [
    {
      pattern: /bg-*|text-*|from-*|to-*|shadow-*|hover:shadow-*/,
    },
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.slate,
        neutral: colors.yellow,
        accent1: colors.fuchsia,
        accent2: colors.indigo,
        accent3: colors.amber,
      }
    },
  },
  plugins: [],
}

