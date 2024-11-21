/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'helvetica': ['Helvetica', 'sans-serif'],
        'helvetica-compressed': ['Helvetica Compressed', 'sans-serif'],
        'helvetica-rounded': ['Helvetica Rounded Bold', 'sans-serif'],
        'helvetica-bold': ['Helvetica', 'sans-serif'],
      },
      screens: {
        xs: '480px',   // Extra small devices
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      colors: {
        'purple': '#32163F',
        'black': '#000000',
        'brown': '#592A20',
        'light-green': '#F5FDFD',
        'black-transparent': 'rgba(0, 0, 0, 0.5)',
        'purple-transparent': 'rgba(50, 22, 63, 0.4)',
        'light-pink': '#FBF5FD',
      },
      backgroundImage: {
        'about-image': "url('/src/assets/images/bike.png')",
        'feature-image': "url('/src/assets/images/map.png')",
      }
    },
  },
  plugins: [],
}