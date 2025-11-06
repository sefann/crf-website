/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D4AF37',
          gold: '#D4AF37',
        },
        secondary: {
          DEFAULT: '#003366',
          blue: '#003366',
        },
        accent: {
          white: '#FFFFFF',
          gray: '#F8F8F8',
        },
        text: {
          charcoal: '#222222',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Lato', 'Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

