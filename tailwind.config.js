/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C9D6E3',   // pastel blue background
        secondary: '#F7F9FC', // light background
        accent: '#82B1FF',    // blue accent for buttons
        darkText: '#2F2F2F',
        lightText: '#555',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        lg: '1rem',
      }
    },
  },
  plugins: [],
}
