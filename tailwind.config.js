/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-gray': '#99999B',
      },
      backgroundColor: {
        'light-gray': '#FBFAFA',
      },
      borderColor: {
        'tab-active': '#67A0F0',
      },
    },
  },
  plugins: [],
};
