/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-blue': '#00A1E5',
        'light-blue' : '#ade7ff',
        'shadow-blue' : '#9ad1e8' ,    
       },
    },
  },
  plugins: [],
}

