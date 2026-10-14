/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0D',
        surface: '#141418',
        borderSubtle: '#1F1F24',
        cream: '#F5F0E8',
        textMuted: '#6B6B76',
        gold: '#FFD700',
        burgundy: '#800020',
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 40px -10px rgba(255, 215, 0, 0.18)',
        'gold-subtle': '0 0 25px -5px rgba(255, 215, 0, 0.12)',
      }
    },
  },
  plugins: [],
}
