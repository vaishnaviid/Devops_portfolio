/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
    ],
  darkMode: 'class',
  theme: {
    extend: {
        fontFamily: {
            geist: ['Geist', 'ui-sans-serif', 'system-ui'],
        },
        colors: {
            site: {
                bg: '#101112',
                text: '#d9d9d9',
                h2: '#9f9fa9',
                primary: '#914bf1'
            }
        }
    }   
  },
  plugins: [],
};
