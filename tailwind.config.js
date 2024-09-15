/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm:"480px",
      md:"768px",
      lg:"1024px",
    },
    extend: {},
    container: {
      center:true,
      padding: {
        DEFAULT:'1rem',
        sm:'1.5rem',
      }
    }
  },
  plugins: [],
}