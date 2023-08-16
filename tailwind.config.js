/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'mainbg': "linear-gradient(180deg, #FEF3F3 0%, #FFF 100%)",
      },
      colors:{
        primaryColorLight: "#F54748",
        primaryColorSuperLight: "#FDECEC",
        primaryColor: "#F54748",
        mainColor: "#FEF3F3",
      },
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

