/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    fontFamily: { 
      'Poppins-ExtraBold': [
        'Poppins-ExtraBold',
      ],
      'Poppins-Bold': [
        'Poppins-Bold',
      ],
      'Poppins-Medium': [
        'Poppins-Medium'
      ],
      'Poppins-Regular': [
        'Poppins-Regular'
      ],
      'Poppins-SemiBold': [
        'Poppins-SemiBold'
      ],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1200px',
      xl: '1560px', 
    },
    extend: {},
  },
  plugins: [],
}
