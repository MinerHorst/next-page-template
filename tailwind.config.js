/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        accent: {
          100: '#f7f7f7',
          200: '#eaeaea',
          300: '#999999',
        },
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xs': '0.5rem',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      borderWidth: {
        '3': '3px',
        '6': '6px',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '2rem',
      },
      zIndex: {
        '60': 60,
        '70': 70,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

