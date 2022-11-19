module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lightCyan: { orig: 'hsl(193, 38%, 86%)' },
        neonGreen: { orig: 'hsl(150, 100%, 66%)' },
        grayishBlue: { orig: 'hsl(217, 19%, 38%)' },
        darkBlue: { orig: 'hsl(217, 19%, 24%)' },
        Blue: { orig: 'hsl(218, 23%, 16%)' },
      },
      fontFamily: {
        mangrope: ['Manrope'],
      },
      letterSpacing: {
        '2widest': '.28em',
      },
    },
  },
  plugins: [],
}
