module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xl: '1200px'
      },
      width: {
        main: '1200px',
        '560px': '560px'
      },
      maxHeight: {
        '596px': '596px'
      },
      fontFamily: {
        overlock: ["'Overlock'"]
      },
      textColor: {
        'light-orange': '#ff8b47'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      textColor: ['disabled']
    }
  },
  plugins: []
}
