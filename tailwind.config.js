/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        fundo: '#fff6ef',
        destaque: '#ec2c4a',
        titulo: '#008182',
        rodape: '#ffe3c6'
      },
    },
  },
  plugins: [],
}