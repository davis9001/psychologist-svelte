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
    extend: {},
  },
  plugins: [],
}

