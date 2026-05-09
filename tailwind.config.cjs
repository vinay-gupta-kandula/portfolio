module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#00e5ff',
        }
      },
      backgroundImage: {
        'grid-lines': 'linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
}
