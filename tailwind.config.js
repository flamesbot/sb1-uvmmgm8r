/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'ripple-1': 'ripple 3s linear infinite',
        'ripple-2': 'ripple 3s linear infinite 1s',
        'ripple-3': 'ripple 3s linear infinite 2s',
      },
    },
  },
  plugins: [],
};