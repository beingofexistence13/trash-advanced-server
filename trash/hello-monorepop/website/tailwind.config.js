/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,ts,tsx}',
    './components/**/*.{html,ts,tsx}',
    './sections/**/*.{html,tsx,ts}',
    './styles/**/*.{ts,tsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
  plugins: [],
};
