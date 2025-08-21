/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
   // add shadcn path if needed
  ],
  theme: {
    extend: {
      colors:{
        primfirst:"#065d8c",
        second:"#99d5f5",
        tatiary1:"#E5B80B",
        tatiary2:"#d62828"
      }
    },
  },
  plugins: [],
};
