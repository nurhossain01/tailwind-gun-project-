/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#ffc9d7",
        
"secondary": "#ffdac4",
        
"accent": "#e56088",
        
"neutral": "#25232F",
        
"base-100": "#F5F4F6",
        
"info": "#5D79DF",
        
"success": "#3EEAA8",
        
"warning": "#F6B946",
        
"error": "#E76F95",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
