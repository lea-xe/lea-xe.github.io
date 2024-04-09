/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./src/**/**/*.*",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#5B5853',
        'beige': '#D5CEBE',
        'gray': '#817C75',
        'light': '#F5F4EF',
      },
      fontFamily: {
        'primary': ['"EB Garamond"', 'system-ui', 'sans-serif'],
        'secondary': ['Robika', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '200': '40rem'
      },
      screens: {
        '3xl': '1700px'
      },
    },
  },
  plugins: [],
}