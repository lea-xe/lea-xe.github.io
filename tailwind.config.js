/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
     "./src/**/*.{js,html}",
    ],
  theme: {
    extend: {
      colors: {
        'dark': '#202020',
        'green': '#BDC2A2',
        'orange': '#EBC19C',
      },
      borderWidth: {
        'custom': '1.5px',
      },
      spacing: {
        '128': '32rem',
      },
      transform: {
        'scale-y-90': 'scaleY(0.9)',
      },
      stroke: {
        'orange': '#EBC19C',
      },

      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      }
    },
    variants: {
      extend: {
        stroke: ['hover'],
      },
      animation: ["motion-safe"],
    }
  },
}

