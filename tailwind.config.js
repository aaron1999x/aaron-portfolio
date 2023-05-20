/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        backgroundLight:"#fffffe",
        backgroundDark:"#0f0e17",

        headlineLight: "#00214d",
        paragraphLight: "#1b2d45",
        buttonTextLight: "#00214d",
        headlineDark:"#fffffe",
        paragraphDark:"#a7a9be",
        buttonTextDark: "#fffffe",
        
        cardBackgroundLight:"#f2f4f6",
        cardBackgroundDark:"#fffffe",
        cardParagraphDark:"#2e2f3e",

        buttonLight: "#00ebc7",
        secondaryLight:"#ff5470",
        tertiaryLight:"#fde24f",
        buttonDark:"#ff8906",
        secondaryDark:"#f25f4c",
        tertiaryDark:"#e53170",
      },
      fontFamily:{
        calsan:['var(--font-heading)'],
      }
    },
  },
  plugins: [],
}
