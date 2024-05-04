import flowbitePlugin from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */ export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      blue: '#26d2e2',
      'blue-marin': '#122333',
      'blue-light': '#293744',
      black: '#272727',
      red: '#dc322f',
      orange: '#cb4b16',
      yellow: '#f5bb00',
      green: '#00E070',
      'accent-primary': '#4967ff',
      'accent-secondary': {
        500: '#00f6f5',
        600: '#00c3c2'
      },
      white: '#eaeaea',
      beige: '#eee8d5'
    },
    extend: {
      transitionProperty: {
        height: 'height, max-height'
      }
    }
  },
  plugins: [flowbitePlugin]
};
