/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '420px',
      },
      colors: {
        obsidian: '#090C10', deep: '#050709', slate2: '#12171F', alabaster: '#F5F7FA', charcoal: '#0F172A',
        gold: { DEFAULT: '#C8963E', light: '#DDB468', dark: '#A87A2C' },
        forest: { DEFAULT: '#1E3A2F', deep: '#14241E' },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Oswald', 'Impact', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
