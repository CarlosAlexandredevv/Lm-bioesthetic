/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: '#62162F',
        darkRose: '#8A3F59',
        sand: '#D8B38D',
        lightCream: '#FFF2DB',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        adamBold: ['"Adam Bold"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
