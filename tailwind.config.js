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
      gray: "#f6f4f4",
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
      eventImageOne: "url('https://images.squarespace-cdn.com/content/v1/5d5c35d09c5b31000112bab9/1621274773948-UAVQFGJTG7DT7K3E6HIQ/cafecitoApril2021-13.jpg?format=500w')",
      eventImageTwo: "url('https://images.squarespace-cdn.com/content/v1/5d5c35d09c5b31000112bab9/1631893398085-C49ROZMY79DLA0BVJSXW/wine+and+chile+icon.png?format=500w')",
      eventImageThree: "url('https://images.squarespace-cdn.com/content/v1/5d5c35d09c5b31000112bab9/1631895743511-L3E6HYT3ZYG3YJYWGG3X/21efc5464380de401068d19530dd8a170a5c8559.jpeg?format=500w')",
      eventImageFour: "url('https://images.squarespace-cdn.com/content/v1/5d5c35d09c5b31000112bab9/1631896345270-VZLBGTB947931J92QLZP/IMG_442D5AA465F1-1.jpeg?format=500w')",
      LunchBg: "url('https://images.squarespace-cdn.com/content/v1/5d5c35d09c5b31000112bab9/1612080267384-4EXG5X6S59DHJ0S0PJQO/cafecitoDecemberBowls-11.jpg?format=2500w')",
      BreakfastBg: "url('https://images.squarespace-cdn.com/content/v1/5d5c35d09c5b31000112bab9/1612081082317-ACG6W1NTTVR755NSCVLW/breakfast-24-2.jpg?format=2500w')",
      BakedBg: "url('https://images.squarespace-cdn.com/content/v1/5d5c35d09c5b31000112bab9/1612081762293-RVM72ZT8IYK6YVQRUVWZ/bake+goods+and+dessert-25.jpg?format=2500w')",
      findUsBg: "url('https://images.squarespace-cdn.com/content/v1/5d5c35d09c5b31000112bab9/1612074367458-YKRFYBHPTEMY3EH7A66H/space-076.jpg?format=2500w')"
    }
  },
  plugins: [],
}

