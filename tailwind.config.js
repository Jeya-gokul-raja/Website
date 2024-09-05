/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "image1 ":
          "url('https://www.apple.com/in/home/promos/mac-for-students-2/images/promo_college_students__bxqdcoxgjzw2_medium.jpg')",
      },
    },
  },
  plugins: [],
};
