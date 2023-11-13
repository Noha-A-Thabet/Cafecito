/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      customeText: '#f05151',
      whiteTxt: '#f5f5f5',
    },
    backgroundColor: {
      lightgray: 'rgba(0, 0, 0, 0.42)', // Use your preferred light gray color
    },
  },
  plugins: [],
}

