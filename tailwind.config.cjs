/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      mblue:'#0F90E5',
      mbluelight:"#66B4E8",
      mblack:{
        dark:'#3B444A',
        light:'#495258',
        lighter:"#8E9497"
      },
      bblue:'#F1F4F6',
      white:'#FFFF'
      
    }
  },
  plugins: [],
}