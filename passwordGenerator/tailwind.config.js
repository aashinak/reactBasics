/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'black-squeeze': {
        '50': '#f6fdfe',
        '100': '#e3f8fb',
        '200': '#c1f3f6',
        '300': '#8aeaef',
        '400': '#4be0e5',
        '500': '#24cdd3',
        '600': '#16a9b3',
        '700': '#138791',
        '800': '#147178',
        '900': '#165c64',
        '950': '#0e3d43',
    },
    'rose-white': {
      '50': '#fef6f6',
      '100': '#fde3e3',
      '200': '#fccccc',
      '300': '#f9a8a8',
      '400': '#f47575',
      '500': '#e94a4a',
      '600': '#d62c2c',
      '700': '#b42121',
      '800': '#951f1f',
      '900': '#7c2020',
      '950': '#430c0c',
  },
  
    }
  },
  plugins: [],
}