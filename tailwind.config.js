/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-gray': '#99999B',
        'lighter-gray': '#7E7E80',
        error: '#C40808',
      },
      backgroundColor: {
        'light-gray': '#FBFAFA',
        'option-hover': '#ECEDF0',
        'option-click': '#CACACD',
      },
      borderColor: {
        'tab-active': '#67A0F0',
        'note-item': '#ECEDF0',
        'note-hover': '#CACACD',
        'note-focus': '#99999B',
      },
      fill: {
        'menu-icon': '#4E4E54',
      },
    },
  },
  plugins: [],
};
