/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm:"480px",
      md:"768px",
      lg:"1024px",
    },
    extend: {
      colors: {
        firstColor:'#FFEB00',
        bodyColor: '#FDFAD9',
        whiteColor: '#fff',
        secondColor: '#1230AE',
        thirdColor:'#B8001F',
        fourthColor:'#FEF9D9'
      }
    },
    container: {
      center:true,
      padding: {
        DEFAULT:'1rem',
        sm:'1.5rem',
      }
    },
    fontFamily: {
       playfairFont : ["Playfair Display", 'sans-serif'],
       acmeFont : ["Acme", 'sans-serif'],
       suseFont : ["SUSE", 'sans-serif']
    }
  },
  plugins: [],
}