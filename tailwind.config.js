/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  darkMode: "class",
  theme: {
    extend: {
     
    },
   
    screens: {
      xm: "200px",
      sm: "500px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    
    fontFamily: {
      "krose": ["Kotori Rose"],
    },
  },
  plugins: [
    // require('flowbite/plugin')
  ],
};
