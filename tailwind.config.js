/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      customeText: '#f05151',
      redText: '#f37476',
      whiteTxt: '#f5f5f5',
      gray: "rgb(156 163 175)",
      lightGray: "rgb(209 213 219)"
    },
    backgroundColor: {
      lightgray: 'rgba(0, 0, 0, 0.42)', // Use your preferred light gray color
    },
    fontFamily: {
      roboto: ['Roboto Slab', 'serif']
    }
  },
  plugins: [],
}

