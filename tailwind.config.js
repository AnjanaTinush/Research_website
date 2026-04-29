/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#84006A",
        secondary: "#FFFFFF",
        accent: "#000000",
        backgroundDefault: "#FAFAFA",
        surface: "#FFFFFF",
        surfaceLight: "#F3F4F6",
        textPrimary: "#1A1A1A",
        textSecondary: "#6B7280",
        darkBackgroundVery: "#0F0F0F",
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'], // override default
      },
      boxShadow: {
        'glow': '0 0 20px rgba(132, 0, 106, 0.1)',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          '-webkit-overflow-scrolling': 'touch',
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          'display': 'none',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}