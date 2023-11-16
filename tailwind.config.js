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
    },
    backgroundImage: {
      fixedImageOne: "url('https://images.squarespace-cdn.com/content/v1/54334f1be4b07621dce3db16/1536075808716-W3VO95KDDPA5DLPMJUJQ/_MG_2670-2.jpg?format=2500w')",
      fixedImageTwo: "url('https://images.squarespace-cdn.com/content/v1/54334f1be4b07621dce3db16/1536077043721-37K9BBXEHF19NM2ZE8TK/_MG_2486.jpg?format=1500w')",
      fixedImageThree: "url('https://images.squarespace-cdn.com/content/v1/54334f1be4b07621dce3db16/1543527373123-QEGMHTBLVJJY29L6JAIO/_MG_2483.jpg?format=1500w')",
      fixedImageFour: "url('https://images.squarespace-cdn.com/content/v1/54334f1be4b07621dce3db16/1543527352169-XKQWM45RTET5M87I3EZZ/_MG_2779.jpg?format=1500w')",
      fixedImageFive: "url('https://images.squarespace-cdn.com/content/v1/54334f1be4b07621dce3db16/1536075816923-5F3LTPLZZBGAE0P73GSF/_MG_2683-2.jpg?format=1500w')",

    }
  },
  plugins: [],
}

